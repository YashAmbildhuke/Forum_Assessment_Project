import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-assessment-list',

  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
    assessments = [{ id: 1, title: 'Java Basics', description: 'A test on Java fundamentals.', createdAt: new Date() }, { id: 2, title: 'Spring Boot Advanced', description: 'Assessment on Spring Boot internals.', createdAt: new Date() }];

  constructor(private router: Router,private location: Location) { }

  ngOnInit(): void { }

  takeAssessment(id: number) { this.router.navigate(['/take-assessment', id]); }
 
  goBack() {
    this.location.back();
  }
}