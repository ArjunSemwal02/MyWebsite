import { Component, inject } from '@angular/core';
import { SocialsService } from '../../services/socials/socials.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  socialService = inject(SocialsService);
  profileService = inject(ProfileService);

  myDetails = this.profileService.myDetails;
  socials$ = this.socialService.socialLinks;


}
