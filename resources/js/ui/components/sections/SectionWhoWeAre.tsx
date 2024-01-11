import React from 'react'

export const SectionWhoWeAre = () => {
  return (
    <section className="mt-20 max-w-6xl px-3 mx-auto">
      <div className="w-full min-h-[450px] h-[calc(70vh)] m-auto flex flex-wrap relative bg-black">

        <div className="absolute z-10 w-full h-full">
          <video autoPlay loop muted className="w-full h-full object-cover opacity-60">
            <source src='./videos/video4.mp4' type="video/mp4" />
            vuestro navegador no soporta este video
          </video>
        </div>

        <article className="flex flex-col items-center justify-center p-8 font-poppins relative z-20 text-white">
          <h2 className="font-bold text-3xl">Quiénes Somos</h2>
          <p className="mt-3 text-xl text-center max-w-5xl">El Instituto Médico Metabólico es un centro especializado en reconocer las alteraciones del metabolismo, de la nutrición y del entorno; para volver a equilibrarlo, de modo que las personas con molestias crónicas y recurrentes recuperen el bienestar de modo sostenido.</p>
          <a className="mt-3 py-2 px-4 text-xl border border-white rounded-3xl hover:bg-white hover:text-black" href="./pdf/Tgineco.pdf" target='_blank'>Descargar formato</a>
        </article>
      </div>
    </section>
  )
}
