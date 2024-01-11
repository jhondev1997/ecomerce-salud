import { LayoutOne } from "@/Layouts/LayoutOne";
import { PropsBlogs } from "@/interfaces/PropsBlogs";
import { PageProps } from "@/types";
import FormEditBlog from "@/ui/components/forms/FormEditBlog";
import { HeaderOne } from "@/ui/components/headers/HeaderOne";
import { tranformDateToserialize } from "@/utils/transformDate";
import { Link, useForm } from "@inertiajs/react";
import { Suspense } from "react";


interface PropsBlog {
  data: PropsBlogs
}

export default function Blog({ auth, blog }: PageProps<{ blog: PropsBlog }>) {

  const { delete:destroy } = useForm({});

  const { data } = blog;

  const onDelete = () => {
    destroy(`/blog/${blog.data.id}`, {
      headers: {
        "_method": "DELETE"
      },
      // preserveScroll: true
    });
  }

  return (
    <LayoutOne title={`Blog - ${blog.data.titleBlog}`}>

      <HeaderOne auth={auth} />
      <section className="max-w-6xl w-full mx-auto my-12 flex" >
        <div className="mx-auto w-full px-4 flex ">
          {data ? (
            <div className="w-full">
              <div className="border-4 shadow-xl m-auto border-green-imm-2 w-full article" key={data?.id}>
                <div className="h-80 md:h-[500px] w-full border-b overflow-hidden image relative">
                  <Suspense fallback={
                    <img
                      className='w-full h-full object-cover'
                      src='/image/1.jpg'
                      alt="cargando"
                    />
                  }>
                    <img className="absolute m-auto top-0 left-0 object-cover w-full opacity-30 h-[80vh] -z-10" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
                    <img
                      className='w-full h-full object-cover z-10'
                      src={'/uploads/' + data?.imgBlog}
                      alt={data?.titleBlog}
                    />
                  </Suspense>
                </div>
                <div className="p-4 relative">
                  <a href="#" className="flex items-center pb-4 text-black text-xl gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="skyblue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    por <span className='uppercase font-semibold'>{data?.authorBlog}</span>
                  </a>
                  <h3 className='text-lg font-semibold'>{tranformDateToserialize(data.dateBlog)}</h3>
                  <h2 className="font-semibold text-2xl font-lobster">{data?.titleBlog}</h2>
                  <div id="format_ckeditor" className='py-4 text-slate-700 font-poppins' dangerouslySetInnerHTML={{ __html: data ? data.descriptionBlog : '' }}></div>

                  <div className="w-full flex justify-between">
                    <Link
                      className='py-1 px-3 mt-5 cursor-pointer hover:bg-gray-600 bg-slate-700 text-white rounded'
                      href="/blogs"
                    >Regresar</Link>

                    {
                      auth.user ? (
                        auth.user.email == blog.data.emailAuthorBlog ? (
                          <button
                            onClick={onDelete}
                            className="py-1 px-3 bg-red-600 text-white hover:bg-red-500 rounded my-auto"
                          >Eliminar</button>
                        )
                          :
                        null
                      )
                        :
                      null
                    }
                  </div>
                </div>
              </div>

              {
                auth.user ? (
                  auth.user.email == blog.data.emailAuthorBlog ? (

                    <FormEditBlog blog={data} />
                  )
                    :
                    null
                )
                  :
                null
              }
            </ div>
          )
            :
            (
              <p className="box__error">Ups! hubo un error, intentelo más tarde</p>
            )
          }
        </div>

        <style>
          {
            `
            .article:hover .image img {
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

            blockquote {
              border-left: 2px solid #999;
              font-style: italic;
              padding-left: 5px;
              // background: #999;
              color: #aaa
            }

            #format_ckeditor a {
              color: #007cc3;
              font-weight: 500;
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
