import InputError from "@/Components/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import TextInput from "@/Components/TextInput"
import { useForm } from "@inertiajs/react"
import { Dispatch, FormEventHandler, SetStateAction } from "react"

export const FormUpdateTag = ({ tagId, nameTag, setOpenEditTag }: { tagId: number, nameTag: string, setOpenEditTag: Dispatch<SetStateAction<boolean>> }) => {
  const { data, setData, patch, processing, errors, reset, wasSuccessful, clearErrors } = useForm({
    name_tag: nameTag
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault();


    patch('/admin/tags/' + tagId)

    setOpenEditTag(false)

    setTimeout(() => {
      clearErrors()
    }, 3000);
  }

  return (
    <form onSubmit={submit} className="flex gap-2 items-center">
      <TextInput
        id="name_tag"
        name="name_tag"
        value={data.name_tag}
        className="block w-full py-1 border-none px-0 rounded-none"
        isFocused={false}
        onChange={(e) => setData('name_tag', e.target.value)}
        required
      />
      <InputError message={errors.name_tag} className="mt-2" />

      <PrimaryButton className="my-auto py-1" disabled={processing}>
        Edit
      </PrimaryButton>
    </form>
  )
}
