import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Entry } from './blog-entry';
import { comment } from './comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entries: Entry[];
  comments: comment[];
  newEntryId: number;
  newCommentId: number;

  getNewEntryId(): void {
      this.entries = this.blogService.getEntries();
      this.newEntryId = this.entries.length + 1;
  }
 
  getNewCommentId(): void {
      this.comments = this.blogService.getComments();
      this.newCommentId = this.comments.length + 1;
  }
 
  ngOnInit() {
    this.getNewEntryId();
    this.getNewCommentId();
  }

 title = "Carly's Awesome Blog App";

 constructor(
    private blogService: BlogService,
  ) {}

}
