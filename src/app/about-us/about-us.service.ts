


import { Article }         from '../article/article';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class AboutUsService {
  private articleAdminUrl = this.globals.API_URL + '/admin/about-us';
  private articleUrl = this.globals.API_URL + '/about-us';
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

  getOne(id: number): Observable<Article> {
    const options = new RequestOptions();
    const url = `${this.articleUrl}?id=${id}`;
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

