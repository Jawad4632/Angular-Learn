import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = environment.baseUrl + 'users';

  constructor(private httpClient: HttpClient) {}

  // GET all profiles
  getProfiles(): Observable<Profile[]> {
    return this.httpClient.get<Profile[]>(this.baseUrl);
  }

  // GET a single profile by ID
  getProfileById(id: string | number): Observable<Profile> {
    return this.httpClient.get<Profile>(`${this.baseUrl}/${id}`);
  }

  // POST (create) a new profile
  createProfile(profile: Profile): Observable<Profile> {
    return this.httpClient.post<Profile>(this.baseUrl, profile);
  }

  // PUT (update) a profile by ID
  updateProfile(id: string | number, profile: Profile): Observable<Profile> {
    return this.httpClient.put<Profile>(`${this.baseUrl}/${id}`, profile);
  }

  // DELETE a profile by ID
  deleteProfile(id: string | number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
