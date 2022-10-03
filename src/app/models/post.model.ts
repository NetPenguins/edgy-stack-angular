/**
 * Post component.
 * @var {string} slug - The slug of the post.
 * @var {Post} post - The post.
 * @var {string} content - The content of the post.
 * @var {boolean} highlighted - Whether the content has been highlighted.
 * @var {PostsService} postsService - The posts service.
 * @var {HighlightService} highlightService - The highlight service.
 * @var {ActivatedRoute} route - The activated route.
 */
export class Post {
    title: {
        rendered: string;
    };
    slug: string;
    content: {
        rendered: string;
    };
    jetpack_featured_media_url: string;
    excerpt: string;
    date: string;
    categories: any[];
    tags: any[];
    featured_image: string;
    author: string;
    comments: any[];
    seo: {
        reading_time: string
    }
    yoast_head_json: {
        twitter_misc: {
            'Est. reading time': string;
            'Written by': string;
        };
    };
    constructor() {}

}
