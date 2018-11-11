import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.scss']
})
export class DynamicFormTestComponent implements OnInit {
  /*profileForm = new FormGroup({
    name: new FormControl(''),
    preference: new FormControl(''),
    dynamic: new FormGroup({
      appa: new FormControl(''),
      appb: new FormControl('')
    })
  });*/
  profileForm = this.formBuilder.group({
    name: [''],
    preference: [''],
    dynamic: this.formBuilder.group({
      appa: [''],
      appb: ['']
    }),
  });

  /*
  public model = {
    "name": "name here",
    "preference": "e.g. veggie",
    "dynamic": {appa: "app a", appb: "app b"}
  };*/
  
  public form
  
  constructor(public formBuilder: FormBuilder,) {
  }
  
  ngOnInit() {
    //this.setupForm(this.model);
    this.setupForm2();
  }
  
  private updateFields(){
    //console.log('model: ');
    //console.log(this.model);
    console.log('form: ');
    console.log(this.profileForm);
  }
  /*private setupForm(model) {
  
    const formConf = {
      name: null,
      preference: null,
      dynamic: {appa:null, appb:null},
      // app a/b?
    };
    
  this.form = this.formBuilder.group(formConf);

  // send model values to form values
  for (const key in formConf) {
      if (this.form.controls[key]) this.form.controls[key].patchValue(model[key]);
  }
  if (this.form.controls[formConf.dynamic.appa]){
    this.form.controls[formConf.dynamic.appa].patchValue(model.dynamic.appa);
  }
  if (this.form.controls[formConf.dynamic.appb]){
    this.form.controls[formConf.dynamic.appb].patchValue(model.dynamic.appb);
  }


  }*/
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
