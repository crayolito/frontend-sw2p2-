import { Component, EventEmitter, Output, signal } from '@angular/core';


@Component({
  // component-personalized
  selector: 'cp-input-number',
  standalone: true,
  imports: [],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css'
})
export class InputNumberComponent {
  @Output()
  public onValueInputNumber: EventEmitter<number> = new EventEmitter();
  public valueNumber = signal<number>(0);

  sumaValue(value: number) {
    if (value <= -1) {
      return;
    }
    this.valueNumber.set(value + 1);
    this.onValueInputNumber.emit(this.valueNumber());
  }
  restaValue(value: number) {
    if (value == 0) {
      return;
    }
    this.valueNumber.set(value - 1);
    this.onValueInputNumber.emit(this.valueNumber());
  }

  getValue() {
    return this.valueNumber();
  }
}
