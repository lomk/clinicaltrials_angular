import { ClinicalStudy }         from '../domain/clinical-study';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class ClinicalStudyService {
  private clinicalStudyAdminUrl = this.globals.API_URL + '/admin/clinicalStudy';
  private clinicalStudyUrl = this.globals.API_URL + '/clinicalStudy';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<ClinicalStudy[]> {
    const options = new RequestOptions();
    const url = `${this.clinicalStudyUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as ClinicalStudy[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<ClinicalStudy> {
    const options = new RequestOptions();
    const url = `${this.clinicalStudyUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as ClinicalStudy)
      .catch(this.handleError);
  }

  create(clinicalStudy: ClinicalStudy): Observable<ClinicalStudy> {
    const options = new RequestOptions();
    const url = `${this.clinicalStudyAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(clinicalStudy), options)
      .map(response => response.json() as ClinicalStudy)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(clinicalStudy: ClinicalStudy): Observable<ClinicalStudy> {
    const options = new RequestOptions();
    const url = `${this.clinicalStudyAdminUrl}/${clinicalStudy.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(clinicalStudy), options)
      .map(response => response.json() as ClinicalStudy)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.clinicalStudyUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
