import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

/**
 * Posts service.
 * @class
 * @author Chad Wilson
 */
@Injectable()
export class PostsService {
  post: Post;
  
  constructor(private http: HttpClient) {}

  /**
   * Get posts.
   * @returns {Observable<Post[]>}
   * @author Chad Wilson
   * @memberof PostsService
   * @method
   * @public
   * @static
   * @example
   * import { PostsService } from 'src/app/services/posts.service';
   */
  public getPosts(): Observable<Post[]> {
    return new Observable<Post[]>(observer => {
      console.log("getPosts()");
      this.loadPosts().subscribe(
          response => {
              if (response) {
                  console.log(response);
                  observer.next(response);
                  observer.complete();
              } else {
                  observer.error(response);   
              }
          },
          error => {
              observer.error(error);
          }
      );
    });
  }

  /**
   * Get post.
   * @param slug The slug of the post.
   * @returns {Observable<Post>}
   * @author Chad Wilson
   * @memberof PostsService
   * @method
   * @public
   * @static
   * @example
   * import { PostsService } from 'src/app/services/posts.service';
   */
  public getPost(slug: string): Observable<Post> {
    return new Observable<Post>(observer => {
      console.log("getPost()");
      this.loadPost(slug).subscribe(
          response => {
              if (response) {
                  console.log(response);
                  this.post = response[0];
                  
                  observer.next(this.post);
                  observer.complete();
              } else {
                  observer.error(response);   
              }
          },
          error => {
              observer.error(error);
          }
      );
    });
  }

  private loadPost(slug: string): Observable<Post>{
    let url = "https://edgystack.com/wp-json/wp/v2/posts?slug="+slug;
    //let url = "https://edgystack.com/wp-json/wp/v2/posts"
    console.log("loadPost()");
    return this.http.get<Post>(url);
  }

  private loadPosts(): Observable<Post[]>{
    let url = "https://edgystack.com/wp-json/wp/v2/posts";
    console.log("loadPosts()");
    return this.http.get<Post[]>(url);
  }

  
}
