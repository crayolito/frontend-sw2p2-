FROM node:20-alpine3.20 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm install -g @angular/cli@17.1.3
COPY  . .
RUN npm run build --configuration=production
FROM nginx:1.21.3-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/frontend-p2w2/browser /usr/share/nginx/html
EXPOSE 80
