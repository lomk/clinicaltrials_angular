import { Comment }         from '../domain/comment';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class CommentService {
  private commentAdminUrl = this.globals.API_URL + '/admin/comment';
  private commentUrl = this.globals.API_URL + '/comment';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Comment[]> {
    const options = new RequestOptions();
    const url = `${this.commentUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Comment[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Comment> {
    const options = new RequestOptions();
    const url = `${this.commentUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Comment)
      .catch(this.handleError);
  }

  create(comment: Comment): Observable<Comment> {
    const options = new RequestOptions();
    const url = `${this.commentAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(comment), options)
      .map(response => response.json() as Comment)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(comment: Comment): Observable<Comment> {
    const options = new RequestOptions();
    const url = `${this.commentAdminUrl}/${comment.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(comment), options)
      .map(response => response.json() as Comment)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.commentUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
