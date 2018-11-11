import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicFormTestComponent } from './dynamic-form-test/dynamic-form-test.component';

const routes: Routes = [
    {
     path:'',
      redirectTo:'dynamicFormTest',
      pathMatch:'full'
    },
    // {
    //   path:'welcome',
    //   component:AppComponent,
    // },
    {
      path:'dynamicFormTest',
      component:DynamicFormTestComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
