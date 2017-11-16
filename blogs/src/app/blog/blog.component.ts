import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry } from '../blog-entry';
import { ENTRIES } from '../entry-list';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  entries: Entry[];

  selectedEntry: Entry;

  onSelect(entry: Entry): void {
      this.selectedEntry = entry;
  }

  getEntries(): void {
      this.entries = this.blogService.getEntries();
  }

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getEntries();
  }

}
