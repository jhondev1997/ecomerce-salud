import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { router, useForm } from '@inertiajs/react';
import React, { FormEventHandler, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PrimaryButton from '@/Components/PrimaryButton';

export default function FormBlog() {
  const [onImageCharge, setOnImageCharge] = useState<string | null | ArrayBuffer>('');

  const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
    image: {},
    titleBlog: '',
    fakeAuthor: '',
    descriptionBlog: '',
    _method: "POST"
  });


  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    // router.post('/blog', data, {
    //   forceFormData: true,
    // })
    post('/admin/blogs', {
      headers: { 'Content-Type': 'multipart/form-data', "_method": "POST" }
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

      setOnImageCharge('/image/election-egi_emi/endo-s4.png')
    }

  }



  return (
    <section className="w-full max-w-6xl m-auto h-full flex relative ">
      <div className="w-full m-auto h-full flex relative">
        <img className="absolute m-auto top-0 left-0 object-cover w-full opacity-30 h-[80vh]" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
        <section className="bg-white bg-opacity-60 relative z-10 w-full  mx-auto">
          <h2 className="font-poppins mb-4 font-semibold text-2xl">Crea un blog</h2>

          <form onSubmit={submit} encType="multipart/form-data">
            <div className='border-t-2 border-blue-imm-1 my-3'>
              <InputLabel htmlFor="image" value="Imagen" />

              <div className='w-full flex'>
                <TextInput
                  id="image"
                  type="file"
                  name="image"
                  className="mt-1 block w-1/2"
                  onChange={(e) => { onPreviewImage(e) }}
                />

                <div className='h-80 w-full border-b overflow-hidden image relative article'>
                  <img
                    src={`${onImageCharge ? onImageCharge : '/image/election-egi_emi/endo-s4.png'}`}
                    alt="img"
                    className='w-1/2 mx-auto h-80 border-b overflow-hidden image relative object-cover imagePreview'
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
                isFocused={false}
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
                isFocused={false}
                onChange={(e) => setData('fakeAuthor', e.target.value)}
                required
              />

              <InputError message={errors.titleBlog} className="mt-2" />
            </div>

            <div className='my-3 border-t-2 border-blue-imm-1'>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hola</p>"
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

            <PrimaryButton className="ml-4" disabled={processing}>
              Crear
            </PrimaryButton>
          </form>

          <div className='w-full h-4'></div>
        </section>
      </div>

      <style>
        {
          `
            .article:hover .imagePreview {
              transform: scale(1.1);
              transition: 0.2s ease;
            }

            .box__error {
              font-size: 2rem;
              color: #444;
              text-align: center;
              margin:auto
            }

            .loader {
              display: flex;
              align-items: center;
              margin: auto;
              justify-content: space-between;
              width: 60px;
              height: 50px;

              padding: 5rem 0;
            }

            .loader div {
              width: 12px;
              background: #888;
              animation: loader 1.8s linear infinite;
            }

            div:nth-child(2){
              animation-delay: -0.25s;
            }



            @keyframes loader {
              0% {
                  height: 12px;
              }
              25% {
                  height: 50px;
              }
              50% {
                  height: 10px;
              }
              75% {
                  height: 25px;
              }
              100% {
                  height: 12px;
              }
            }
          `
        }
      </style>
    </section>
  )
}
