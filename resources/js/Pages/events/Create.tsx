import { LayoutOne } from "@/Layouts/LayoutOne";
import { PageProps } from "@/types";
import { FormEvent } from "@/ui/components/forms/FormEvent";
import { HeaderOne } from "@/ui/components/headers/HeaderOne";

export default function Create({ auth }: PageProps) {
  return (
    <LayoutOne title="Crear Evento" >
      <HeaderOne auth={auth} />

      <FormEvent />
    </LayoutOne>
  )
}
