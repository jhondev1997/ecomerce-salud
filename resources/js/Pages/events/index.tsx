import { LayoutOne } from "@/Layouts/LayoutOne";
import { PropsEvents } from "@/interfaces/PropsEvents";
import { PageProps } from "@/types";
import { HeaderOne } from "@/ui/components/headers/HeaderOne";
import MainEvents from "@/ui/events/MainEvents";
import { Link } from "@inertiajs/react";


// interface PropsIndexEvents {
//   data: Array<PropsEvents>
// }


export default function index({ auth, events }: PageProps<{ events: Array<PropsEvents> }>) {
  return (
    <LayoutOne title="Eventos">
      <HeaderOne auth={auth} />

      <MainEvents events={events} auth={auth} />

    </LayoutOne>
  )
}
