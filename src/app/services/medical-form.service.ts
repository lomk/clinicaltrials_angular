import { MedicalForm }         from '../domain/medical-form';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MedicalFormService {
  private medicalFormAdminUrl = this.globals.API_URL + '/admin/medicalForm';
  private medicalFormUrl = this.globals.API_URL + '/medicalForm';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MedicalForm[]> {
    const options = new RequestOptions();
    const url = `${this.medicalFormUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalForm[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MedicalForm> {
    const options = new RequestOptions();
    const url = `${this.medicalFormUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalForm)
      .catch(this.handleError);
  }

  create(medicalForm: MedicalForm): Observable<MedicalForm> {
    const options = new RequestOptions();
    const url = `${this.medicalFormAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(medicalForm), options)
      .map(response => response.json() as MedicalForm)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(medicalForm: MedicalForm): Observable<MedicalForm> {
    const options = new RequestOptions();
    const url = `${this.medicalFormAdminUrl}/${medicalForm.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(medicalForm), options)
      .map(response => response.json() as MedicalForm)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.medicalFormUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
