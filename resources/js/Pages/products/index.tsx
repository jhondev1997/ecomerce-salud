import { LayoutOne } from "@/Layouts/LayoutOne";
import { PageProps } from "@/types";
import { HeaderOne } from '../../ui/components/headers/HeaderOne';
import { PropsPaginateProducts, PropsTags } from "@/interfaces/PropsProducts";
import { Link } from "@inertiajs/react";
import { Suspense } from 'react';
import { SearchForm } from "@/ui/components/forms/SearchForm";
import { useQueryFilterStore } from "@/Store/filterProductStore";
import BotonAddCart from "@/ui/products/partials/btnAddCart";

const productsList = [
  {
    id: 0,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Dexametazona',
    tagsProduct: ['adulto-mayor', 'niño', 'jovenes', 'metabolido', 'ginecologico'],
    priceOriginal: 100,
    priceOffer: 43,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 1,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Amoxicilina',
    tagsProduct: ['adultos', 'niño', 'jovenes', 'metabolido', 'ginecologico'],
    priceOriginal: 100,
    priceOffer: 43,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 2,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Pastilla sabor ceviche',
    tagsProduct: ['adultos', 'jovenes', 'industrial', 'ginecologico'],
    priceOriginal: 120,
    priceOffer: null,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 3,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Cocadas para la diabetes',
    tagsProduct: ['adultos', 'embarazo', 'jovenes', 'metabolido', 'ginecologico'],
    priceOriginal: 150,
    priceOffer: 42,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
  {
    id: 4,
    imgProduct: '../../image/election-egi_emi/sangre-1.svg',
    nameProduct: 'Agua deshidratada',
    tagsProduct: ['adultos', 'niño', 'jovenes', 'metabolido'],
    priceOriginal: 19,
    priceOffer: null,
    descriptionShortProduct: 'Este producto se encuentra en IMMFARM Exclusivamenete',
    descriptionProduct: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur provident velit aliquid error quia nam inventore tempora quae maxime alias veniam temporibus ea, delectus recusandae in et, quaerat nulla.',
  },
]

export default function index({ auth, format_product, list_tags }: PageProps<{ format_product: PropsPaginateProducts, list_tags: PropsTags[] }>) {

  // console.log(list_tags)
  // console.log(format_product)

  // const [addQuery, setAddQuery] = useState('');



  const { addQuery } = useQueryFilterStore((state) => ({
    addQuery: state.addQuery,

  }))



  return (
    <LayoutOne title="Productos">
      <HeaderOne auth={auth} />

      <div className="w-full relative px-4">
        <SearchForm
          list_tags={list_tags}
        />
      </div>

      <div className="w-full py-10">
        {format_product.data.length ? <ul className="m-auto max-w-6xl w-[calc(95%)]" style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))", gap: "32px" }}>
          {format_product.data.map((element) => (
            <li key={element.id} className="border group border-green-imm-2 font-poppins relative rounded-md p-4 text-center overflow-hidden w-full max-w-xs m-auto h-full shadow-xl flex flex-col">
              <Suspense fallback={
                <img
                  className="h-16 mx-auto"
                  src="../../image/election-egi_emi/sangre-1.svg"
                  alt="img" />
              }>
                <img
                  className="h-32 mx-auto"
                  src={'/uploads/' + element.img_product}
                  alt="img" />
              </Suspense>
              <div className="h-full flex flex-col justify-between gap-2">
                <h2 className="font-abel text-xl font-semibold mt-2 capitalize">{element.name_product}</h2>
                {element.price_offer_product === null ?
                  <>
                    <p className="priceOffer-product">$ {element.price_original_product}</p>
                  </>
                  :
                  <>
                    <p className="line-through opacity-70">$ {element.price_original_product}</p>
                    <p className="priceOffer-product">$ {element.price_offer_product}</p>
                  </>
                }
              </div>
              <div className="bg-black bg-opacity-60 flex absolute top-0 w-full h-full -left-80 invisible rounded-md group-hover:transition-all group-hover:duration-500 group-hover:block group-hover:translate-x-80 group-hover:visible">
                <div className="h-1/2  align-middle flex justify-center info">
                  <Link
                    className="rounded-xl my-auto p-4 bg-blue-imm-1 text-white hover:bg-white hover:text-black transition-all duration-300"
                    href={`/product/${element.plug_product}`}>Ver info</Link>
                </div>
                <div className="h-1/2 align-middle flex justify-center car">
                  <BotonAddCart
                    product={element}
                    idProduct={element.id}
                  />
                </div>
              </div>
            </li>
          ))
          }
        </ul>
          :
          <div className="w-full h-full ">

            <h3 className="m-auto text-center">Lo sentimos, no pudimos encontrar algo parecido</h3>
            <div className="col-12 col-md-5 col-xl-4 my-5">

              <div className="text-center">

                <h1 className="display-4 mb-3">
                  Contenido no encontrada 😭
                </h1>


                <Link href="/products" className="bg-black text-white rounded hover:bg-slate-800 py-2 px-5">
                  Ir a Productos
                </Link>

              </div>

            </div>
          </div>
        }

        {format_product.links.length > 3 && (
          <div className='flex justify-center gap-2 mt-5'>{format_product.links.map((element, index) => {
            if (index == 0 || (index == format_product.links.length - 1)) {

              return (
                <Link
                  as="button"
                  className={`py-1 px-3 bg-green-imm-3 rounded-sm text-white ${element.url ? (!element.active ? ' opacity-100' : 'opacity-60') : 'opacity-60'}`}
                  href={element.url + (addQuery ? '&' + addQuery : '')}
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
      </div>
    </LayoutOne>
  )
}
