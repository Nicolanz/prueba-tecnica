import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/posts.model';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] =[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getAllProducts()
    .subscribe(data=>{
      console.log(data);
      this.posts = data;
    })
  }
}
