import React from 'react'
import { Link } from '@inertiajs/react';
import { HeaderOne } from '@/ui/components/headers/HeaderOne';
import { PageProps } from '@/types';
import { LayoutOne } from '@/Layouts/LayoutOne';
import { PropsBlogs, PropsPaginateBlogs, PropsPaginateBlogs_v2 } from '@/interfaces/PropsBlogs';
import MainBlog from '@/ui/blogs/MainBlog';


interface PropsIndexBlogs {
  data: Array<PropsBlogs>
}

export default function index({ auth, format_blogs }: PageProps<{ format_blogs: PropsPaginateBlogs_v2 }>) {


  return (
    <LayoutOne title='Blogs'>

      <HeaderOne auth={auth} />

      <MainBlog format_blogs={format_blogs} auth={auth}/>

    </LayoutOne>
  )
}
