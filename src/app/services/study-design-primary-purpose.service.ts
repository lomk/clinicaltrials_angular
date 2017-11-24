import { StudyDesignPrimaryPurpose }         from '../domain/study-design-primary-purpose';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignPrimaryPurposeService {
  private studyDesignPrimaryPurposeAdminUrl = this.globals.API_URL + '/admin/studyDesignPrimaryPurpose';
  private studyDesignPrimaryPurposeUrl = this.globals.API_URL + '/studyDesignPrimaryPurpose';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignPrimaryPurpose[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignPrimaryPurposeUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignPrimaryPurpose[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignPrimaryPurpose> {
    const options = new RequestOptions();
    const url = `${this.studyDesignPrimaryPurposeUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignPrimaryPurpose)
      .catch(this.handleError);
  }

  create(studyDesignPrimaryPurpose: StudyDesignPrimaryPurpose): Observable<StudyDesignPrimaryPurpose> {
    const options = new RequestOptions();
    const url = `${this.studyDesignPrimaryPurposeAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignPrimaryPurpose), options)
      .map(response => response.json() as StudyDesignPrimaryPurpose)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignPrimaryPurpose: StudyDesignPrimaryPurpose): Observable<StudyDesignPrimaryPurpose> {
    const options = new RequestOptions();
    const url = `${this.studyDesignPrimaryPurposeAdminUrl}/${studyDesignPrimaryPurpose.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignPrimaryPurpose), options)
      .map(response => response.json() as StudyDesignPrimaryPurpose)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignPrimaryPurposeUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
