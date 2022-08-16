import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (numPost, skip) => {
    const query = gql`
        query GetPaginatedPosts($numPost: Int, $skip: Int) {
            postsConnection(first: $numPost, skip: $skip, orderBy: publishedAt_DESC) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        publishedAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    pageSize
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, { numPost, skip });

    return result.postsConnection;
}

export const getRecentPosts = async () => {
    const query = gql`
        query GetPostDetails() {
            posts(orderBy: publishedAt_DESC, first: 2) {
                title
                featuredImage {
                    url
                }
                author {
                    bio
                    id
                    name
                    photo {
                    url
                    }
                }
                slug
                excerpt
                categories {
                    name
                    slug
                }
                publishedAt
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
        query GetCategories {
             categories {
                 name
                 slug
             }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.categories;
}

export const getFeaturedPosts = async () => {
    const query = gql`
      query GetFeaturedPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          publishedAt
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
    
    return result.posts;
};

export const getPostDetails = async (slug) => {
    const query = gql`
     query GetPostDetails($slug: String!) {
         post(where: { slug: $slug }) {
             author {
                 bio
                 name
                 id
                 photo {
                     url
                 }
             }
             publishedAt
             slug
             title
             excerpt
             featuredImage {
                url
             }
             categories {
                 name
                 slug
             }
             content {
                 raw
             }
         }
     }
    `
    const result = await request(graphqlAPI, query, { slug });
    return result.post;
}

export const getCategoryPosts = async (slug) => {
    const query = gql`
        query GetCategoryPost($slug: String!) {
            postsConnection(where: {categories_some: {slug: $slug}}) {
                edges {
                    cursor
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        publishedAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug });
    return result.postsConnection;
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          publishedAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query, { slug, categories });
  
    return result.posts;
};

export const getComments = async (slug) => {
    const query = gql`
    query GetComments($slug:String!) {
        comments(where: { post: { slug: $slug }}) {
            name
            createdAt
            comment
        }
    }
    `
    
    const result = await request(graphqlAPI, query, { slug });
    return result.comments;
}

export const getSearchedPosts = async (searchValue) => {
    const query = gql`
        query GetSearchedPosts($searchValue: String!) {
            postsConnection(where: {title_contains: $searchValue}) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        publishedAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, { searchValue } );
    return result.postsConnection.edges;
}

export const getAboutDetails = async() => {
    const query = gql`
        query GetAboutDetails() {
            abouts {
                title
                content {
                    raw
                }
            }
        }
    `; 

    const result = await request(graphqlAPI, query);
    return result.abouts;
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
}

