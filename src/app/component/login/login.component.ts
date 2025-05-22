import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule, HttpClientModule],
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {
username = '';
password = '';

constructor(private http: HttpClient, private router: Router) {}

login() {
const credentials = {
username: this.username,
password: this.password
};


this.http.post<any>('http://localhost:8081/api/login', credentials).subscribe({
  next: (res) => {
    alert('Login successful!');
    if (res.role === 'ADMIN') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/user-dashboard']);
    }
  },
  error: () => {
    alert('Login failed.');
  }
});
}
}