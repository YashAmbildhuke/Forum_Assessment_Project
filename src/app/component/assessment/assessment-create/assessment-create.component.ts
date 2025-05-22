import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assessment-create',
  imports:[CommonModule,FormsModule],
  templateUrl: './assessment-create.component.html',
  styleUrls: ['./assessment-create.component.css']
})
export class AssessmentCreateComponent {

  questions: { questionText: string, options: string[], correctAnswer: string }[] = [];
  newQuestion: string = '';
  newOptions: string[] = ['', '', '', ''];
  correctAnswer: string = '';
  selectedAnswer: string = '';

  addQuestion(): void {
    if (this.newQuestion && this.correctAnswer) {
      this.questions.push({
        questionText: this.newQuestion,
        options: [...this.newOptions],
        correctAnswer: this.correctAnswer
      });
      this.newQuestion = '';
      this.newOptions = ['', '', '', ''];
      this.correctAnswer = '';
    }
  }

  createAssessment(): void {
    console.log('Created Assessment:', this.questions);
    alert('Assessment created successfully!');
  }

  checkAnswer(question: any, selected: string): void {
    if (selected === question.correctAnswer) {
      alert('Correct option');
    } else {
      alert('Incorrect option');
    }
  }
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}