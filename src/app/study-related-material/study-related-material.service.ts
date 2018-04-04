import { StudyRelatedMaterial }         from './study-related-material';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyRelatedMaterialService {
  private studyRelatedMaterialAdminUrl = this.globals.API_URL + '/admin/studyRelatedMaterial';
  private studyRelatedMaterialUrl = this.globals.API_URL + '/studyRelatedMaterial';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyRelatedMaterial[]> {
    const options = new RequestOptions();
    const url = `${this.studyRelatedMaterialUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyRelatedMaterial[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyRelatedMaterial> {
    const options = new RequestOptions();
    const url = `${this.studyRelatedMaterialUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyRelatedMaterial)
      .catch(this.handleError);
  }

  create(studyRelatedMaterial: StudyRelatedMaterial): Observable<StudyRelatedMaterial> {
    const options = new RequestOptions();
    const url = `${this.studyRelatedMaterialAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyRelatedMaterial), options)
      .map(response => response.json() as StudyRelatedMaterial)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyRelatedMaterial: StudyRelatedMaterial): Observable<StudyRelatedMaterial> {
    const options = new RequestOptions();
    const url = `${this.studyRelatedMaterialAdminUrl}/${studyRelatedMaterial.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyRelatedMaterial), options)
      .map(response => response.json() as StudyRelatedMaterial)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyRelatedMaterialUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
