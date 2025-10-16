import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent {
  profile: Profile = {
    id: 0,
    name: '',
    username: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    zip: '',
    state: '',
    country: '',
    photo: ''
  };

  constructor(private router: Router,private service:ProfileService) { }

  saveProfile() {
    console.log('Profile submitted:', this.profile);
    this.service.createProfile(this.profile).subscribe({
      next:()=>{
        this.router.navigate(['/']);
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
