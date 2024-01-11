import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { useForm } from '@inertiajs/react';
import { PropsTags } from '@/interfaces/PropsProducts';
import { useQueryFilterStore } from '@/Store/filterProductStore';


interface PropsSearchForm {
  list_tags: PropsTags[]
}


export const SearchForm = ({ list_tags }: PropsSearchForm) => {
  const { get, processing, errors, wasSuccessful } = useForm();

  const [clickPopup, setClickPopup] = useState(false);

  const { dataName, dataTags, addQuery, dataTagsAfterSubmit } = useQueryFilterStore((state) => ({
    dataName: state.dataName,
    dataTags: state.dataTags,
    addQuery: state.addQuery,
    dataTagsAfterSubmit: state.dataTagsAfterSubmit
  }))

  const { setDataName, setAddQuery, setDataTags, setDataTagsAfterSubmit } = useQueryFilterStore((state) => ({
    setDataName: state.setDataName,
    setAddQuery: state.setAddQuery,
    setDataTags: state.setDataTags,
    setDataTagsAfterSubmit: state.setDataTagsAfterSubmit
  }))

  const onChangeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      let temp = list_tags.filter((element) => element.id == Number(e.target.value))
      setDataTags([...dataTags, ...temp])
    } else {
      let temp = dataTags.filter((element) => element.id !== Number(e.target.value))
      setDataTags([...temp])
    }
  }

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setDataName(e.target.value)
  }


  const onDeleteTag = (tagId: number) => {
    let temp = dataTags.filter((element) => element.id !== Number(tagId))
    setDataTags([...temp])
  }

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    let temp = ''

    for (let i = 0; i < dataTags.length; i++) {
      if (dataTags.length > i + 1 || i == 0) {
        if (i == 0) {
          temp = '' + dataTags[i].id;
        } else {
          temp = temp + ',' + dataTags[i].id;
        }
      } else {
        temp = temp + ',' + dataTags[i].id;
      }
    }

    let tempAddQuery = `${dataName ? ('name=' + dataName) : ''}${(!!dataName && !!dataTags.length) ? '&' : ''}${dataTags.length ? 'tags=' + temp : ''}`;

    setAddQuery(tempAddQuery)
    setDataTagsAfterSubmit(dataTags);
    get(`/products?${tempAddQuery}`)
  }

  // console.log(processing)
  // console.log(errors)
  // console.log(wasSuccessful)
  // console.log(dataTags)
  // console.log(dataTagsAfterSubmit)

  return (
    <>
      <div className={`${clickPopup ? 'flex' : 'hidden'} absolute left-0 z-10 w-full justify-center align-middle items-center h-[calc(100vh-40px)]`} >
        <div className='w-full h-full flex justify-center items-center bg-slate-600 bg-opacity-40 m-auto fixed'>
          <div className='w-full max-w-xs  p-5 bg-white rounded-2xl'>
            <section className='w-full border-y py-2 border-blue-imm-1'>
              <h2 className='font-bold'>Tags</h2>
              <div className="flex flex-col gap-x-1 gap-3 mb-4 font-abel mt-2 w-full h-full max-h-36 bg-blue-200 overflow-x-hidden overflow-y-auto">
                {list_tags.map((element) => (
                  <div key={element.id} className='py-1 px-2 flex items-center rounded-sm bg-blue-imm-1 text-white'>
                    <input
                      onChange={onChangeTags}
                      type='checkbox'
                      className='py-1 px-2'
                      key={element.id}
                      id={element.name_tag}
                      name='tags_product'
                      checked={dataTags.find(datatag => element.id == datatag.id) ? true : false}
                      value={element.id} />

                    <label className='pl-2 w-full' htmlFor={element.name_tag}>{element.name_tag}</label>
                  </div>
                ))}
              </div>
              <p className='mb-2'>Seleccionados</p>
              <div className='flex flex-wrap items-center gap-3'>
                {dataTags.map((element) => (
                  <button key={element.name_tag} onClick={() => onDeleteTag(element.id)}>
                    <span className='py-1 px-2 rounded-sm border border-blue-imm-1  text-blue-imm-1 font-bold' >{element.name_tag}</span>
                  </button>
                ))}
              </div>
            </section>

            <div className='w-full flex justify-end'>
              <button
                className="py-1 px-3 bg-orange-600 text-white hover:bg-orange-500 rounded mt-2"
                onClick={() => setClickPopup(false)}
              >
                cerrar
              </button>

            </div>
          </div>
        </div>
      </div>
      <form className="w-full max-w-[70rem] m-auto" onSubmit={submit}>
        <div className="flex m-auto justify-center items-center align-middle gap-x-2 py-4 px-4 font-poppins">
          <input
            className="w-full rounded border border-green-imm-2 cursor-text min-w-[10rem] focus:duration-300 focus:ease-linear focus:border-x focus:border-green-imm-3 py-1"
            type="text"
            placeholder="Ingresar medicamento..."
            onChange={onChangeName}
            value={dataName}
          />

          <svg
            onClick={() => setClickPopup(!clickPopup)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${dataTags.length ? 'bg-green-imm-2 text-white' : 'bg-white text-black'} w-11 h-11 hover:w-12 hover:h-12 duration-300 cursor-pointer rounded`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
          </svg>

          <input className="rounded text-white bg-green-imm-3 p-1 text-xl hover:duration-300 hover:ease-linear cursor-pointer hover:bg-green-imm-2" type="submit" value="Buscar" />

        </div>
        <div className='flex flex-wrap items-center gap-3'>
          {addQuery ? dataTagsAfterSubmit.map((element) => (
            <div key={element.name_tag} onClick={() => onDeleteTag(element.id)}>
              <span className='py-1 px-2 text-xs rounded-sm border border-blue-imm-1  text-blue-imm-1 font-bold' >{element.name_tag}</span>
            </div>
          ))
            :
            <span className='py-1 px-2 text-xs rounded-sm border border-blue-imm-1  text-blue-imm-1 font-bold' >Todos</span>
          }
        </div>
      </form>
    </>
  )
}
