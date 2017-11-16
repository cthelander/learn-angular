import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogService } from './blog.service'

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CommentsComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
