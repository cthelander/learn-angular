import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { comment } from '../comment';
import { BlogService } from '../blog.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommentsComponent implements OnInit {
  
  newComment: comment;  
  selectedComment: comment;
  comments: comment[];
  
  getComments(): void {
    this.comments = this.blogService.getComments();
  }

  addComment(): void {
    this.newComment = new comment;
    this.newComment.id = this.comments.length + 1;
    this.selectedComment = this.newComment;
  }

  doneEditing(): void {
    this.selectedComment = null;
    if(this.newComment != null) {
      this.blogService.addComment(this.newComment);
      this.appComponent.getNewCommentId();
      this.getComments();
      this.newComment = null;
    }
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedComment = this.comments.find(x => x.id == id);
    if(id > this.comments.length) {
      this.addComment();
    }
  }
 
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.getComments();
    this.getComment();
  }

}
