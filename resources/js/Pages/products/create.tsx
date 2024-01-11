import { LayoutOne } from "@/Layouts/LayoutOne";
import { PropsTags } from "@/interfaces/PropsProducts";
import { PageProps } from "@/types";
import { FormProduct } from "@/ui/components/forms/FormProduct";
import { HeaderOne } from "@/ui/components/headers/HeaderOne";

export default function create({ auth, tags }: PageProps<{ tags: Array<PropsTags>}>) {


  return (
    <LayoutOne title="Crear Producto">
      <HeaderOne auth={auth} />


      <FormProduct tags={tags}/>

    </LayoutOne>
  )
}
