import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-view-table',
  imports: [CommonModule, RouterModule],
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.scss'
})
export class ViewTableComponent implements OnInit {
  searchQuery = '';
  debounceTimer: any;
  profiles!: Profile[];

  constructor(private service: ProfileService) { }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.service.getProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
      },
      error: (err) => {
        console.error('Failed to fetch profiles:', err);
      }
    });
  }
  onSearchChange(Event: any) {
    this.searchQuery = Event.target.value;
    clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      if (this.searchQuery.length >= 3) {
        console.log('Search (debounced):', this.searchQuery);
      }
    }, 300);
  }

  confirmDelete(id: number) {
    const confirmed = confirm('Are you sure you want to delete this profile?');
    if (confirmed) {
      this.deleteProfile(id);
    }
  }


  deleteProfile(profileNo: number) {
    this.service.deleteProfile(profileNo).subscribe({
      next: () => {
        this.loadData()
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
