import { Injectable } from '@angular/core';
import { Entry } from './blog-entry';
import { ENTRIES } from './entry-list';

@Injectable()
export class BlogService {

  constructor() { }

  getEntries(): Entry[] {
      return ENTRIES;
  }
}
