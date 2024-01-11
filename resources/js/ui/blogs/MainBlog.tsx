import { PropsBlogs, PropsPaginateBlogs, PropsPaginateBlogs_v2 } from "@/interfaces/PropsBlogs";
import { PageProps } from "@/types";
import { transformDateToDay, transformDateToMonth } from "@/utils/transformDate";
import { Link } from "@inertiajs/react";
import { Suspense } from "react";

export default function MainBlog({ auth, format_blogs }: PageProps<{ format_blogs: PropsPaginateBlogs_v2 }>) {

  console.log(format_blogs)

  return (
    <section className="max-w-6xl w-full mx-auto mt-12 py-2">
      <h2 className="text-center text-2xl font-semibold font-poppins mb-8">Nuestros blogs</h2>
      <div className={`m-auto w-full px-4  gap-8 ${format_blogs.data.length ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'flex'}`}>
        {format_blogs.data.length ? (format_blogs.data.map((element) => (
          <div className="border-4 shadow-xl border-green-imm-2 article" key={element.id}>
            <div className="h-80 w-full border-b overflow-hidden image relative">
              <Suspense fallback={
                <img
                  className='w-full h-full object-cover'
                  src='/image/1.jpg'
                  alt="cargando"
                />
              }>
                <img className="absolute m-auto top-0 left-0 object-cover w-full opacity-30 h-[80vh] -z-10" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
                <img
                  loading="lazy"
                  className='w-full h-full object-cover z-10'
                  src={'/uploads/' + element.imgBlog}
                  alt={element.titleBlog}
                />
              </Suspense>
            </div>
            <div className="p-4 relative">
              <div className="absolute top-[-40px] right-12 w-20 h-20 text-white border-4 border-white bg-green-imm-3 rounded-full text-center pt-1">
                <h3 className='text-2xl font-bold'>{transformDateToDay(element.dateBlog)}</h3>
                <span className='text-xl'>{transformDateToMonth(element.dateBlog)}</span>
              </div>
              <a href="#" className="flex items-center pb-4 text-black text-xl gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="skyblue" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                por <span className='uppercase font-semibold'>{element.authorBlog}</span>
              </a>
              <h2 className="font-semibold text-2xl font-lobster">{element.titleBlog}</h2>
              <div className='py-4 text-slate-700 font-poppins max-h-[calc(340px)] overflow-hidden' dangerouslySetInnerHTML={{ __html: element ? element.descriptionBlog : '' }} id='texto'></div>
              {/* <p>{element.descriptionBlog}</p> */}
              <div className='w-full flex justify-between'>
                <Link href={`/blog/${element.id}`} className="font-poppins py-1 px-2 rounded bg-blue-imm-1 hover:bg-blue-imm-2 text-white">leer mas...</Link>
                {auth.user?.email == element.emailAuthorBlog && (
                  <Link href={`/blog/${element.id}`} className="font-poppins py-1 px-2 rounded bg-orange-600 hover:bg-orange-500 text-white">Editar</Link>
                )}
              </div>
            </div>
          </div>
        )))
          :
          (
            <p className="box__error">Ups! hubo un error, intentelo más tarde</p>
          )
        }
      </div>

      {format_blogs.meta.links.length > 3 && (
          <div className='flex justify-center gap-2 mt-5'>{format_blogs.meta.links.map((element, index) => {
            if (index == 0 || (index == format_blogs.meta.links.length - 1)) {

              return (
                <Link
                  as="button"
                  className={`py-1 px-3 bg-green-imm-3 rounded-sm text-white ${element.url ? (!element.active ? ' opacity-100' : 'opacity-60') : 'opacity-60'}`}
                  href={element.url}
                  key={index}
                  disabled={!element.url ? !element.active : false}
                  dangerouslySetInnerHTML={{ __html: element ? element.label : '' }}
                ></Link>
              )
            } else {
              return null;
            }
          })}</div>
        )}

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
