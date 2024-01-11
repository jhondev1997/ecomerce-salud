import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { FormEventHandler, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { tranformDateToserializeToDatabase } from '@/utils/transformDate';
import PrimaryButton from '@/Components/PrimaryButton';
import { PropsEvents } from '@/interfaces/PropsEvents';
import { PageProps } from '@/types';
import axios from 'axios';

export default function Event({ auth, event }: PageProps<{ event: PropsEvents }>) {

  const [onImageCharge, setOnImageCharge] = useState<string | null | ArrayBuffer>('');

  const { data, setData, post, patch, processing, errors, reset, wasSuccessful } = useForm({
    image: {},
    titleEvent: event.titleEvent,
    linkEvent: event.linkEvent,
    platform: event.platform,
    dateEvent: event.dateEvent as string | Date,
    fakeAuthor: event.fakeAuthor,
    descriptionEvent: event.descriptionEvent,
    _method: 'PATCH'
  });

  const { delete: destroy } = useForm({});

  const onDelete = () => {
    // setData('_method', 'DELETE')
    destroy(`/event/${event.id}`, {
      headers: {
        "_method": "DELETE"
      },
      // preserveScroll: true
    });

  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(`/event/${event.id}`, {
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

      setOnImageCharge('/image/election-egi_emi/endo-s4.png')
    }

  }

  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData('dateEvent', tranformDateToserializeToDatabase(e.target.value))
  }

  return (
    <section className="w-full max-w-6xl p-4 m-auto h-[80vh] flex relative ">
      <div className="w-full m-auto h-[80vh] flex relative">
        <img className="absolute m-auto top-0 left-0 object-cover w-full opacity-30 h-[80vh]" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
        <section className="bg-white bg-opacity-60 relative z-10 w-full  mx-auto">
          <div className='flex flex-wrap justify-between items-center py-4 px-2'>
            <h2 className="font-poppins font-semibold text-2xl">Evento: {event.titleEvent}</h2>

            <button
              onClick={() => { onDelete() }}
              className='py-1 px-3  bg-red-600 text-white hover:bg-red-500 rounded my-auto'
            >Eliminar</button>
          </div>

          <form onSubmit={submit} encType="multipart/form-data" noValidate className='mb-5'>
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
                    src={`${onImageCharge ? onImageCharge : '/uploads/' + event.imgEvent}`}
                    alt="img"
                    className='w-1/2 mx-auto h-80 border-b overflow-hidden image relative object-cover imagePreview'
                  />
                </div>
              </div>

              <InputError message={errors.image} className="mt-2" />
            </div>

            <div className='border-t-2 border-blue-imm-1'>
              <InputLabel htmlFor="titleEvent" value="Título del evento" />
              <TextInput
                id="titleEvent"
                name="titleEvent"
                value={data.titleEvent}
                className="mt-1 block w-full"
                autoComplete="titleEvent"
                isFocused={true}
                onChange={(e) => setData('titleEvent', e.target.value)}
                required
              />

              <InputError message={errors.titleEvent} className="mt-2" />
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

              <InputError message={errors.fakeAuthor} className="mt-2" />
            </div>

            <div className='border-t-2 border-blue-imm-1 my-3'>
              <InputLabel htmlFor="linkEvent" value="Link del evento" />
              <TextInput
                id="linkEvent"
                name="linkEvent"
                value={data.linkEvent}
                className="mt-1 block w-full"
                autoComplete="linkEvent"
                isFocused={true}
                onChange={(e) => setData('linkEvent', e.target.value)}
                required
              />

              <InputError message={errors.linkEvent} className="mt-2" />
            </div>

            <div className='border-t-2 border-blue-imm-1 my-3'>
              <InputLabel htmlFor="dateEvent" value="Fecha del Evento" />
              <TextInput
                type="datetime-local"
                id="dateEvent"
                name="dateEvent"
                value={data.dateEvent.toString()}
                className="mt-1 block w-auto"
                autoComplete="dateEvent"
                isFocused={true}
                onChange={(e) => onChangeDate(e)}
                required
              />

              <InputError message={errors.dateEvent} className="mt-2" />
            </div>

            <div className='border-t-2 border-blue-imm-1 my-3'>
              <InputLabel htmlFor="platform" value="Plataforma donde se realiza el evento:" />
              <TextInput
                id="platform"
                name="platform"
                value={data.platform}
                className="mt-1 block w-full"
                autoComplete="platform"
                isFocused={true}
                onChange={(e) => setData('platform', e.target.value)}
                required
              />

              <InputError message={errors.platform} className="mt-2" />
            </div>

            <div className='my-3 border-t-2 border-blue-imm-1'>
              <CKEditor
                editor={ClassicEditor}
                data={event.descriptionEvent}
                onChange={(e: any, editor) => {
                  const data = editor.getData();
                  setData('descriptionEvent', data)
                }}
                config={
                  {
                    ckfinder: {
                      uploadUrl: '/image'
                    }
                  }
                }
              />
              <InputError message={errors.descriptionEvent} className="mt-2" />
            </div>

            <div className='flex justify-between mt-4 pb-4 mx-3'>
              <PrimaryButton disabled={processing}>
                Editar
              </PrimaryButton>

              <Link
                className='inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-gray-800 dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 hover:text-white dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150'
                href='/events'
              >Atras</Link>
            </div>
          </form>
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
