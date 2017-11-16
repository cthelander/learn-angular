import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { Entry } from '../blog-entry';
import { ENTRIES } from '../entry-list';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditPageComponent implements OnInit {
  
  entries: Entry[];
  selectedEntry: Entry;

  addEntry(): void {
    let newEntry = new Entry;
    this.entries.push(newEntry);
    newEntry.id = this.entries.length;
    this.selectedEntry = newEntry;
  }
  doneEditing(): void {
      this.selectedEntry = null;
  }
  
  getEntries(): void {
      this.entries = this.blogService.getEntries();
  }
 
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEntries();
    this.getEntry();
  }

  getEntry() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedEntry = this.entries.find(x => x.id == id);
  }

}
