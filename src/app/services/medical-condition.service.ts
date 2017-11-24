import { MedicalCondition }         from '../domain/medical-condition';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MedicalConditionService {
  private medicalConditionAdminUrl = this.globals.API_URL + '/admin/medicalCondition';
  private medicalConditionUrl = this.globals.API_URL + '/medicalCondition';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MedicalCondition[]> {
    const options = new RequestOptions();
    const url = `${this.medicalConditionUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalCondition[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MedicalCondition> {
    const options = new RequestOptions();
    const url = `${this.medicalConditionUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalCondition)
      .catch(this.handleError);
  }

  create(medicalCondition: MedicalCondition): Observable<MedicalCondition> {
    const options = new RequestOptions();
    const url = `${this.medicalConditionAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(medicalCondition), options)
      .map(response => response.json() as MedicalCondition)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(medicalCondition: MedicalCondition): Observable<MedicalCondition> {
    const options = new RequestOptions();
    const url = `${this.medicalConditionAdminUrl}/${medicalCondition.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(medicalCondition), options)
      .map(response => response.json() as MedicalCondition)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.medicalConditionUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
