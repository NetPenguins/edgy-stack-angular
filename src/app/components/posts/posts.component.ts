import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
/**
 * Posts component.
 * @class
 * @implements {OnInit}
 * @author Chad Wilson
 * @var {Post[]} posts - The posts.
 * @var {Post} post - The post.
 * @var {string} slug - The slug of the post.
 */
export class PostsComponent implements OnInit {
  posts: Post[];
  content: string;
  highlighted: boolean = false;
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      (response: Post[]) => {
        console.log(response);
        this.posts = response;
      }
    );
  }
}
