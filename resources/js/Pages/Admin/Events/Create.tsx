import { LayoutAdmin } from "@/Layouts/LayoutAdmin";
import { PageProps } from "@/types";
import { FormEvent } from "@/ui/components/forms/FormEvent";

export default function Create({ auth, page_base }: PageProps<{ page_base: string }>) {
  return (
    <LayoutAdmin pageBase={page_base}>
      <div className="flex gap-4 min-h-screen h-screen px-4 py-2 relative  overflow-y-auto">
        <img className="fixed m-auto top-0 left-0 object-cover w-full opacity-5 h-full z-0" src="/image/bgs/circuit1.png" alt="asasa" />
        <FormEvent />
      </div>
    </LayoutAdmin>
  )
}
