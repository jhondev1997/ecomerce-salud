import { incrementalCarrusel } from "@/utils/intervals";

const articlesCarruselList = [
  {
    id: 0,
    subtitle: 'Ofrecemos algo más allá de la medicación',
    letterInitial: 'L',
    paragraph: 'a medicación es solo un dispositivo que ofrecemos a nuestras administraciones y una consideración extraordinaria hacia el paciente.',
    classNameArticle: '',
    imageArticle: '/image/servicios/ninos.png'
  },
  {
    id: 1,
    subtitle: 'Su salud es nuestra prioridad',
    letterInitial: 'C',
    paragraph: 'uidar de tú salud ahora es más fácil porque cuentas con nosotros, y con la variedad de medicinas y productos que tenemos para tí.',
    classNameArticle: '',
    imageArticle: '/image/servicios/dolor.png'
  },
  {
    id: 2,
    subtitle: 'Subtitle semilargo',
    letterInitial: 'S',
    paragraph: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, optio alias? Non tenetur odit repellatratione.',
    classNameArticle: '',
    imageArticle: '/image/servicios/gastro.png'
  },
]

export const MainOne = () => {
  const { timer, setTime } = incrementalCarrusel(articlesCarruselList);

  return (
    <>
      <main className="w-full relative">
        <section className="w-full max-w-6xl mx-auto px-3 flex relative z-0">
          <div className="w-full flex relative xl:min-h-[calc(100vh-76px)] min-h-[600px] max-h-[810px] overflow-hidden">
            {articlesCarruselList.map((element) => (
              <div key={element.id}>
                <div className="w-full h-full absolute top-0 object-cover bg-black">
                  <img className="w-full h-full opacity-50 object-cover" src={element.imageArticle} alt="img" loading="lazy"/>
                </div>

                <article  className={`flex items-center w-full md:h-full md:max-h-[810px]  m-auto px-4  duration-300 ease-linear md:p-4 h-[calc(100vh-70px)] min-h-[calc(500px)] ${timer === element.id ? 'relative opacity-100 z-20' : 'z-10 opacity-0 absolute'}`}>

                  <div className="pr-2 w-full relative min-h[2rem] text-white z-10">
                    <h3 className="relative font-abel text-4xl font-semibold
                    ">{element.subtitle}</h3>
                    <p className="font-poppins relative z-10 my-4"><span className="text-xl">{element.letterInitial}</span>{element.paragraph}</p>
                    <div className="relative z-10">
                      <a className="p-1 rounded text-white bg-green-imm-3 hover:bg-green-imm-2" href="#">ver mas..</a>
                    </div>
                  </div>
                  <div className="z-10 w-60 relative hidden md:flex">
                    <img className="" src="/image/endo-f3.svg" alt="img" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className="absolute bottom-0 w-full">
          <div className="w-full p-2 max-w-6xl m-auto max-h-28 flex flex-col justify-between pl-7 gap-2">
            {articlesCarruselList.map((element) => (
              <div onClick={() => { setTime(element.id) }} key={element.id} className={`cursor-pointer w-6 h-6 rounded-full ${element.id === timer ? 'bg-white' : 'bg-blue-imm'}`}></div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
