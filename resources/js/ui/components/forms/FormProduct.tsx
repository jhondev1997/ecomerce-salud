import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { PropsTags } from '@/interfaces/PropsProducts';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

interface PropsFormProduct {
  tags: Array<PropsTags>
}

export const FormProduct = ({ tags }: PropsFormProduct) => {
  const [onImageCharge, setOnImageCharge] = useState<string | null | ArrayBuffer>('');

  const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm<{
    image: {};
    name_product: string;
    plug_product: string;
    description_product: string;
    available_product: string;
    tags_product: number[];
    price_original_product: number | string;
    price_offer_product: null | number;
    _method: string;
  }>({
    image: {},
    name_product: '',
    plug_product: '',
    available_product: '',
    tags_product: [],
    price_original_product: 0,
    price_offer_product: null,
    description_product: '',
    _method: "POST"
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    console.log(data)

    post('/product', {
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

      setOnImageCharge('../../image/election-egi_emi/sangre-1.svg')
    }

  }

  const onChangeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      let temp = [...data.tags_product, Number(e.target.value)];
      setData('tags_product', [...new Set(temp)])
    } else {
      let temp = data.tags_product.filter((valor, indice) => valor !== Number(e.target.value))
      setData('tags_product', [...temp])
    }
  }

  return (
    <section className="w-full max-w-6xl p-4 m-auto h-[80vh] flex relative ">
      <div className="w-full m-auto h-[80vh] flex relative">
        <section className="bg-white bg-opacity-60 relative z-10 w-full  mx-auto">
          <h2 className="font-poppins mb-4 font-semibold text-2xl">Crea un producto</h2>

          <form onSubmit={submit} encType="multipart/form-data" noValidate>
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
                    src={`${onImageCharge ? onImageCharge : '../../image/election-egi_emi/sangre-1.svg'}`}
                    alt="img"
                    className=' mx-auto h-80 border-b overflow-hidden image relative object-cover imagePreview'
                  />
                </div>
              </div>

              <InputError message={errors.image} className="mt-2" />
            </div>

            {/* ============================================================================ */}

            <div className='flex gap-2'>
              <div className='w-full'>
                {/* =================== Nombre del producto =============*/}
                <div className='border-t-2 border-blue-imm-1 mt-4'>
                  <InputLabel htmlFor="name_product" value="Nombre del producto" />
                  <TextInput
                    id="name_product"
                    name="name_product"
                    value={data.name_product}
                    className="mt-1 block w-full"
                    autoComplete="name_product"
                    isFocused={false}
                    onChange={(e) => setData('name_product', e.target.value)}
                    required
                  />

                  <InputError message={errors.name_product} className="mt-2" />
                </div>

                {/* =================== Plug URL del producto =============*/}
                <div className='border-t-2 border-blue-imm-1 mt-4'>
                  <InputLabel htmlFor="plug_product" value="Plug URL del producto" />
                  <TextInput
                    id="plug_product"
                    name="plug_product"
                    value={data.plug_product}
                    className="mt-1 block w-full"
                    autoComplete="plug_product"
                    isFocused={false}
                    onChange={(e) => setData('plug_product', e.target.value)}
                    required
                  />

                  <InputError message={errors.plug_product} className="mt-2" />
                </div>


                {/* =================== Disponibilidad del producto =============*/}
                <div className='border-t-2 border-blue-imm-1 mt-4'>
                  <h2>Disponibilidad del producto</h2>

                  <div className="font-poppins mt-2 max-w-md ml-4 text-sm">

                    <div className="my-3 flex">
                      <input
                        className="w-5 h-5 cursor-pointer"
                        required
                        onChange={(e) => setData('available_product', e.target.value)}
                        type="radio"
                        name="available_product"
                        id={`producto_valido`}
                        value="1" />
                      <label className="ml-1 cursor-pointer" htmlFor={`producto_valido`}>Disponible</label>
                    </div>

                    <div className="my-3 flex">
                      <input
                        className="w-5 h-5 cursor-pointer"
                        required
                        onChange={(e) => setData('available_product', e.target.value)}
                        type="radio"
                        name="available_product"
                        id={`producto_invalido`}
                        value="0" />
                      <label className="ml-1 cursor-pointer" htmlFor={`producto_invalido`}>No Disponible</label>
                    </div>

                  </div>

                  <InputError message={errors.available_product} className="mt-2" />
                </div>

                {/* =================== Precio original del producto =============*/}
                <div className='border-t-2 border-blue-imm-1 mt-4'>
                  <InputLabel htmlFor="price_original_product" value="Precio original del producto" />
                  <TextInput
                    type='number'
                    id="price_original_product"
                    name="price_original_product"
                    value={data.price_original_product}
                    className="mt-1 block w-full"
                    autoComplete="price_original_product"
                    isFocused={false}
                    onChange={(e) => setData('price_original_product',
                      Number(e.target.value) > 0
                        ?
                        Number(e.target.value) : '')}
                    required
                  />

                  <InputError message={errors.price_original_product} className="mt-2" />
                </div>
              </div>

              <div className='max-w-xs-4 w-full'>
                {/* =================== Tags del producto =============*/}
                <div className='border-t-2 border-l-2 border-r-2 border-blue-imm-1 mt-4 px-2'>
                  <h2>Tags del producto</h2>
                  <div className="flex flex-col gap-x-1 gap-3 mb-4 font-abel mt-2 h-full max-h-72 overflow-x-hidden overflow-y-auto">
                    {tags.map((element) => (
                      <div key={element.id} className='py-1 px-2 flex items-center rounded-sm bg-blue-imm-1 text-white'>
                        <input
                          onChange={onChangeTags}
                          type='checkbox'
                          className='py-1 px-2'
                          key={element.id}
                          id={element.name_tag}
                          name='tags_product'
                          value={element.id} />

                        <label className='pl-2 w-full' htmlFor={element.name_tag}>{element.name_tag}</label>
                      </div>
                    ))}
                  </div>

                  <InputError message={errors.tags_product} className="mt-2" />
                </div>
              </div>
            </div>

            {/* ============================ Descripción del producto ================= */}

            <div className='my-3 border-t-2 border-blue-imm-1'>
              <h2>Descripción del producto</h2>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hola</p>"
                onChange={(e: any, editor) => {
                  const data = editor.getData();
                  setData('description_product', data)
                }}
                config={
                  {
                    ckfinder: {
                      uploadUrl: '/image'
                    }
                  }
                }
              />
              <InputError message={errors.description_product} className="mt-2" />
            </div>

            <PrimaryButton className="ml-4" disabled={processing}>
              Crear
            </PrimaryButton>
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
