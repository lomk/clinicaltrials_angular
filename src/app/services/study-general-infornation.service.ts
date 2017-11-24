import { StudyGeneralInfornation }         from '../domain/study-general-infornation';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyGeneralInfornationService {
  private studyGeneralInfornationAdminUrl = this.globals.API_URL + '/admin/studyGeneralInfornation';
  private studyGeneralInfornationUrl = this.globals.API_URL + '/studyGeneralInfornation';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyGeneralInfornation[]> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInfornationUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyGeneralInfornation[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyGeneralInfornation> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInfornationUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyGeneralInfornation)
      .catch(this.handleError);
  }

  create(studyGeneralInfornation: StudyGeneralInfornation): Observable<StudyGeneralInfornation> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInfornationAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyGeneralInfornation), options)
      .map(response => response.json() as StudyGeneralInfornation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyGeneralInfornation: StudyGeneralInfornation): Observable<StudyGeneralInfornation> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInfornationAdminUrl}/${studyGeneralInfornation.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyGeneralInfornation), options)
      .map(response => response.json() as StudyGeneralInfornation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyGeneralInfornationUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
