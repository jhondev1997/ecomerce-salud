import { LayoutOne } from '@/Layouts/LayoutOne'
import { PropsProducts } from '@/interfaces/PropsProducts'
import { PageProps } from '@/types'
import React, { Suspense } from 'react'
import { HeaderOne } from '../../ui/components/headers/HeaderOne';
import { Link } from '@inertiajs/react';

interface PropsProduct {
  data: PropsProducts
}

export default function product({ auth, product }: PageProps<{ product: PropsProduct }>) {


  return (
    <LayoutOne title={product.data.name_product} >

      <HeaderOne auth={auth} />

      <section className="w-full mt-8 min-h-[calc(480px)] h-full flex">
        <article className="w-[calc(95%)] max-w-[calc(800px)] m-auto bg-white bg-opacity-75 shadow-2xl animate-pulse-1s">
          <div className="flex justify-around flex-wrap">
            <div className='max-h-80 flex-grow flex-shrink basis-80 relative overflow-hidden'>
              <Suspense fallback={
                <img
                  className='w-full h-full object-cover'
                  src='/image/election-egi_emi/sangre-1.svg'
                  alt="cargando"
                />
              }>
                <img
                  className="max-h-80 p-4 m-auto"
                  src={'/uploads/' + product.data.img_product}
                  alt="img" />
              </Suspense>
            </div>
            <div className="flex-grow flex-shrink basis-80 max-w-xs font-poppins p-5">
              <h2 className="font-abel text-4xl mb-4 capitalize">
                {/* Nombre del producto */}
                {product.data.name_product}
              </h2>
              <h4 className="tags-title font-semibold">Tags:</h4>
              <div className="flex flex-wrap justify-start gap-1 mb-4 font-abel">
                {/* <span className='py-1 px-2 rounded-sm bg-blue-imm-1 text-white'>adultos</span>
                <span className='py-1 px-2 rounded-sm bg-blue-imm-1 text-white'>niño</span>
                <span className='py-1 px-2 rounded-sm bg-blue-imm-1 text-white'>jovenes</span>
                <span className='py-1 px-2 rounded-sm bg-blue-imm-1 text-white'>metabolico</span>
                <span className='py-1 px-2 rounded-sm bg-blue-imm-1 text-white'>ginecologico</span> */}
                {product.data.tags.map((element) => (
                  <span className='py-1 px-2 rounded-sm bg-blue-imm-1 text-white' key={element.id}>{element.name_tag}</span>
                ))}
              </div>
              {product.data.price_offer_product === null ?
                <>
                  <p className="flex justify-between mb-4 font-semibold">Precio: <span>$ {product.data.price_original_product}</span></p>
                </>
                :
                <>
                  <p className="flex justify-between">Precio: <span className='line-through'>$ {product.data.price_original_product}</span></p>
                  <p className="flex justify-between mb-4 font-semibold">Precio en oferta: <span>$ {product.data.price_offer_product}</span></p>
                </>

              }
              <a className='border p-3 bg-green-imm-2 text-white hover:bg-white hover:text-black transition-all duration-300' href="#">Comprar</a>
            </div>
          </div>
          <div className="p-4">
            <h3 className=" text-xl font-abel font-semibold">Descripcion del producto:</h3>
            {/* <p className="font-poppins">{product.data.description_product}</p> */}
            <div dangerouslySetInnerHTML={{__html: product.data ? product.data.description_product : ''}} id='description_product'></div>
          </div>
          <div className="p-4">
            <Link className='font-poppins bg-black px-1 py-2 text-white' href="/products">Atras</Link>
          </div>

        </article>

        <style>
          {
            `
            .article:hover .image img {
              transform: scale(1.1);
              transition: 0.2s ease;
            }

            #description_product a {
              color: #007cc3;
            }

            #description_product h1 {
              font-size: 4rem;
              font-weight: bold;
            }

            #description_product h2 {
              font-size: 3rem;
              font-weight: bold;
            }

            #description_product h3 {
              font-size: 2rem;
              font-weight: bold;
            }

            .box__error {
              font-size: 2rem;
              color: #444;
              text-align: center;
              margin:auto;
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

            blockquote {
              border-left: 2px solid #999;
              font-style: italic;
              padding-left: 5px;
              // background: #999;
              color: #aaa
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

    </LayoutOne>
  )
}
