import Dropdown from '@/Components/Dropdown';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  active: boolean;
  // toggleActive: Dispatch<SetStateAction<boolean>>
  toggleActive: Function;
  adminBoolean: boolean
}

export const PopupPerfil = ({ active, toggleActive, adminBoolean }: Props) => {
  const [moveOut, setMoveOut] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(true);

  const onClickOnDiv = () => {
    if (moveOut) return toggleActive(true);
  }

  return (
    <div
      className={active ? 'hidden' : 'absolute z-30'}
      onClick={onClickOnDiv}
    >
      {
        isLogedIn ?
          <>
            <div className='flex fixed bg-gray-800 bg-opacity-25 h-screen w-full'>
              <div
                onMouseEnter={() => setMoveOut(false)}
                onMouseLeave={() => setMoveOut(true)}
                className="w-2/5 min-w-[360px] h-32 ml-auto flex gap-y-1 flex-wrap justify-between bg-blue-imm-1"
              >
                <Dropdown.Link
                  href='/profile'
                  className="box-border w-full text-xl text-center font-abel py-1 bg-white bg-opacity-95"
                >Perfil</Dropdown.Link>
                <button className="box-border w-full text-xl font-abel py-1 bg-white bg-opacity-95">Configuraciones</button>

                {adminBoolean && (
                  <Dropdown.Link
                    href='/admin/dashboard'
                    className="box-border w-full text-xl text-center font-abel py-1 bg-white bg-opacity-95"
                  >Admin</Dropdown.Link>
                )}

                <Dropdown.Link href={route('logout')} method="post" as="button" className='box-border w-full text-xl text-center font-abel py-1 bg-white bg-opacity-95 rounded-bl-md'>
                  Salir
                </Dropdown.Link>
              </div>
            </div>
          </>
          :
          null
      }
    </div>
  )
}
