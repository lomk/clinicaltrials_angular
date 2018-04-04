import { StudyDesignEndpointClassification }         from './study-design-endpoint-classification';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignEndpointClassificationService {
  private studyDesignEndpointClassificationAdminUrl = this.globals.API_URL + '/admin/studyDesignEndpointClassification';
  private studyDesignEndpointClassificationUrl = this.globals.API_URL + '/studyDesignEndpointClassification';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignEndpointClassification[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignEndpointClassificationUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignEndpointClassification[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignEndpointClassification> {
    const options = new RequestOptions();
    const url = `${this.studyDesignEndpointClassificationUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignEndpointClassification)
      .catch(this.handleError);
  }

  create(studyDesignEndpointClassification: StudyDesignEndpointClassification): Observable<StudyDesignEndpointClassification> {
    const options = new RequestOptions();
    const url = `${this.studyDesignEndpointClassificationAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignEndpointClassification), options)
      .map(response => response.json() as StudyDesignEndpointClassification)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignEndpointClassification: StudyDesignEndpointClassification): Observable<StudyDesignEndpointClassification> {
    const options = new RequestOptions();
    const url = `${this.studyDesignEndpointClassificationAdminUrl}/${studyDesignEndpointClassification.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignEndpointClassification), options)
      .map(response => response.json() as StudyDesignEndpointClassification)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignEndpointClassificationUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
