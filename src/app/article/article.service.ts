import { Article }         from './article';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {Category} from '../category/category';

@Injectable()
export class ArticleService {
  private articleAdminUrl = this.globals.API_URL + '/admin/article';
  private articleUrl = this.globals.API_URL + '/article';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Article[]> {
    const options = new RequestOptions();
    const url = `${this.articleUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Article[])
      .catch(this.handleError);
  }

  getByCategoryAndPage(page: number, category: Category): Observable<Article[]> {
    const options = new RequestOptions();
    const url = `${this.articleUrl}?page=${page}&category=${category}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Article[])
      .catch(this.handleError);
  }

  getByCategory(category: Category): Observable<Article[]> {
    const options = new RequestOptions();
    const url = `${this.articleUrl}?category=${category}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Article[])
      .catch(this.handleError);
  }

  getById(id: number): Observable<Article> {
    const options = new RequestOptions();
    const url = `${this.articleUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Article)
      .catch(this.handleError);
  }

  getByUrl(name: string): Observable<Article> {
    const options = new RequestOptions();
    const url = `${this.articleUrl}?url=${name}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Article)
      .catch(this.handleError);
  }

  create(article: Article): Observable<Article> {
    const options = new RequestOptions();
    const url = `${this.articleAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(article), options)
      .map(response => response.json() as Article)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(article: Article): Observable<Article> {
    const options = new RequestOptions();
    const url = `${this.articleAdminUrl}/${article.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(article), options)
      .map(response => response.json() as Article)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.articleUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
