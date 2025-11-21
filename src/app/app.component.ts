import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarService } from './services/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mywebsite';

  isSidebarOpen = signal(false);

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isSidebarOpen.set(state);
    });
  }
}
