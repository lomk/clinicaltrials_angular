
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';
import {ArticleService}     from '../article/article.service';
import {Article}            from '../article/article';
import {User}               from '../user/user';
import {Subscription}       from 'rxjs/Subscription';

@Component({
  selector: 'app-main-home',
  templateUrl: './main.component.html',
  providers: [ArticleService]
})
export class MainComponent implements OnInit{
  title = 'Main';
  content = 'Main page';
  currentUser: User;
  articles: Article[];
  private subscription: Subscription;

  constructor( private articleService: ArticleService, private router: Router){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  this.router.navigate(['/main/news/']);
  }
}
