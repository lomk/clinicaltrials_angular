import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-companies',
  templateUrl: '../html/companies.component.html'
})
export class CompaniesComponent {
  title = 'Companies';
  content = 'Companies';
}
