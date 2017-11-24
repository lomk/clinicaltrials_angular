import { StudyDesignMasking }         from '../domain/study-design-masking';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignMaskingService {
  private studyDesignMaskingAdminUrl = this.globals.API_URL + '/admin/studyDesignMasking';
  private studyDesignMaskingUrl = this.globals.API_URL + '/studyDesignMasking';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignMasking[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignMaskingUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignMasking[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignMasking> {
    const options = new RequestOptions();
    const url = `${this.studyDesignMaskingUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignMasking)
      .catch(this.handleError);
  }

  create(studyDesignMasking: StudyDesignMasking): Observable<StudyDesignMasking> {
    const options = new RequestOptions();
    const url = `${this.studyDesignMaskingAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignMasking), options)
      .map(response => response.json() as StudyDesignMasking)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignMasking: StudyDesignMasking): Observable<StudyDesignMasking> {
    const options = new RequestOptions();
    const url = `${this.studyDesignMaskingAdminUrl}/${studyDesignMasking.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignMasking), options)
      .map(response => response.json() as StudyDesignMasking)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignMaskingUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
