import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropsBlogs } from '@/interfaces/PropsBlogs'
import { useForm } from '@inertiajs/react'
import React, { FormEventHandler, useState } from 'react'
import PrimaryButton from '@/Components/PrimaryButton';

interface PropsFormEditBlog {
  blog: PropsBlogs
}

export default function FormEditBlog({ blog }: PropsFormEditBlog) {
  const [onImageCharge, setOnImageCharge] = useState<string | null | ArrayBuffer>('');

  const { data, setData, post, processing, errors, reset, wasSuccessful, patch } = useForm({
    image: {},
    titleBlog: blog.titleBlog,
    fakeAuthor: blog.authorBlog,
    descriptionBlog: '',
    _method: "PATCH"
  });


  const submit: FormEventHandler = async (e) => {
    e.preventDefault();

    // router.post('/blog', data, {
    //   forceFormData: true,
    // })
    post(`/blog/${blog.id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "_method": "PATCH"
      }
    });

  }

  const onPreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files?.length) {

      setData('image', e.target.files[0]);

      reader.onload = function (e) {
        setOnImageCharge(reader.result)
      }

      reader.readAsDataURL(e.target.files[0])
    } else {

      setOnImageCharge('/uploads/' + blog.imgBlog)
    }

  }


  return (
    <section className="w-full max-w-6xl p-4 mx-auto my-10 h-[80vh] flex relative" id='formedit'>
      <div className="w-full m-auto h-[80vh] flex relative">
        <img className="absolute m-auto top-0 left-0 object-cover w-full opacity-30 h-[80vh]" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
        <section className="bg-white bg-opacity-60 relative z-10 w-full  mx-auto">
          <h2 className="font-poppins mb-4 font-semibold text-2xl">Editar el blog: {blog.titleBlog}</h2>
          <div className="contentInputs">
            <form
              className="contentInputsForm immetabolico"
              onSubmit={submit}
              encType="multipart/form-data"
            >

              <div className='border-t-2 border-blue-imm-1 my-3'>
                <InputLabel htmlFor="image" value="Imagen" />

                <div className='w-full inline md:flex'>
                  <TextInput
                    id="image"
                    type="file"
                    name="image"
                    className="mt-1 block md:w-1/2"
                    onChange={(e) => { onPreviewImage(e) }}
                  />

                  <div className='h-80 w-full border-b overflow-hidden image relative article'>
                    <img
                      src={`${onImageCharge ? onImageCharge : '/uploads/' + blog.imgBlog}`}
                      alt="img"
                      className='md:w-1/2 mx-auto h-80 border-b overflow-hidden image relative object-cover imagePreview'
                    />
                  </div>
                </div>

                <InputError message={errors.image} className="mt-2" />
              </div>

              <div className='border-t-2 border-blue-imm-1'>
                <InputLabel htmlFor="titleBlog" value="Título de blog" />
                <TextInput
                  id="titleBlog"
                  name="titleBlog"
                  value={data.titleBlog}
                  className="mt-1 block w-full"
                  autoComplete="titleBlog"
                  isFocused={true}
                  onChange={(e) => setData('titleBlog', e.target.value)}
                  required
                />

                <InputError message={errors.titleBlog} className="mt-2" />
              </div>


              <div className='border-t-2 border-blue-imm-1 my-3'>
                <InputLabel htmlFor="fakeAuthor" value="Autor" />
                <TextInput
                  id="fakeAuthor"
                  name="fakeAuthor"
                  value={data.fakeAuthor}
                  className="mt-1 block w-full"
                  autoComplete="fakeAuthor"
                  isFocused={true}
                  onChange={(e) => setData('fakeAuthor', e.target.value)}
                  required
                />

                <InputError message={errors.titleBlog} className="mt-2" />
              </div>

              <div className='my-3 border-t-2 border-blue-imm-1'>
                <CKEditor
                  editor={ClassicEditor}
                  data={blog.descriptionBlog}
                  onChange={(e: any, editor) => {
                    const data = editor.getData();
                    setData('descriptionBlog', data)
                  }}
                  config={
                    {
                      ckfinder: {
                        uploadUrl: '/image'
                      }
                    }
                  }
                />
                <InputError message={errors.descriptionBlog} className="mt-2" />
              </div>

              <PrimaryButton className="" disabled={processing}>
                Editar
              </PrimaryButton>

            </form>
          </div>

        </section>
      </div>
    </section>
  )
}
