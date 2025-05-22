import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  totalPosts: number = 0;
  totalAssessments: number = 0;
  averageScore: number = 0;
  overallPerformance: number = 0;

  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    // Simulate API data fetching
    // You will replace this with actual API calls later
    this.totalPosts = 12;
    this.totalAssessments = 5;
    this.averageScore = 86;
    this.overallPerformance = 88;
  }

}
