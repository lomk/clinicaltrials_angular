import { MedicalInstitutionOfHigherEducation }         from './medical-institution-of-higher-education';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MedicalInstitutionOfHigherEducationService {
  private medicalInstitutionOfHigherEducationAdminUrl = this.globals.API_URL + '/admin/medicalInstitutionOfHigherEducation';
  private medicalInstitutionOfHigherEducationUrl = this.globals.API_URL + '/medicalInstitutionOfHigherEducation';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MedicalInstitutionOfHigherEducation[]> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducation[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MedicalInstitutionOfHigherEducation> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducation)
      .catch(this.handleError);
  }

  create(medicalInstitutionOfHigherEducation: MedicalInstitutionOfHigherEducation): Observable<MedicalInstitutionOfHigherEducation> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(medicalInstitutionOfHigherEducation), options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(medicalInstitutionOfHigherEducation: MedicalInstitutionOfHigherEducation): Observable<MedicalInstitutionOfHigherEducation> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationAdminUrl}/${medicalInstitutionOfHigherEducation.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(medicalInstitutionOfHigherEducation), options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.medicalInstitutionOfHigherEducationUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
