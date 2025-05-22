import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForumService {
  private apiUrl = 'http://localhost:8081/api/forum';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, postData);
  }

  addComment(postId: number, comment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/${postId}/comments`, comment);
  }
}