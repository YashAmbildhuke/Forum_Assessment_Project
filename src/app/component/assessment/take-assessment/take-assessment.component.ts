import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-assessment-create',
  templateUrl: './take-assessment.component.html',
  styleUrls: ['./take-assessment.component.css']
})
export class TakeAssessmentComponent {

  checkAnswer(selected: string, correct: string): void {
    if (selected === correct) {
      alert('Correct Option!');
    } else {
      alert('Wrong Option!');
    }
  }
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}