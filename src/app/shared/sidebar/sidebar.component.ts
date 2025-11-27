import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);

  activeItem = 'about';

  setActive(item: string) {
    this.activeItem = item;
  }
}
