import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { GET_POSTS } from '../../services/queries'


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
  posts: Post[] = [];
  content: string;
  highlighted: boolean = false;
  private querySubscription: Subscription;

  constructor(
    // private postsService: PostsService,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_POSTS,
      pollInterval: 500,
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        // this.loading = loading;
        this.posts = data.posts.nodes;
        // data.posts.nodes.map((post: Post) => {
        //     this.posts.push(post as Post)
        // })
        console.log(data.posts.nodes)
        console.log(this.posts)
      });

    // this.postsService.getPosts().subscribe(
    //   (response: Post[]) => {
    //     console.log(response);
    //     this.posts = response;
    //   }
    // );
  }
}
