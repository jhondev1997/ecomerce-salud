export interface PropsBlogs {
  id: number;
  imgBlog: string;
  dateBlog: Date;
  authorBlog: string;
  emailAuthorBlog: string;
  titleBlog: string;
  descriptionBlog: string;
}


export interface PropsPaginateBlogs {
  current_page: number;
  data: Array<PropsBlogs>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string;
    label: string;
    active: boolean;
  }>;
  next_page_url: null;
  path: string;
  per_page: number;
  to: number;
  total: number;
}


export interface PropsPaginateBlogs_v2 {
  data: Array<PropsBlogs>;
  first_page_url: string;
  meta: {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    links: Array<{
      url: string;
      label: string;
      active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
}
