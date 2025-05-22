import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
selector: 'app-register',
standalone: true,
imports: [CommonModule, FormsModule, HttpClientModule],
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})
export class RegisterComponent {
username = '';
email = '';
password = '';
role = 'USER'; // default

constructor(private http: HttpClient, private router: Router) {}

register() {
const user = {
username: this.username,
email: this.email,
password: this.password,
role: this.role
};


this.http.post('http://localhost:8081/api/register', user).subscribe({
  next: () => {
    alert('Registration successful!');
    this.router.navigate(['/login']);
  },
  error: (error) => {
    console.error(error);
    alert('Registration failed.');
  }
});
}
}