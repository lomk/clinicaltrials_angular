import { StudyDesignInterventionModel }         from '../domain/study-design-intervention-model';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignInterventionModelService {
  private studyDesignInterventionModelAdminUrl = this.globals.API_URL + '/admin/studyDesignInterventionModel';
  private studyDesignInterventionModelUrl = this.globals.API_URL + '/studyDesignInterventionModel';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignInterventionModel[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignInterventionModelUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignInterventionModel[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignInterventionModel> {
    const options = new RequestOptions();
    const url = `${this.studyDesignInterventionModelUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignInterventionModel)
      .catch(this.handleError);
  }

  create(studyDesignInterventionModel: StudyDesignInterventionModel): Observable<StudyDesignInterventionModel> {
    const options = new RequestOptions();
    const url = `${this.studyDesignInterventionModelAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignInterventionModel), options)
      .map(response => response.json() as StudyDesignInterventionModel)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignInterventionModel: StudyDesignInterventionModel): Observable<StudyDesignInterventionModel> {
    const options = new RequestOptions();
    const url = `${this.studyDesignInterventionModelAdminUrl}/${studyDesignInterventionModel.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignInterventionModel), options)
      .map(response => response.json() as StudyDesignInterventionModel)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignInterventionModelUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
