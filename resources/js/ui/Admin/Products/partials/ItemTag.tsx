import { PropsTags } from "@/interfaces/PropsProducts"
import { useState } from "react"
import { DeleteBtn } from "./DeleteBtn"
import { FormUpdateTag } from "@/ui/components/forms/FormUpdateTag"

export const ItemTag = ({tag}: {tag: PropsTags}) => {

  const [openEditTag, setOpenEditTag] = useState(false)


  return (
    <li className=" my-2 border-y border-white hover:border-gray-400 transition-all duration-300">
      <div className={`w-full justify-between ${openEditTag ? 'hidden' : 'flex'}`}>
        <p className="font-bold">{tag.name_tag}</p>
        <div className="flex gap-4">
          <button onClick={() => setOpenEditTag(!openEditTag)} className="my-auto bg-white text-black py-0 px-3 rounded-md border border-white hover:border-black hover:opacity-80 transition-all duration-300">editar</button>
          <DeleteBtn url={`/admin/tags/${tag.id}`} />
        </div>
      </div>
      <div className={`w-full justify-between gap-2 ${openEditTag ? 'flex' : 'hidden'}`}>
        <FormUpdateTag tagId={tag.id} nameTag={tag.name_tag} setOpenEditTag={setOpenEditTag}/>
        <button onClick={() => setOpenEditTag(!openEditTag)} className="my-auto bg-orange-500 text-white py-0 px-3 rounded-md border border-white hover:border-black hover:opacity-80 transition-all duration-300">cancelar</button>
      </div>
    </li>
  )
}
