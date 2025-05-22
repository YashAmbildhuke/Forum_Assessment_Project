import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForumPostComponent } from '../forum-post/forum-post.component';

@Component({
  selector: 'app-forum-list',
  
  imports:[CommonModule,FormsModule,RouterLink],
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit { forumPosts = [ { id: 1, title: 'How to prepare for Java Interviews?', content: 'I am looking for guidance on how to crack Java backend interviews...', user: 'Amit Kumar', createdAt: new Date('2025-04-01') }, { id: 2, title: 'Best resources to learn Spring Boot', content: 'Can someone suggest beginner-friendly resources to learn Spring Boot?', user: 'Priya Sharma', createdAt: new Date('2025-04-10') } ];

constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }

ngOnInit(): void { }

viewPost(postId: number) { // Implement navigation logic here console.log('View post ID:', postId);
   } }