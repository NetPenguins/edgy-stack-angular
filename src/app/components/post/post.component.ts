import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { HighlightService } from 'src/app/services/highlight.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
/**
 * Post component.
 * @class
 * @implements {OnInit}
 * @implements {AfterViewInit}
 * @implements {AfterViewChecked}
 * @author Chad Wilson
 * @var {string} slug - The slug of the post.
 */
export class PostComponent implements OnInit, AfterViewChecked {

  slug: string;
  post: Post;
  content: string;
  highlighted: boolean = false;
  constructor(
    private postsService: PostsService, 
    private highlightService: HighlightService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
    this.postsService.getPost(this.slug).subscribe(
      (response: Post) => {
        console.log(response.content.rendered);
        this.post = response;
      }
    );
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
