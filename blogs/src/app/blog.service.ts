import { Injectable } from '@angular/core';
import { Entry } from './blog-entry';
//import { ENTRIES } from './entry-list';

@Injectable()
export class BlogService {

  entries: Entry[];

  constructor() {
    this.entries = [
      { id: 1, title: "First post", post: "Lots of stuff."},
      { id: 2, title: "Second post", post: "More interesting stuff."},
      { id: 3, title: "New post", post: "Really neat stuff."},
      { id: 4, title: "Another post", post: "Less important stuff."},
      { id: 5, title: "Last post", post: "Still more stuff to talk about."}
    ];
  }

  addEntry (newEntry: Entry): void {
    this.entries.push(newEntry);
  }
  getEntries(): Entry[] {
      return this.entries;
  }
}
