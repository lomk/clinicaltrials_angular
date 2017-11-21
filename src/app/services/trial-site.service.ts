import { TrialSite }         from '../domain/trial-site';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class TrialSiteService {
  private trialSiteAdminUrl = this.globals.API_URL + '/admin/trialSite';
  private trialSiteUrl = this.globals.API_URL + '/trialSite';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getTrialSites(page: number): Observable<TrialSite[]> {
    const options = new RequestOptions();
    const url = `${this.trialSiteUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as TrialSite[])
      .catch(this.handleError);
  }

  getTrialSite(id: number): Observable<TrialSite> {
    const options = new RequestOptions();
    const url = `${this.trialSiteUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as TrialSite)
      .catch(this.handleError);
  }

  create(trialSite: TrialSite): Observable<TrialSite> {
    const options = new RequestOptions();
    const url = `${this.trialSiteAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(trialSite), options)
      .map(response => response.json() as TrialSite)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(trialSite: TrialSite): Observable<TrialSite> {
    const options = new RequestOptions();
    const url = `${this.trialSiteAdminUrl}/${trialSite.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(trialSite), options)
      .map(response => response.json() as TrialSite)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.trialSiteUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
