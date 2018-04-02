import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-about-trials',
  templateUrl: '../html/about-trials.component.html'
})
export class AboutTrialsComponent {
  title = 'About trials';
  content = 'Admin main page';
}
