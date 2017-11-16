import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  { path: 'blogs', component: BlogComponent },
  { path: 'edit/:id', component: EditPageComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})

export class AppRoutingModule { }
