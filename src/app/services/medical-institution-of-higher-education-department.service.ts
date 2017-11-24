import { MedicalInstitutionOfHigherEducationDepartment }         from '../domain/medical-institution-of-higher-education-department';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class MedicalInstitutionOfHigherEducationDepartmentService {
  private medicalInstitutionOfHigherEducationDepartmentAdminUrl = this.globals.API_URL + '/admin/medicalInstitutionOfHigherEducationDepartment';
  private medicalInstitutionOfHigherEducationDepartmentUrl = this.globals.API_URL + '/medicalInstitutionOfHigherEducationDepartment';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<MedicalInstitutionOfHigherEducationDepartment[]> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationDepartmentUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducationDepartment[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<MedicalInstitutionOfHigherEducationDepartment> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationDepartmentUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducationDepartment)
      .catch(this.handleError);
  }

  create(medicalInstitutionOfHigherEducationDepartment: MedicalInstitutionOfHigherEducationDepartment): Observable<MedicalInstitutionOfHigherEducationDepartment> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationDepartmentAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(medicalInstitutionOfHigherEducationDepartment), options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducationDepartment)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(medicalInstitutionOfHigherEducationDepartment: MedicalInstitutionOfHigherEducationDepartment): Observable<MedicalInstitutionOfHigherEducationDepartment> {
    const options = new RequestOptions();
    const url = `${this.medicalInstitutionOfHigherEducationDepartmentAdminUrl}/${medicalInstitutionOfHigherEducationDepartment.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(medicalInstitutionOfHigherEducationDepartment), options)
      .map(response => response.json() as MedicalInstitutionOfHigherEducationDepartment)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.medicalInstitutionOfHigherEducationDepartmentUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
