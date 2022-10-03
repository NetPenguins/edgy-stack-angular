import { gql } from 'apollo-angular';

export enum MediaItemSizeEnum {
    BIZBERG_BLOG_LIST = "BIZBERG_BLOG_LIST",
    BIZBERG_BLOG_LIST_NO_SIDEBAR_1 = "BIZBERG_BLOG_LIST_NO_SIDEBAR_1",
    BIZBERG_DETAIL_IMAGE = "BIZBERG_DETAIL_IMAGE",
    BIZBERG_DETAIL_IMAGE_NO_SIDEBAR = "BIZBERG_DETAIL_IMAGE_NO_SIDEBAR",
    BIZBERG_GALLERY = "BIZBERG_GALLERY",
    BIZBERG_MEDIUM = "BIZBERG_MEDIUM",
    BIZBERG_PORTFOLIO_HOMEPAGE = "BIZBERG_PORTFOLIO_HOMEPAGE",
    LARGE = "LARGE",
    MEDIUM = "MEDIUM",
    MEDIUM_LARGE = "MEDIUM_LARGE",
    THUMBNAIL = "THUMBNAIL",
    _1536X1536 = "_1536X1536",
    _2048X2048 = "_2048X2048",
}

export function GET_POST (slug: string) {
    let w = window.innerWidth;
    let size = MediaItemSizeEnum.MEDIUM
    if (w < 500) {
        size = MediaItemSizeEnum.THUMBNAIL
    } else if (w < 700) {
        MediaItemSizeEnum.MEDIUM
    } else if (w < 1000) {
        MediaItemSizeEnum.MEDIUM_LARGE
    } else { 
        MediaItemSizeEnum.LARGE
    } 
    return gql`
        query GetPost {
            post(idType: SLUG, id: "${slug}") {
              content(format: RENDERED)
              title(format: RENDERED)
              author {
                node {
                    name
                    slug
                    avatar {
                      url
                    }
                }
              }
              date
              seo {
                readingTime
              }
              featuredImage {
                node {
                  srcSet(size: ${size})
                }
              }
            }
        }
    `;
}

export const GET_POSTS = gql`
query GetPosts {
  posts {
    nodes {
      id
      date
      title
      slug
      featuredImage {
        node {
          link
        }
      }
      author {
        node {
          id
          name
          avatar {
            url
          }
        }
      }
      seo {
        readingTime
      }
    }
  }
}
`;