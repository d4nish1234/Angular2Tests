import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.css']
})
export class DynamicFormTestComponent implements OnInit {
  profileForm = this.formBuilder.group({
    name: [''],
    preference: [''],
    dynamic: this.formBuilder.group({
      appa: [''],
      appb: ['']
    }),
  });

 
  public form
  
  constructor(public formBuilder: FormBuilder,) {
  }
  
  ngOnInit() {
    this.setupForm2();
  }
  
  private updateFields(){
    //console.log('model: ');
    //console.log(this.model);
    console.log('form: ');
    console.log(this.profileForm);
  }
  
  private setupForm2(){
    this.profileForm.patchValue({
      name: 'Nancy',
      preference: 'e.g veggie',
      dynamic: {
        appa: '123 Drew Street',
        appb: '123 Drew Street'
      }
    });
  }

}
