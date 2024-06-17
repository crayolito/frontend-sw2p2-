import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vuelo-opcion1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './opcion1.component.html',
  styleUrl: './opcion1.component.css'
})
export class VueloOpcion1Component {
  @Input({ required: true, }) placeholderCustom!: string;
  @Output()
  public onValueCustom: EventEmitter<string> = new EventEmitter();
  valueCustom: string = "";

  onChangeValueCustom() {
    this.onValueCustom.emit(this.valueCustom);
  }
}
