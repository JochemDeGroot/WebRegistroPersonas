import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {

  public entityRegisterForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.entityRegisterForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required, Validators.minLength(8)]),
      company: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }

  // Make async later:
  onSubmit(fg: FormGroup) {
    try {
      if (!fg.valid) throw new Error('One or more fields has not been filled in correctly.');
      // This is where http service should go
      console.log(fg.value.name, fg.value.dni, fg.value.company, fg.value.email)
    } catch (error) {
      console.log('Terrible error has happened')
    }
  }

}
