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
  
  selectedComment: comment;
  comments: comment[];
  entryId: number = 0;
  
  getComments(): void {
    this.comments = this.blogService.getComments().filter(item => item.entryId == this.entryId);
  }

  addComment(): void {
    this.selectedComment = new comment;
    this.selectedComment.id = this.comments.length + 1;
    this.selectedComment.entryId = this.entryId;
  }

  doneEditing(): void {
    if(this.selectedComment.id > this.comments.length) {
      this.blogService.addComment(this.selectedComment);
      this.appComponent.getNewCommentId();
      this.getComments();
      this.selectedComment = null;
    }
  }
  
  onSelect(commentSelected: comment): void {
      this.selectedComment = commentSelected;
  }

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
      this.entryId = +this.route.snapshot.paramMap.get('id');
    this.getComments();
  }

}
