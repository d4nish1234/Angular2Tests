import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicFormTestComponent } from './dynamic-form-test/dynamic-form-test.component';
import { MovieSiteReaderComponent } from './movie-site-reader/movie-site-reader.component';

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
    },
    {
      path:'movie',
      children:[
        {
          path: 'search',
          component: MovieSiteReaderComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
