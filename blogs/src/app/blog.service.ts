import { Injectable } from '@angular/core';
import { Entry } from './blog-entry';
import { comment } from './comment';

@Injectable()
export class BlogService {

  entries: Entry[];
  comments: comment[];

  constructor() {
    this.entries = [];
    this.comments = [];
  }

  addEntry (newEntry: Entry): void {
    this.entries.push(newEntry);
  }

  getEntries(): Entry[] {
      return this.entries;
  }

  getComments(): comment[] {
    return this.comments;
  }

  addComment(newComment: comment): void {
    this.comments.push(newComment);
  }
}
