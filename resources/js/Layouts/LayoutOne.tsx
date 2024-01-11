import { CartLayoutStore } from "@/ui/cart/CartLayoutStore"
import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

export const LayoutOne = ({title ,children}:PropsWithChildren<{title?: string}>) => {
  return (
    <>
      <Head title={title ? 'IMMSalufem - ' + title : 'IMMSalufem'}>
        <meta name="IMM-INDEX" content="Centro Médico Metabólico, especializado en alteraciones del metabolismo. Endocrinología." />
        <link rel="icon" type="image/x-icon" href="/image/favicon-endo.svg" />
        <meta name="description" content="Centro Médico Metabólico, especializado en alteraciones del metabolismo. Endocrinología."/>
        <meta name="keywords" content="Centro Médico Metabólico, especializado en salud femenina."/>
        <link rel="canonical" href="https://salufem.com" />
      </Head>
      <>
        <CartLayoutStore />
        {children}
      </>

      <style>
        {
          `
          @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Abel&family=Libre+Franklin:wght@100&family=Poppins:wght@100;200;300;400;500;600;700;800&family=Water+Brush&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          `
        }
      </style>
    </>
  )
}
