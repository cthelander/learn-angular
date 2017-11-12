import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry } from '../blog-entry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  entry: Entry = {
      id: 1,
      title: "My blog post",
      post: "Today I made an app"
  };

  constructor() { }

  ngOnInit() {
  }

}
