import { MedicalInstitutionDepartment }         from './medical-institution-department';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MedicalInstitutionDepartmentService {
  private medicalInstitutionDepartmentAdminUrl = this.globals.API_URL + '/admin/medicalInstitutionDepartment';
  private medicalInstitutionDepartmentUrl = this.globals.API_URL + '/medicalInstitutionDepartment';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MedicalInstitutionDepartment[]> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionDepartmentUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInstitutionDepartment[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MedicalInstitutionDepartment> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionDepartmentUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInstitutionDepartment)
      .catch(this.handleError);
  }

  create(medicalInstitutionDepartment: MedicalInstitutionDepartment): Observable<MedicalInstitutionDepartment> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionDepartmentAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(medicalInstitutionDepartment), options)
      .map(response => response.json() as MedicalInstitutionDepartment)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(medicalInstitutionDepartment: MedicalInstitutionDepartment): Observable<MedicalInstitutionDepartment> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionDepartmentAdminUrl}/${medicalInstitutionDepartment.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(medicalInstitutionDepartment), options)
      .map(response => response.json() as MedicalInstitutionDepartment)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.medicalInstitutionDepartmentUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
