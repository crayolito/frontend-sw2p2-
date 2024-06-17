import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-turismo-opcion2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './opcion2.component.html',
  styleUrl: './opcion2.component.css'
})
export class TurismoOpcion2Component {
  @Input({ required: true, }) placeholderCustom!: string;
  @Output()
  public onValueCustom: EventEmitter<string> = new EventEmitter();
  valueCustom: string = "";

  onChangeValueCustom() {
    this.onValueCustom.emit(this.valueCustom);
  }
}
