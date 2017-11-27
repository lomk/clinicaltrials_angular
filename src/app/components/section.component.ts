import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-news',
  templateUrl: '../html/news.component.html'
})
export class SectionComponent {
  title = 'Section';
  content = 'Section';
}
