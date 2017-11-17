import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Entry } from './blog-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  entries: Entry[];
  newEntryId: number;

  getNewEntryId(): void {
      this.entries = this.blogService.getEntries();
      this.newEntryId = this.entries.length + 1;
  }
 
  ngOnInit() {
    this.getNewEntryId();
  }

 title = "Carly's Awesome Blog App";

 constructor(
    private blogService: BlogService,
  ) {}

}
