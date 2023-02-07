import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-show',
  templateUrl: './posts-show.component.html',
  styleUrls: ['./posts-show.component.scss']
})
export class PostsShowComponent implements OnInit {
  post?: Post
  constructor(
    private _postsService: PostsService,
    // Possède les ID de l'url où on se trouve
    private _activatedRoute: ActivatedRoute,
    private _router : Router
  ){}

   ngOnInit(): void {
    const id = this._activatedRoute.snapshot.params['id'];
    this.post = this._postsService.getOne(parseInt(id));

    if (!this.post) {
			this._router.navigate(['/posts']);
		}
   } 

   

}
