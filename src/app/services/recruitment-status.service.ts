import { RecruitmentStatus }         from '../domain/recruitment-status';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class RecruitmentStatusService {
  private recruitmentStatusAdminUrl = this.globals.API_URL + '/admin/recruitmentStatus';
  private recruitmentStatusUrl = this.globals.API_URL + '/recruitmentStatus';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<RecruitmentStatus[]> {
    const options = new RequestOptions();
    const url = `${this.recruitmentStatusUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as RecruitmentStatus[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<RecruitmentStatus> {
    const options = new RequestOptions();
    const url = `${this.recruitmentStatusUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as RecruitmentStatus)
      .catch(this.handleError);
  }

  create(recruitmentStatus: RecruitmentStatus): Observable<RecruitmentStatus> {
    const options = new RequestOptions();
    const url = `${this.recruitmentStatusAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(recruitmentStatus), options)
      .map(response => response.json() as RecruitmentStatus)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(recruitmentStatus: RecruitmentStatus): Observable<RecruitmentStatus> {
    const options = new RequestOptions();
    const url = `${this.recruitmentStatusAdminUrl}/${recruitmentStatus.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(recruitmentStatus), options)
      .map(response => response.json() as RecruitmentStatus)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.recruitmentStatusUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
