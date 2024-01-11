import { PropsTags } from "@/interfaces/PropsProducts"
import { ItemTag } from "./ItemTag"

interface PropsListTags {
  tags: PropsTags[]
}

export const ListTags = ({ tags }: PropsListTags) => {


  return (
    <ul className="max-h-60 min-h-[8rem] w-full bg-white bg-opacity-40 overflow-y-auto">
      {tags.map((element) => (
        <ItemTag key={element.id} tag={element}/>
      ))
      }
    </ul>
  )
}
