import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsShowComponent } from './pages/posts-show/posts-show.component';
import { ListComponent } from './pages/list/list.component';
import { PostsCreateComponent } from './pages/posts-create/posts-create.component';


@NgModule({
  declarations: [
    PostsShowComponent,
    ListComponent,
    PostsCreateComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
