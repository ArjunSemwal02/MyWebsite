import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  isSidebarOpen = false;

  sidebarSubject = new BehaviorSubject<boolean>(this.isSidebarOpen);
  sidebarState$ = this.sidebarSubject.asObservable();

  openSidebar() {
    this.isSidebarOpen = true;
    this.sidebarSubject.next(this.isSidebarOpen);
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.sidebarSubject.next(this.isSidebarOpen);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarSubject.next(this.isSidebarOpen);
  }
}
