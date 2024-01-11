import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"
import { AsideAdmin } from "./partials/AsideAdmin"


export const LayoutAdmin = ({ title, children, pageBase }: PropsWithChildren<{ title?: string, pageBase:string }>) => {
  return (
    <>
      <Head title={title ? 'IMMSalufem - ' + title : 'IMMSalufem'}>
        <meta name="IMM-INDEX" content="Centro Médico Metabólico, especializado en alteraciones del metabolismo. Endocrinología." />
        <link rel="icon" type="image/x-icon" href="/image/favicon-endo.svg" />
        <meta name="description" content="Centro Médico Metabólico, especializado en alteraciones del metabolismo. Endocrinología." />
        <meta name="keywords" content="Centro Médico Metabólico, especializado en salud femenina." />
        <link rel="canonical" href="https://salufem.com" />
      </Head>
      <>
        <div className="w-full bg-white flex h-screen relative">
          <AsideAdmin pageBase={pageBase}/>
          <section className="bg-white w-full">
            {children}
          </section>
        </div>
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
