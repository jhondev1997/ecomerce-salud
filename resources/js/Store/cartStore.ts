import { create } from "zustand";
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { PropsProducts } from "@/interfaces/PropsProducts";

interface PropsProductStore {
  id_product: number,
  name_product: string,
  img_product: string,
  cantidad: number,
  costProduct: number,
}

interface PropsUseCounterStore {
  nameCount: string;
  count: number;
  isCartOpen: boolean;
  toggleIsCartOpen: ()=>void;
  productsInStore: PropsProductStore[];
  incrementCount: (value: number) => void;
  addProduct: (value: PropsProducts) => void;
  plusProduct: (id: number) => void;
  reduceProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
}

export const useCounterStore = createWithEqualityFn<PropsUseCounterStore>((set) => ({
  nameCount: 'Número de items en el carrito',
  count: 0,
  isCartOpen: false,
  productsInStore: [],
  toggleIsCartOpen: ()=> set(state =>({
    ...state,
    isCartOpen: !(state.isCartOpen)
  })),
  incrementCount: (value: number) => set(state => ({
    ...state,
    count: state.count + value
  })),
  addProduct: (value: PropsProducts) => set((state) => {

    let temp = {
      id_product: value.id,
      name_product: value.name_product,
      img_product: value.img_product,
      cantidad: 1,
      costProduct: value.price_offer_product ? value.price_offer_product : value.price_original_product
    }

    if (state.productsInStore.some(productInStore => productInStore.id_product === value.id)) {

      const updateProducts = state.productsInStore.map((element)=> element.id_product === value.id ? ({
        ...element,
        cantidad: element.cantidad + 1,
        costProduct: element.costProduct
      })
        :
        element
      )

      return ({
        ...state,
        productsInStore: updateProducts
      })

    } else {
      return ({
        ...state,
        productsInStore: [
          ...state.productsInStore,
          temp
        ]
      })
    }
  }),
  plusProduct: (id:number) => set((state)=>{
    const updateProducts = state.productsInStore.map((element)=> element.id_product === id ? ({
      ...element,
      cantidad: element.cantidad + 1,
    })
      :
      element
    )

    return ({
      ...state,
      productsInStore: updateProducts
    })
  }),
  deleteProduct: (id) => set((state)=>{
    return ({
      ...state,
      productsInStore: state.productsInStore.filter((productStore)=> productStore.id_product !== id)
    })
  }),
  reduceProduct: (id:number) => set((state)=>{
    if (state.productsInStore.some(productInStore => productInStore.id_product === id && productInStore.cantidad > 1)) {

      const updateProducts = state.productsInStore.map((element)=> element.id_product === id ? ({
        ...element,
        cantidad: element.cantidad - 1,
      })
        :
        element
      )

      return ({
        ...state,
        productsInStore: updateProducts
      })

    } else {
      return ({
        ...state,
        productsInStore: state.productsInStore.filter((productStore)=> productStore.id_product !== id)
      })
    }
  })
}), shallow)
