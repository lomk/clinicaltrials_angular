import { StudyType }         from '../domain/study-type';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyTypeService {
  private studyTypeAdminUrl = this.globals.API_URL + '/admin/studyType';
  private studyTypeUrl = this.globals.API_URL + '/studyType';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyType[]> {
    const options = new RequestOptions();
    const url = `${this.studyTypeUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyType[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyType> {
    const options = new RequestOptions();
    const url = `${this.studyTypeUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyType)
      .catch(this.handleError);
  }

  create(studyType: StudyType): Observable<StudyType> {
    const options = new RequestOptions();
    const url = `${this.studyTypeAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyType), options)
      .map(response => response.json() as StudyType)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyType: StudyType): Observable<StudyType> {
    const options = new RequestOptions();
    const url = `${this.studyTypeAdminUrl}/${studyType.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyType), options)
      .map(response => response.json() as StudyType)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyTypeUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
