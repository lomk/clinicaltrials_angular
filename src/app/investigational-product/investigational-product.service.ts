import { InvestigationalProduct }         from './investigational-product';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class InvestigationalProductService {
  private investigationalProductAdminUrl = this.globals.API_URL + '/admin/investigationalProduct';
  private investigationalProductUrl = this.globals.API_URL + '/investigationalProduct';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<InvestigationalProduct[]> {
    const options = new RequestOptions();
    const url = `${this.investigationalProductUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigationalProduct[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<InvestigationalProduct> {
    const options = new RequestOptions();
    const url = `${this.investigationalProductUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as InvestigationalProduct)
      .catch(this.handleError);
  }

  create(investigationalProduct: InvestigationalProduct): Observable<InvestigationalProduct> {
    const options = new RequestOptions();
    const url = `${this.investigationalProductAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(investigationalProduct), options)
      .map(response => response.json() as InvestigationalProduct)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(investigationalProduct: InvestigationalProduct): Observable<InvestigationalProduct> {
    const options = new RequestOptions();
    const url = `${this.investigationalProductAdminUrl}/${investigationalProduct.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(investigationalProduct), options)
      .map(response => response.json() as InvestigationalProduct)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.investigationalProductUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
