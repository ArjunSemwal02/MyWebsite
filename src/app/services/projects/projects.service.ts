import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  appData = '../../data/appData';
  constructor() { }

  private projectsData = this.appData ;

  getProjects(): Observable<any> {
    return of(this.projectsData);
  }
}
