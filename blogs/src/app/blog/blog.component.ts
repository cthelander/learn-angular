import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry } from '../blog-entry';
import { ENTRIES } from '../entry-list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  entries = ENTRIES;

  selectedEntry: Entry;

  onSelect(entry: Entry): void {
      this.selectedEntry = entry;
  }

  addEntry(): void {
    let newEntry = new Entry;
      this.entries.push(newEntry);
      newEntry.id = this.entries.length;
      this.selectedEntry = newEntry;
  }

  constructor() { }

  ngOnInit() {
  }

}
