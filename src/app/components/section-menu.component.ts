import {Component, Input, OnInit} from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';
import {Menu} from '../domain/menu';
import {Section} from '../domain/section';

@Component({
  selector: 'app-section-menu',
  templateUrl: '../html/section-menu.component.html'
})
export class SectionMenuComponent implements OnInit {
  selectedSection: Section;

  // @Input() sections: Section[];
  @Input() menu: Menu;

  constructor() { }

  ngOnInit() {
    // console.log(this.sections[0].nameEn);
    this.selectedSection = this.menu.sections[0];
  }
  onSelect(section: Section) {
    this.selectedSection = section;
    return false;
  }

}
