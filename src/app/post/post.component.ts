import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  @Input() post: Post;
  upVote(): boolean{
       this.post.upVote();
       return false;
     }
     downVote(): boolean{
       this.post.downVote();
       return false;
     }
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
//   sortPosts(): Post[] {
// return this.posts.sort((a: Post, b: Post) => b.votes - a.votes);
// }

submitForm(title: string, comment: string, link: string) {
  var newPost = new Post(title, comment, link, 0);
this.postService.addPost(newPost);
}
}
