
interface propsBanner {
  rootPage: string;
}

export const BannerOffOne = ({rootPage}:propsBanner) => {

  let idOfferEvent = 12;
  let typeOffer = "Oferta especial";
  let percentDiscount = "Descuento de 30%";
  let descriptionOffer = "Lorem lorem lorem lorem lorem lorem lorem";
  // let rootPage = "index";

  return (
    <>
      <section className="w-full max-w-6xl relative m-auto px-3">
        <div className="w-full relative h-[calc(60vh)] min-h-[320px] flex">
          <div className="w-full h-full absolute top-0 object-cover">
            <img className="w-full h-full  object-cover" src="/image/election-egi_emi/proc-bg-4.webp" alt="img-bg" />
          </div>
          <article className="bg-white w-80 relative z-10 text-center my-auto mx-4 py-6 px-4 shadow-md">
            <h3 className="font-lobster text-xl font-bold">{typeOffer}</h3>
            <h2 className="font-abel mb-2 text-2xl font-semibold">{percentDiscount}</h2>
            {descriptionOffer &&
              <p className="font-poppins mb-4">{descriptionOffer}</p>
            }
            {rootPage === 'index' ?
              <div className="relative z-10">
                <a href="#" className="text-xl py-1 px-3 text-white font-poppins bg-green-imm-3 rounded-md">Comprar ahora</a>
              </div>
              :
              <div className="relative z-10">
                <strong className="py-2 px-4 bg-blue-imm font-poppins text-white rounded">{descriptionOffer}</strong>
              </div>
            }

          </article>
        </div>
      </section>
    </>
  )
}
