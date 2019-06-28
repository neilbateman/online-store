import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-postplace',
  templateUrl: './postplace.component.html',
  styleUrls: ['./postplace.component.css'],
  providers: [PostService]
})
export class PostplaceComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  @Input() post: Post;
  upVote(): boolean{
       this.post.upVote();
       return false;
     }
     downVote(): boolean{
       this.post.downVote();
       return false;
     }

  constructor(private router: Router, private PostService: PostService){}

  ngOnInit(){
    this.posts = this.PostService.getPosts();
  }
  //   sortPosts(): Post[] {
  //   return this.posts.sort((a: Post, b: Post) => b.votes - a.votes);
  // }
   goToDetailPage(clickedPost){
     this.router.navigate(['posts', clickedPost.$key]);
   };
}
