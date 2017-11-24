import { Sponsor }         from '../domain/sponsor';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class SponsorService {
  private sponsorAdminUrl = this.globals.API_URL + '/admin/sponsor';
  private sponsorUrl = this.globals.API_URL + '/sponsor';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<Sponsor[]> {
    const options = new RequestOptions();
    const url = `${this.sponsorUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Sponsor[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<Sponsor> {
    const options = new RequestOptions();
    const url = `${this.sponsorUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as Sponsor)
      .catch(this.handleError);
  }

  create(sponsor: Sponsor): Observable<Sponsor> {
    const options = new RequestOptions();
    const url = `${this.sponsorAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(sponsor), options)
      .map(response => response.json() as Sponsor)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(sponsor: Sponsor): Observable<Sponsor> {
    const options = new RequestOptions();
    const url = `${this.sponsorAdminUrl}/${sponsor.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(sponsor), options)
      .map(response => response.json() as Sponsor)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.sponsorUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
