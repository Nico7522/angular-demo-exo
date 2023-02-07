import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[]= [];

  constructor(
    private _postsService: PostsService
  ){}

  ngOnInit(): void{
    this.posts = this._postsService.getAll();
  }
}
