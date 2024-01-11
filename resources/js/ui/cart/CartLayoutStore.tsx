import { useCounterStore } from "@/Store/cartStore";
import { useState } from "react";

export type LabItem = {
  id: number;
  exam: string;
  price: number;
}

export const CartLayoutStore = () => {

  const [eventModal, setEventModal] = useState(true);
  const [eventDivBox, setEventDivBox] = useState(true);

  const { isCartOpen, productsInStore } = useCounterStore((state) => ({
    isCartOpen: state.isCartOpen,
    productsInStore: state.productsInStore
  }));

  const { toggleIsCartOpen, reduceProduct, deleteProduct, plusProduct } = useCounterStore((state) => ({
    toggleIsCartOpen: state.toggleIsCartOpen,
    plusProduct: state.plusProduct,
    deleteProduct: state.deleteProduct,
    reduceProduct: state.reduceProduct,
  }));

  const btnClose = () => {
    setEventModal(false);
    setTimeout(() => {
      toggleIsCartOpen()
      setEventModal(true);
    }, 1000);
  }

  const btnGlobalDiv = () => {
    if (eventDivBox) {
      btnClose();
    }
  }


  return isCartOpen ? (
    <div onClick={btnGlobalDiv} className="bg-slate-700 bg-opacity-70 h-screen w-full flex fixed z-40 top-0 right-0 overflow-hidden">
      <div
        onMouseOver={() => setEventDivBox(false)}
        onMouseOut={() => setEventDivBox(true)}
        className={`p-5 delay-500 transition-all max-w-sm w-full flex flex-wrap content-between ml-auto bg-white ${eventModal ? 'animate-appear-1s delay-300 opacity-100' : 'animate-disappear-1s delay-300 opacity-0'}`}
      >
        <div className="w-full">
          <button
            onClick={btnClose}
            className="bg-red-600 py-1 px-3 rounded-md border-2 text-white hover:bg-white hover:text-red-600 hover:border-red-600"
          >X Cerrar</button>
          <h3 className="text-2xl w-full border-b-2 border-gray-300">Tu carrito</h3>
          {Object.values(productsInStore).length > 0 ? (
            <>
              <ul className="max-h-[calc(100vh-300px)] overflow-auto ul-scroll pr-2">
                {Object.values(productsInStore).map(cartItem => (
                  <li key={cartItem.id_product} className='border-b-2 py-3 flex justify-between gap-3'>
                    <article className="text-lg">
                      <h3>{cartItem.name_product}</h3>
                      <div className="flex gap-4 items-center ">
                        <span>Cantidad: {cartItem.cantidad}</span>
                      </div>
                      <b>s/{cartItem.costProduct * cartItem.cantidad}</b>
                    </article>
                    <div className="gap-2 grid">
                      <div className="flex gap-4 items-center ">
                        <button className="w-8 h-8 rounded-md bg-blue-imm-2 text-white font-bold my-auto" onClick={() => plusProduct(cartItem.id_product)}>
                          +
                        </button>
                        <button className="w-8 h-8 rounded-md bg-blue-imm-2 text-white font-bold" onClick={() => reduceProduct(cartItem.id_product)}>
                          -
                        </button>
                      </div>
                      <button
                        onClick={() => deleteProduct(cartItem.id_product)}
                        className="inline my-auto py-1 px-3 rounded-md bg-orange-500 text-white"
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <style>{
                `
                .ul-scroll::-webkit-scrollbar {
                  width: 8px;
                }

                .ul-scroll::-webkit-scrollbar-track {
                  background: rgba(200,200,200, 0.4);
                  border-radius: 30px;
                }

                .ul-scroll::-webkit-scrollbar-thumb {
                  background: rgba(147,197,253,0.4);
                  border-radius: 30px;
                }
                `
              }</style>
            </>
          )
            :
            <p>¡Tu pedido está vacío!</p>
          }
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <h5><strong>Total</strong></h5>
            <strong>
              s/ {productsInStore.reduce((acc, itemStore) => acc + (itemStore.costProduct * itemStore.cantidad), 0)}
              {/* s/{productsInStore.reduce((acc, labItem) => acc + labItem.price, 0)}.00 */}
            </strong>
          </div>
          <div className="flex justify-between">
            {/* <p>{Object.values(productsInStore).length} exámenes</p> */}
            <p>Inlcuye IGV</p>
          </div>
          <p className="bg-blue-300 text-blue-900 text-center rounded-md my-5">Recuerda pagar en la sede el día de tu cita</p>
          <a
            // href={`https://wa.me/51931283810?text=Me%20interesa%20comunicarme%20con%20usted%20por:%20${textToWSP}`}
            target='__blank'
            className="block text-center px-4 py-2 text-xl text-white bg-blue-imm hover:text-blue-imm hover:bg-white transition-all duration-500 rounded-xl border-blue-imm border-2"
          >
            Agendar por wsp
          </a>
        </div>
      </div>
    </div>
  ) : null
}
