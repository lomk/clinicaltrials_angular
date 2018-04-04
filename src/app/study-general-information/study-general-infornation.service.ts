import { StudyGeneralInformation }         from './study-general-information';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyGeneralInformationService {
  private studyGeneralInformationAdminUrl = this.globals.API_URL + '/admin/studyGeneralInformation';
  private studyGeneralInformationUrl = this.globals.API_URL + '/studyGeneralInformation';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyGeneralInformation[]> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInformationUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyGeneralInformation[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyGeneralInformation> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInformationUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyGeneralInformation)
      .catch(this.handleError);
  }

  create(studyGeneralInformation: StudyGeneralInformation): Observable<StudyGeneralInformation> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInformationAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyGeneralInformation), options)
      .map(response => response.json() as StudyGeneralInformation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyGeneralInformation: StudyGeneralInformation): Observable<StudyGeneralInformation> {
    const options = new RequestOptions();
    const url = `${this.studyGeneralInformationAdminUrl}/${studyGeneralInformation.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyGeneralInformation), options)
      .map(response => response.json() as StudyGeneralInformation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyGeneralInformationUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
