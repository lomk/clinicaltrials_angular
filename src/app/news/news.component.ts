import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';
import {ArticleService} from '../article/article.service';
import {CategoryService} from '../category/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  providers: [ArticleService, CategoryService]
})
export class NewsComponent {
  title = 'News';
  content = 'News';
  constructor(articleService: ArticleService, categoryService: CategoryService, router: Router){

  }
}
