import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',

  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
}) export class HomeComponent {
isUser(): any {
throw new Error('Method not implemented.');
}
  router: any;

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  
  isAdmin(): boolean {
    return localStorage.getItem('role') === 'ADMIN';
  }
  
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
  
 }

