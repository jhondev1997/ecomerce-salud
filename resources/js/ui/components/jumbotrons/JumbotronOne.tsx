import { PropsProducts } from "@/interfaces/PropsProducts"
import { Link } from "@inertiajs/react";

interface PropsJumbotronOne {
  list_products: PropsProducts[]
}

export const JumbotronOne = ({ list_products }: PropsJumbotronOne) => {

  const firstProduct = list_products[0];
  const secondProduct = list_products[1];
  const thirdProduct = list_products[2];


  return list_products.length && (
    <>
      <section className="w-full max-w-6xl py-8 m-auto">
        <h2 className="text-center font-poppins mb-4 text-3xl font-semibold">Nuestros productos</h2>
        <div className="w-full px-3 m-auto flex items-center flex-wrap gap-7">
          <article className="flex-shrink flex-grow basis-96 p-8 flex rounded border border-green-imm-2 flex-wrap">
            {/* <img className="w-24 mr-2 mb-2" src="../../image/election-egi_emi/sangre-1.svg" alt="" /> */}
            <img
              className="mr-2 mb-2 w-auto max-w-xs max-h-40"
              src={'/uploads/' + firstProduct.img_product}
              alt="img" />
            <div className="flex-shrink flex-grow basis-80">
              <h3 className="text-2xl font-abel font-semibold">{firstProduct.name_product}</h3>
              <p className="font-poppins max-h-20 overflow-hidden" dangerouslySetInnerHTML={{ __html: firstProduct ? firstProduct.description_product : '' }}></p>
              <div className="mt-4">
                <Link
                  href={`/product/${firstProduct.plug_product}`}
                  className="py-2 px-4 bg-green-imm-3 font-poppins text-white rounded hover:bg-green-imm-2 transition-all duration-200"
                >ver mas..</Link>
              </div>
            </div>
          </article>
          <div className="flex-shrink flex-grow basis-96 flex flex-wrap gap-7">
            {secondProduct && (
              <article className="p-8 flex rounded border border-green-imm-2 flex-wrap">
                {/* <img className="mb-3 mx-2 w-12" src="../../image/election-egi_emi/sangre-7.svg" alt="" /> */}
                <img className="mb-3 mx-2 w-auto max-w-xs max-h-40" src={'/uploads/' + secondProduct.img_product} alt="img" />
                <div className="flex-shrink flex-grow basis-64">
                  <h3 className="text-2xl font-abel font-semibold">{secondProduct.name_product}</h3>
                  <p className="font-poppins max-h-20 overflow-hidden" dangerouslySetInnerHTML={{ __html: secondProduct ? secondProduct.description_product : '' }}></p>
                  <div className="mt-4">
                    <Link
                      href={`/product/${secondProduct.plug_product}`}
                      className="py-2 px-4 bg-green-imm-3 font-poppins text-white rounded hover:bg-green-imm-2 transition-all duration-200"
                    >ver mas..</Link>
                  </div>
                </div>
              </article>
            )}
            {thirdProduct && (
              <article className="p-8 flex rounded border border-green-imm-2 flex-wrap">
                <img className="mb-3 mx-2 w-auto max-w-xs max-h-40" src={'/uploads/' + thirdProduct.img_product} alt="" />
                <div className="flex-shrink flex-grow basis-64">
                  <h3 className="text-2xl font-abel font-semibold">{thirdProduct.name_product}</h3>
                  <p className="font-poppins max-h-10 overflow-hidden" dangerouslySetInnerHTML={{ __html: thirdProduct ? thirdProduct.description_product : '' }}></p>
                  <div className="mt-4">
                    <Link
                      href={`/product/${thirdProduct.plug_product}`}
                      className="py-2 px-4 bg-green-imm-3 font-poppins text-white rounded hover:bg-green-imm-2 transition-all duration-200">ver mas..</Link>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
