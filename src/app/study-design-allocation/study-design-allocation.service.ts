import { StudyDesignAllocation }         from './study-design-allocation';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignAllocationService {
  private studyDesignAllocationAdminUrl = this.globals.API_URL + '/admin/studyDesignAllocation';
  private studyDesignAllocationUrl = this.globals.API_URL + '/studyDesignAllocation';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignAllocation[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignAllocationUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignAllocation[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignAllocation> {
    const options = new RequestOptions();
    const url = `${this.studyDesignAllocationUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignAllocation)
      .catch(this.handleError);
  }

  create(studyDesignAllocation: StudyDesignAllocation): Observable<StudyDesignAllocation> {
    const options = new RequestOptions();
    const url = `${this.studyDesignAllocationAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignAllocation), options)
      .map(response => response.json() as StudyDesignAllocation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignAllocation: StudyDesignAllocation): Observable<StudyDesignAllocation> {
    const options = new RequestOptions();
    const url = `${this.studyDesignAllocationAdminUrl}/${studyDesignAllocation.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignAllocation), options)
      .map(response => response.json() as StudyDesignAllocation)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignAllocationUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
