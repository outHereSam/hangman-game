import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HowToPlayComponent } from './components/how-to-play/how-to-play.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
];
