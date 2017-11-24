import { StudyDesignObservationModel }         from '../domain/study-design-observation-model';
import {Http, RequestOptions} from '@angular/http';
import { Injectable }   from '@angular/core';
import {Headers}        from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class StudyDesignObservationModelService {
  private studyDesignObservationModelAdminUrl = this.globals.API_URL + '/admin/studyDesignObservationModel';
  private studyDesignObservationModelUrl = this.globals.API_URL + '/studyDesignObservationModel';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private globals: Globals) {
  }

  getAll(page: number): Observable<StudyDesignObservationModel[]> {
    const options = new RequestOptions();
    const url = `${this.studyDesignObservationModelUrl}?page=${page}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignObservationModel[])
      .catch(this.handleError);
  }

  getOne(id: number): Observable<StudyDesignObservationModel> {
    const options = new RequestOptions();
    const url = `${this.studyDesignObservationModelUrl}?id=${id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http.get(url, options)
      .map(response => response.json() as StudyDesignObservationModel)
      .catch(this.handleError);
  }

  create(studyDesignObservationModel: StudyDesignObservationModel): Observable<StudyDesignObservationModel> {
    const options = new RequestOptions();
    const url = `${this.studyDesignObservationModelAdminUrl}/add`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .post(url, JSON.stringify(studyDesignObservationModel), options)
      .map(response => response.json() as StudyDesignObservationModel)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  update(studyDesignObservationModel: StudyDesignObservationModel): Observable<StudyDesignObservationModel> {
    const options = new RequestOptions();
    const url = `${this.studyDesignObservationModelAdminUrl}/${studyDesignObservationModel.id}`;
    options.withCredentials = true;
    options.headers = this.headers;
    return this.http
      .put(url, JSON.stringify(studyDesignObservationModel), options)
      .map(response => response.json() as StudyDesignObservationModel)
      .catch(this.handleError);
    // .catch(response => Observable.throw(response.json()));
  }

  delete(id: number): Observable<void> {
    const options = new RequestOptions();
    options.withCredentials = true;
    options.headers = this.headers;
    const url = `${this.studyDesignObservationModelUrl}/${id}`;
    return this.http.delete(url, options)
      .map(() => null)
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
