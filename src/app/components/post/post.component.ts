import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { HighlightService } from 'src/app/services/highlight.service';
import { PostsService } from 'src/app/services/posts.service';
import { Apollo } from 'apollo-angular';
import { GET_POST } from 'src/app/services/queries';

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

  post: any;
  slug: string;
  content: string;
  image: string;
  highlighted: boolean = false;
  querySubscription: any;
  constructor(
    private highlightService: HighlightService,
    private route: ActivatedRoute,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
    
    this.querySubscription = this.apollo.query<any>({
      query: GET_POST(this.slug)
    })
      .subscribe(({ data, loading }) => {
        // this.loading = loading;
        this.post = data.post;
        this.image = this.post?.featuredImage?.node?.srcSet?.split(",")[0].split(" ")[0]
      });
      

  }

  ngAfterViewChecked(): void {
    if (this.post && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
