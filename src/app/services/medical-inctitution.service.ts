import { MedicalInctitution }         from '../domain/medical-inctitution';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MedicalInctitutionService {
  private medicalInctitutionAdminUrl = this.globals.API_URL + '/admin/medicalInctitution';
  private medicalInctitutionUrl = this.globals.API_URL + '/medicalInctitution';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MedicalInctitution[]> {
    const options = new RequestOptions();
    const url = `${this.medicalInctitutionUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInctitution[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MedicalInctitution> {
    const options = new RequestOptions();
    const url = `${this.medicalInctitutionUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInctitution)
      .catch(this.handleError);
  }

  create(medicalInctitution: MedicalInctitution): Observable<MedicalInctitution> {
    const options = new RequestOptions();
    const url = `${this.medicalInctitutionAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(medicalInctitution), options)
      .map(response => response.json() as MedicalInctitution)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(medicalInctitution: MedicalInctitution): Observable<MedicalInctitution> {
    const options = new RequestOptions();
    const url = `${this.medicalInctitutionAdminUrl}/${medicalInctitution.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(medicalInctitution), options)
      .map(response => response.json() as MedicalInctitution)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.medicalInctitutionUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
