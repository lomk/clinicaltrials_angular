import {Component, OnInit} from '@angular/core';

import                    'rxjs/add/operator/catch';
import                    'rxjs/add/operator/map';
import                    'rxjs/add/operator/toPromise';
import                    'rxjs/add/observable/throw';
import {ArticleService}   from '../article/article.service';
import {Router}           from '@angular/router';
import {Subscription}     from 'rxjs/Subscription';
import {CategoryService}  from '../category/category.service';
import {Category}         from '../category/category';
import {Article}          from '../article/article';

@Component({
  selector: 'app-about-trials',
  templateUrl: './about-trials.component.html',
  providers: [ArticleService, CategoryService]
})
export class AboutTrialsComponent implements OnInit{
  private title = 'About trials';
  private content = 'Admin main page';
  private categorySubscription: Subscription;
  private articleSubscription: Subscription;
  private category: Category;
  private articles: Article[];

  constructor(private articleService: ArticleService,
              private categoryService: CategoryService,
              private router: Router){}

  ngOnInit(){

    this.getArticles();
  }

  getArticles(): void {
    this.categorySubscription = this.categoryService.getByUrl('about_trials').subscribe(category => {
        this.category = category;
        this.articleSubscription = this.articleService.getByCategoryAndPage(this.category, 0).subscribe(articles => {
            this.articles = articles;
          },
          error => {
            if ( error.status === 401 ) {
              this.router.navigate(['/login']);
            }
          });
      },
      error => {
        if ( error.status === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

}
