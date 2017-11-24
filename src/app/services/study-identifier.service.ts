import { StudyIdentifier }         from '../domain/study-identifier';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyIdentifierService {
  private studyIdentifierAdminUrl = this.globals.API_URL + '/admin/studyIdentifier';
  private studyIdentifierUrl = this.globals.API_URL + '/studyIdentifier';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyIdentifier[]> {
    const options = new RequestOptions();
    const url = `${this.studyIdentifierUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyIdentifier[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyIdentifier> {
    const options = new RequestOptions();
    const url = `${this.studyIdentifierUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyIdentifier)
      .catch(this.handleError);
  }

  create(studyIdentifier: StudyIdentifier): Observable<StudyIdentifier> {
    const options = new RequestOptions();
    const url = `${this.studyIdentifierAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyIdentifier), options)
      .map(response => response.json() as StudyIdentifier)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyIdentifier: StudyIdentifier): Observable<StudyIdentifier> {
    const options = new RequestOptions();
    const url = `${this.studyIdentifierAdminUrl}/${studyIdentifier.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyIdentifier), options)
      .map(response => response.json() as StudyIdentifier)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyIdentifierUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
