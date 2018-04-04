import { StudyStatus }         from './study-status';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyStatusService {
  private studyStatusAdminUrl = this.globals.API_URL + '/admin/studyStatus';
  private studyStatusUrl = this.globals.API_URL + '/studyStatus';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyStatus[]> {
    const options = new RequestOptions();
    const url = `${this.studyStatusUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyStatus[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyStatus> {
    const options = new RequestOptions();
    const url = `${this.studyStatusUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyStatus)
      .catch(this.handleError);
  }

  create(studyStatus: StudyStatus): Observable<StudyStatus> {
    const options = new RequestOptions();
    const url = `${this.studyStatusAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyStatus), options)
      .map(response => response.json() as StudyStatus)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyStatus: StudyStatus): Observable<StudyStatus> {
    const options = new RequestOptions();
    const url = `${this.studyStatusAdminUrl}/${studyStatus.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyStatus), options)
      .map(response => response.json() as StudyStatus)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyStatusUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
