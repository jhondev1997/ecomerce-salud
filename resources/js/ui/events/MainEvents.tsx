import { PropsEvents } from "@/interfaces/PropsEvents";
import { PageProps } from "@/types";
import { tranformDateToserialize, tranformDateToserializeToDatabase } from "@/utils/transformDate";
import { Link } from "@inertiajs/react";


export default function MainEvents({ auth, events }: PageProps<{ events: Array<PropsEvents> }>) {

  return (
    <section className="max-w-6xl w-full mx-auto mt-6">
      <h2 className="text-center text-2xl font-semibold font-poppins mb-8">Eventos Imm</h2>
      <ul >
        {
          events.map((element) => {

            const tiempo = new Date();
            let situation;

            if (tranformDateToserializeToDatabase(tiempo) == element.dateEvent) {
              situation = 0;
            } else {

              if (tranformDateToserializeToDatabase(tiempo) < element.dateEvent) {
                situation = 1
              } else {
                situation = 2
              }
            }

            return (
              <li key={element.id} className="border border-green-imm-2 my-5 shadow-xl p-4">
                <header className="flex text-xl font-poppins justify-between flex-wrap">
                  <h2 className="font-normal text-3xl">En <span className="font-bold capitalize">{element.platform}</span></h2>
                  {situation === 0 ?
                    <div className="px-2 rounded-t text-center flex items-center bg-red-700 text-white">Hoy</div>
                    :
                    situation === 1 ?
                      <div className="px-2 rounded-t text-center flex items-center bg-green-imm-2 text-white">Proximamente</div>
                      :
                      <div className="px-2 rounded-t text-center flex items-center bg-blue-imm-1 text-white">Pasado</div>
                  }
                </header>

                <a
                  href={`//${element.linkEvent}`}
                  className="directiontEvent relative h-auto cursor-pointer"
                  rel="external"
                  target="_blank"
                >
                  <img
                    className="w-full max-w-6xl max-h-[calc(70vh)] object-cover"
                    src={'/uploads/' + element.imgEvent}
                    alt={element.titleEvent}
                  />
                  <span className="absolute z-20 left-0 top-0 w-full text-center">click sobre la imagen para ir...</span>
                </a>

                <article className="font-poppins pt-4 px-1">
                  <h2 className="font-bold text-2xl">{element.titleEvent}</h2>
                  <h3 className="font-bold text-lg">{element.dateEvent.toString()}  - Hora Peruana</h3>
                  <h4 className="font-bold">Descripción:</h4>
                  <div className='py-1 text-slate-700 font-poppins max-h-[calc(340px)] overflow-hidden' dangerouslySetInnerHTML={{ __html: element ? element.descriptionEvent : '' }} id='texto'></div>
                </article>
                <div className='w-full flex justify-between'>
                  {auth.user && (
                    <Link href={`/event/${element.id}`} className="font-poppins py-1 px-2 rounded bg-orange-600 hover:bg-orange-500 text-white">Editar</Link>
                  )}
                </div>
              </li>
            )
          })
        }
      </ul>
      <style>
        {
          `
          .directiontEvent span{
            color: #fff;
            opacity: 0;
          }

            .directiontEvent:hover span{
              opacity: 100;
            }
          `
        }
      </style>
    </section>
  )
}
