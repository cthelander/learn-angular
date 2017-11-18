import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { Entry } from '../blog-entry';
//import { ENTRIES } from '../entry-list';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditPageComponent implements OnInit {
  
  entries: Entry[];
  selectedEntry: Entry;
  newEntry: Entry;

  addEntry(): void {
    this.newEntry = new Entry;
    //this.entries.push(newEntry);
    this.newEntry.id = this.entries.length + 1;
    this.selectedEntry = this.newEntry;
  }

  doneEditing(): void {
    this.selectedEntry = null;
    if(this.newEntry != null) {
      this.blogService.addEntry(this.newEntry);
      this.appComponent.getNewEntryId();
      this.getEntries();
      this.newEntry = null;
    }
  }
  
  getEntries(): void {
    this.entries = this.blogService.getEntries();
  }

  ngOnInit() {
    this.getEntries();
    this.getEntry();
  }

  getEntry() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedEntry = this.entries.find(x => x.id == id);
    if(id > this.entries.length) {
      this.addEntry();
    }
  }

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private location: Location,
    private appComponent: AppComponent
  ) {}

}
