import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { ListComponent } from './pages/list/list.component';
import { PostsCreateComponent } from './pages/posts-create/posts-create.component';
import { PostsShowComponent } from './pages/posts-show/posts-show.component';

const routes: Routes = [
  { path: '', component: ListComponent , children: [ 
    { path: 'create', component: PostsCreateComponent },
  ]},
  
  { path: ':id', component: PostsShowComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
