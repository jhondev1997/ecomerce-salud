import { Link } from "@inertiajs/react"
import { useState } from "react"

interface PropsAsideAdmin {
  pageBase: string
}

const listPagesAdmin = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/admin/dashboard',
    baseName: 'dashboard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    )
  },
  {
    id: 2,
    name: 'Productos',
    path: '/admin/products',
    baseName: 'products',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    )
  },
  {
    id: 3,
    name: 'Blogs',
    path: '/admin/blogs',
    baseName: 'blogs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    )
  },
  {
    id: 4,
    name: 'Eventos',
    path: '/admin/events',
    baseName: 'events',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    )
  },
]

export const AsideAdmin = ({ pageBase }: PropsAsideAdmin) => {

  const [hiddenBtn, setHiddenBtn] = useState(false)


  return (
    <aside className={`bg-gray-600 text-white w-full md:relative absolute z-20 h-full ${hiddenBtn ? 'max-w-[16rem]': 'max-w-[4rem]'}`}>
      <div className="mx-auto w-full grid ">
        <h2 className="w-full text-center font-lobster text-4xl px-4 py-6 flex justify-center items-center bg-gray-500">
          <h3>A</h3>
          <span className={`${hiddenBtn ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>dmin</span>
        </h2>
        <ul className="w-full">
          {listPagesAdmin.map((element) => (
            <Link href={element.path} disabled={pageBase == element.baseName ? true : false} key={element.id} className={`flex py-2 px-4 border-t-2 border-gray-100 transition-all duration-300 ${pageBase == element.baseName ? 'bg-white text-gray-600': 'hover:bg-gray-400'}`}>
              {element.icon}
              <span className={`${hiddenBtn ? 'opacity-100 flex' : 'opacity-0 hidden'}`}>{element.name}</span>
            </Link>
          ))}
        </ul>
      </div>

      <button
        onClick={()=>setHiddenBtn(!hiddenBtn)}
        className="bg-gray-200 text-gray-600 absolute bottom-0 w-full flex justify-center font-bold cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${hiddenBtn ? '' : 'rotate-180'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    </aside>
  )
}
