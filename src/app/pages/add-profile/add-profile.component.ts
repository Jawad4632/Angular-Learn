import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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

  constructor(private router: Router) { }

  saveProfile() {
    console.log('Profile submitted:', this.profile);
    this.router.navigate(['/']); // navigate back after save
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
