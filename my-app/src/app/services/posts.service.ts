import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/posts.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  getAllProducts(){
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
