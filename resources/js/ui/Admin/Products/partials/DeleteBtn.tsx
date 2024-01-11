import { useForm } from "@inertiajs/react"

export const DeleteBtn = ({url}:{url:string}) => {
  const {delete:destroy, processing} = useForm();

  const deleteBtn =()=>{
    destroy(url);
  }

  return (
    <button onClick={deleteBtn} className="my-auto bg-red-500 text-white py-0 px-3 rounded-md border border-white hover:border-black hover:opacity-80 transition-all duration-300">eliminar</button>
  )
}
