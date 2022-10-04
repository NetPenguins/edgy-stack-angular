import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighlightService } from 'src/app/services/highlight.service';
import { Apollo } from 'apollo-angular';
import { GET_POST } from 'src/app/services/queries';
import { BehaviorSubject } from 'rxjs';

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
  loading: boolean;
  // $post: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    private highlightService: HighlightService,
    private route: ActivatedRoute,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
    this.loading = true;
    this.querySubscription = this.apollo.query<any>({
      query: GET_POST(this.slug)
    })
      .subscribe(
        ({ data, loading }) => {
        console.log(loading)
        this.loading = loading;
        this.post = data.post;
        // this.$post.next(data.post);
        this.image = this.post?.featuredImage?.node?.srcSet?.split(",")[0].split(" ")[0]
      },
      (error: Error) => {
        console.error(error)
        this.loading = false;
      },
      () => {
        console.debug('Completed GET_POST')
        this.loading = false;
      });
  }

  ngAfterViewChecked(): void {
    if (this.post && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
