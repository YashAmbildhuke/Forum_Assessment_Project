import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  imports: [RouterLink],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}


