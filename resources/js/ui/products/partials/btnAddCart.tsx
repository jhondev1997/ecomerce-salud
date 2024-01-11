import { useCounterStore } from "@/Store/cartStore";
import { PropsProducts } from "@/interfaces/PropsProducts"

interface PropsBotonAddCart {
  product: PropsProducts;
  idProduct: number
}

export default function BotonAddCart({ product, idProduct }: PropsBotonAddCart) {


  const { productsInStore } = useCounterStore((state) => ({
    productsInStore: state.productsInStore
  }));

  const { addProduct } = useCounterStore((state) => ({
    addProduct: state.addProduct
  }));


  return (
    <>
      {productsInStore.some((element) => element.id_product === idProduct) ? (
        <p
          className="rounded-lg my-auto p-4 bg-white text-black hover:bg-white hover:text-black transition-all duration-300"
        >En carrito</p>
      )

        :
        <button
          className="rounded-lg my-auto p-4 bg-green-imm-2 text-white hover:bg-white hover:text-black transition-all duration-300"
          onClick={() => addProduct(product)}
        >agregar a carrito</button>
      }
    </>
  )
}


