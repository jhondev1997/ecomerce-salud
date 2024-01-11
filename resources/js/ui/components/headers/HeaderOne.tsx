import { useEffect, useState } from 'react';
import { PopupPerfil } from '../popups/PopupPerfil';
import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useCounterStore } from '@/Store/cartStore';

const listPaths = [
  {
    linkPath: '/products',
    namePath: 'Productos'
  },
  {
    linkPath: '/blogs',
    namePath: 'Blogs'
  },
  {
    linkPath: '/events',
    namePath: 'Eventos'
  }
]

interface Props {
  routers: string;
}

export const HeaderOne = ({ auth }: PageProps) => {

  const [menuState, setMenuState] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [toggleClickedPerfil, setToggleClickedPerfil] = useState(true);

  const { isCartOpen, productsInStore } = useCounterStore((state) => ({
    isCartOpen: state.isCartOpen,
    productsInStore: state.productsInStore
  }));

  useEffect(() => {
    if (auth.user) {
      setIsLogedIn(true)
    } else {
      setIsLogedIn(false)
    }
  }, [auth.user])


  const menuClick = () => {
    if (menuState) return setMenuState(false);
    setMenuState(true);
  }

  const onClickPerfil = () => {
    if (toggleClickedPerfil) return setToggleClickedPerfil(false);
    setToggleClickedPerfil(true);
  }

  const { toggleIsCartOpen } = useCounterStore((state) => ({
    toggleIsCartOpen: state.toggleIsCartOpen
  }));

  return (
    <>
      <header className="w-full sticky top-0 z-30 shadow-lg bg-white">
        <nav className="w-full max-w-6xl mx-auto py-2 px-4 flex justify-between relative">

          <nav className="flex items-center">
            <Link
              className="flex gap-x-1"
              href='/'
            >
              <img className=" w-16 sm:w-20" src="/image/endo-logo-short.svg" alt="logo" />
              <h1 className={`text-4xl sm:text-5xl font-lobster font-semibold ${usePage().url == '/' ? 'text-green-imm-2' : 'text-black'}`}>Salufem</h1>
            </Link>
          </nav>

          <nav className="hidden md:flex items-center">
            <ul className="flex gap-x-5 items-center font-poppins">
              {listPaths.map((element) => (
                <li key={element.linkPath}>
                  <Link className={`${usePage().url == element.linkPath ? 'text-green-imm-2' : 'text-black hover:text-green-imm-1'} `} href={element.linkPath}>{element.namePath}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="hidden md:flex items-center gap-x-5">
            {
              isLogedIn ?
                <>
                  <div onClick={toggleIsCartOpen} className="rounded-full relative p-2 border-2 border-green-imm-2 cursor-pointer hover:bg-green-imm-2 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    {!!productsInStore.length &&
                      <span className='absolute top-0 z-10 bg-red-700 text-white right-0 px-1 rounded-full text-xs'>
                        {productsInStore.length}
                      </span>
                    }
                  </div>

                  <div className="my-1 text-center"
                    onClick={onClickPerfil}
                  >
                    <img className="h-12 w-12 cursor-pointer" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
                  </div>
                </>
                :
                <Link href="/login" className="my-1 text-center">
                  <img className="h-12 w-12 cursor-pointer" src="../../image/election-egi_emi/img-1.png" alt="perfil" />
                </Link>
            }
          </nav>

          <nav className="flex md:hidden gap-x-5 items-center">
            <div onClick={menuClick} className={`rounded-full p-2 border-2 border-green-imm-2 cursor-pointer hover:bg-green-imm-2 hover:text-white ${menuState}`} id="menu-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </div>
            {
              isLogedIn ?
                <>
                  <div className="my-1 text-center"
                    onClick={onClickPerfil}
                  >

                    <img className="h-12 w-12 cursor-pointer" src="/image/election-egi_emi/img-1.png" alt="perfil" />
                  </div>
                </>
                :
                <Link href="/login" className="my-1 text-center">
                  <img className="h-12 w-12 cursor-pointer" src="/image/election-egi_emi/img-1.png" alt="perfil" />
                </Link>
            }
          </nav>

          <div className={`absolute top-full w-3/4 h-[calc(90vh)] min-h-[calc(500px)] bg-white right-0 p-4 transition-all duration-300 shadow-2xl z-10 ${menuState ? 'inline md:hidden poligon-on ' : 'inline md:hidden poligon-off'}`} id="header-center-right">
            <nav className="flex justify-between px-2">
              <div className="rounded-full p-2 border-2 border-green-imm-2 cursor-pointer hover:bg-green-imm-2 hover:text-white">
                <a href="#" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </a>
              </div>
              <a className="flex items-center text-green-imm-2 font-semibold font-poppins" href="#">Carrito de compras
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-imm-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </nav>
            <nav className="flex">
              <ul className="inline-block w-full">
                {
                  listPaths.map((element) => (
                    <Link key={element.linkPath}
                      href={element.linkPath}
                      className={`border-x border-green-imm-2 flex py-4 px-2 justify-between my-4 hover:bg-green-imm-2`}
                    >
                      <li >{element.namePath}</li>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-imm-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))
                }
              </ul>
            </nav>
          </div>
        </nav>

        <style>
          {
            `
              .poligon-on{
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
              }

              .poligon-off{
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
              }
            `
          }
        </style>
      </header>

      {
        isLogedIn ? (
          <PopupPerfil
            active={toggleClickedPerfil}
            toggleActive={setToggleClickedPerfil}
            adminBoolean={auth.user.rol_id == 10 ? true : false}
          />
        )
          :
          null
      }

    </>
  )
}
