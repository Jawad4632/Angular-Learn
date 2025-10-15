import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {

  profileId!: string;
  profileData!: Profile;

  constructor(private activeRouter: ActivatedRoute, private service: ProfileService,private router:Router) {
    activeRouter.params.subscribe((value) => {
      this.profileId = value['id'];
    })

    this.loadData()
  }

  loadData() {
    this.service.getProfileById(this.profileId).subscribe({
      next: (data) => {
        this.profileData = data
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  onSubmit() {
    console.log('Updated Profile:', this.profileData);
    this.service.updateProfile(this.profileId, this.profileData).subscribe({
      next: (data) => {
        this.router.navigate(['/'])
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

}
