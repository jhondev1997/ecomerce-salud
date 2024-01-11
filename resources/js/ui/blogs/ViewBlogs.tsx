import { Suspense } from "react";
import { useBlogFetch } from "./hooks/useBlogFetch";
import { transformDateToDay, transformDateToMonth } from "@/utils/transformDate";
import { Link } from "@inertiajs/react";

export const ViewBlogs = () => {

  const data = useBlogFetch();

  const { datas, stateFetch } = data;

  const newDatas = datas?.filter((element, index)=> index < 3)


  return (
    <>
      <section className="max-w-6xl w-full mx-auto mt-12">
      <h2 className="text-center text-2xl font-semibold font-poppins mb-8">Nuestros blogs</h2>
      <div className={`m-auto w-full px-4  gap-8 ${newDatas ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'flex'}`}>
        {newDatas ? (newDatas.map((element, index) => (
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
              <a href="#" className="font-semibold text-2xl font-lobster hover:text-blue-imm-1">{element.titleBlog}</a>
              <div className='py-4 text-slate-700 font-poppins max-h-[calc(340px)] overflow-hidden' dangerouslySetInnerHTML={{ __html: element ? element.descriptionBlog : '' }} id='texto'></div>
              {/* <p>{element.descriptionBlog}</p> */}
              <Link href={`/blog/${element.id}`} className="font-poppins py-1 px-2 rounded bg-blue-imm-1 hover:bg-blue-imm-2 text-white">leer mas...</Link>
            </div>
          </div>
        )))
          :
          (
            stateFetch ? (
              <p className="box__error">Ups! hubo un error, intentelo más tarde</p>
            )
              :
              (
                <div className='w-full flex'>
                  <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )
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
    </>
  )
}
