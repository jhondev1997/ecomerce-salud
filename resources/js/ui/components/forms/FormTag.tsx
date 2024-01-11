import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { PropsTags } from '@/interfaces/PropsProducts';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface PropsFormTag {
  tags: PropsTags[]
}

export const FormTag = ({ tags }: PropsFormTag) => {
  const { data, setData, post, processing, errors, reset, wasSuccessful, clearErrors } = useForm({
    name_tag: ''
  })

  const submit : FormEventHandler = (e)=>{
    e.preventDefault();
    post('/admin/tags')

    setTimeout(() => {
      clearErrors()
    }, 3000);
  }

  return (
    <form onSubmit={submit} className='w-full flex justify-between border-t border-blue-imm-1'>
      <div>
        <InputLabel htmlFor="name_tag" value="Agregar un tag" />
        <TextInput
          id="name_tag"
          name="name_tag"
          value={data.name_tag}
          className="mt-1 block w-full"
          isFocused={false}
          onChange={(e) => setData('name_tag', e.target.value)}
          required
        />
        <InputError message={errors.name_tag} className="mt-2" />
      </div>

      <PrimaryButton className="mt-auto" disabled={processing}>
        Crear
      </PrimaryButton>
    </form>
  )
}
