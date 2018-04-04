import { StudyDesignTimePerspective }         from './study-design-time-perspective';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignTimePerspectiveService {
  private studyDesignTimePerspectiveAdminUrl = this.globals.API_URL + '/admin/studyDesignTimePerspective';
  private studyDesignTimePerspectiveUrl = this.globals.API_URL + '/studyDesignTimePerspective';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignTimePerspective[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignTimePerspectiveUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignTimePerspective[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignTimePerspective> {
    const options = new RequestOptions();
    const url = `${this.studyDesignTimePerspectiveUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignTimePerspective)
      .catch(this.handleError);
  }

  create(studyDesignTimePerspective: StudyDesignTimePerspective): Observable<StudyDesignTimePerspective> {
    const options = new RequestOptions();
    const url = `${this.studyDesignTimePerspectiveAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignTimePerspective), options)
      .map(response => response.json() as StudyDesignTimePerspective)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignTimePerspective: StudyDesignTimePerspective): Observable<StudyDesignTimePerspective> {
    const options = new RequestOptions();
    const url = `${this.studyDesignTimePerspectiveAdminUrl}/${studyDesignTimePerspective.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignTimePerspective), options)
      .map(response => response.json() as StudyDesignTimePerspective)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignTimePerspectiveUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
