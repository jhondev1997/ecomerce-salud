import React from 'react'
import { LayoutOne } from '@/Layouts/LayoutOne'
import { PageProps } from '@/types'
import { HeaderOne } from '@/ui/components/headers/HeaderOne'
import FormBlog from '@/ui/components/forms/FormBlog'

export default function Create({ auth }: PageProps) {
  return (
    <LayoutOne title='Crear Blog'>
      <HeaderOne auth={auth}/>

      <FormBlog />
    </LayoutOne>
  )
}
