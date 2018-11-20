import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dynamic-form-test',
  templateUrl: './dynamic-form-test.component.html',
  styleUrls: ['./dynamic-form-test.component.scss']
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
  
  constructor(public formBuilder: FormBuilder,
    private modalService: BsModalService) {
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
  
  public modalRef: BsModalRef; // {1}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
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
