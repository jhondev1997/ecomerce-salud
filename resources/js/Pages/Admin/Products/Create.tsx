import { LayoutAdmin } from "@/Layouts/LayoutAdmin";
import { PropsTags } from "@/interfaces/PropsProducts";
import { PageProps } from "@/types";
import { ListTags } from "@/ui/Admin/Products/partials/ListTags";
import { FormProduct } from "@/ui/components/forms/FormProduct";
import { FormTag } from "@/ui/components/forms/FormTag";

export default function Create({ auth, tags, page_base }: PageProps<{ tags: Array<PropsTags>, page_base: string }>) {
  return (
    <LayoutAdmin title="Admin - General" pageBase={page_base}>
      <div className="flex gap-4 h-screen p-2 relative">
        <img className="fixed m-auto top-0 left-0 object-cover w-full opacity-5 h-full z-0" src="/image/bgs/circuit1.png" alt="asasa" />
        <div className="rounded-md  w-full  overflow-y-scroll z-10">
          <FormProduct tags={tags} />
        </div>
        <div className="w-full max-w-sm grid gap-4 h-full overflow-auto z-10">
          <div className="rounded-md p-4 bg-opacity-10 bg-gray-500">
            <h2 className="border-b border-black text-xl font-black">Tags</h2>
            <div className="flex flex-col justify-between h-[50vh] min-h-[20rem]">
              <ListTags tags={tags} />
              <FormTag tags={tags} />
            </div>
          </div>
          <div className="p-4 bg-opacity-10 bg-gray-500">
            <h2>Tags</h2>
            <ListTags tags={tags} />
            <FormTag tags={tags} />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  )
}
