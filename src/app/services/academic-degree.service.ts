import { AcademicDegree }         from '../domain/academic-degree';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class AcademicDegreeService {
  private academicDegreeAdminUrl = this.globals.API_URL + '/admin/academicDegree';
  private academicDegreeUrl = this.globals.API_URL + '/academicDegree';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(): Observable<AcademicDegree[]> {
    const options = new RequestOptions();
    const url = `${this.academicDegreeUrl}?page=0`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as AcademicDegree[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<AcademicDegree> {
    const options = new RequestOptions();
    const url = `${this.academicDegreeUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as AcademicDegree)
      .catch(this.handleError);
  }

  create(academicDegree: AcademicDegree): Observable<AcademicDegree> {
    const options = new RequestOptions();
    const url = `${this.academicDegreeAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(academicDegree), options)
      .map(response => response.json() as AcademicDegree)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(academicDegree: AcademicDegree): Observable<AcademicDegree> {
    const options = new RequestOptions();
    const url = `${this.academicDegreeAdminUrl}/${academicDegree.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(academicDegree), options)
      .map(response => response.json() as AcademicDegree)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.academicDegreeUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
