import { Routes } from '@angular/router';
import { ViewTableComponent } from './pages/view-table/view-table.component';
import { AddProfileComponent } from './pages/add-profile/add-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

export const routes: Routes = [
    { path: '', component: ViewTableComponent },
    { path: 'add-profile', component: AddProfileComponent },
    { path: 'edit/:id', component: EditProfileComponent }
];
