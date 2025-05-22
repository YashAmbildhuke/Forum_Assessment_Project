import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forum-post',

  imports:[CommonModule,FormsModule],
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {

  postId: number = 0; post: any; comments: any[] = []; newComment: string = '';

  constructor(private route: ActivatedRoute,private location: Location) { }
  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submitComment() { if (this.newComment.trim())
     { this.comments.push({ user: 'Current User', content: this.newComment, createdAt: new Date() });
      this.newComment = ''; } }
}

