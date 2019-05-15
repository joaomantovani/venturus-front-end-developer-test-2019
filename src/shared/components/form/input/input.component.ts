import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormControlName} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.control;
  }

  hasSucess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
