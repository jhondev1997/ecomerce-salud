
export const BannerMapOne = () => {
  return (
    <section className="w-full max-w-6xl px-4 mx-auto my-12">
      <div className="w-full m-auto bg-green-imm-3 flex flex-wrap rounded-md">
        <div className="font-poppins text-white flex flex-wrap flex-grow flex-shrink-0 basis-80 m-auto gap-y-3 gap-x-4 w-full justify-around p-2">

          <div className="flex-grow flex-shrink basis-72 px-2">
            <header className="flex justify-between items-center my-2">
              <h2 className='text-2xl font-semibold'>Dirección</h2>
            </header>
            <article>
              <p>Av. Javier Prado Este 1476, San Isidro,</p>
              <p className="flex">Lima-Perú
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </p>
            </article>
          </div>

          <div className="flex-grow flex-shrink basis-72 px-2">
            <header className="flex justify-between items-center my-2">
              <h2 className='text-2xl font-semibold'>Horarios</h2>
            </header>

            <article>
              <p>Lunes a viernes</p>
              <p className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span> 7:00 a.m. a 6:00 p.m.</span>
              </p>
              <p>Sabados</p>
              <p className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span> 2:00 p.m.</span>
              </p>
            </article>
          </div>
        </div >
        <div className='flex flex-grow flex-shrink basis-3/5'>
          <iframe
            className="m-auto w-full h-[70vh]"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5517.305824615852!2d-77.01261965382189!3d-12.0899326924939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1simm!5e0!3m2!1ses-419!2spe!4v1668522478993!5m2!1ses-419!2spe"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div >
    </section >
  )
}
