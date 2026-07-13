import { Component } from '@angular/core';

import { AuthComponent } from './components/auth/auth.component';
import { LearningResourcesComponent } from './components/learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [AuthComponent, LearningResourcesComponent],
})
export class AppComponent {}
