import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AssessmentService {
  private apiUrl = 'http://localhost:8081/api/assessments';

  constructor(private http: HttpClient) {}

  getAllAssessments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAssessmentById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createAssessment(assessmentData: any): Observable<any> {
    return this.http.post(this.apiUrl, assessmentData);
  }

  submitResponses(assessmentId: number, responses: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${assessmentId}/submit`, responses);
  }
}