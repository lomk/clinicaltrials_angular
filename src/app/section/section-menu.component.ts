import {Component, Input, OnInit} from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';
import {Menu} from '../main/menu';
import {Section} from './section';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html'
})
export class SectionMenuComponent implements OnInit {
  selectedSection: Section;

  // @Input() sections: Section[];
  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
    this.selectedSection = this.menu.sections[0];
  }
  onSelect(section: Section) {
    this.selectedSection = section;
    return false;
  }

}
