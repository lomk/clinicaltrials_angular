import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-trial-base',
  templateUrl: './trial-base.component.html'
})
export class TrialBaseComponent {
  title = 'Trial base';
  content = 'Trial base';
}
