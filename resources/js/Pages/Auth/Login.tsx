import { useEffect, FormEventHandler } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { incrementalCarrusel } from '@/utils/intervals';


const articlesCarruselList = [
  {
    id: 0,
    img: '/image/1.jpg',
  },
  {
    id: 1,
    img: '/image/2.jpg',
  },
  {
    id: 2,
    img: '/image/3.jpg',
  },
]

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const { timer } = incrementalCarrusel(articlesCarruselList);

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <GuestLayout>
      <section className="w-full h-screen flex relative">
        <div className="w-full h-full absolute top-0 object-cover">
          <img className="w-full h-full opacity-90 object-cover" src="/image/election-egi_emi/proc-bg-4.webp" alt="img" />
        </div>

        <div className="w-[95%] px-4 max-w-5xl flex min-h-[380px] relative z-10 m-auto">
          <div className="w-full max-w-4xl relative hidden sm:flex bg-black">
            {articlesCarruselList.map((element) => (
              <div key={element.id} className={`absolute z-10 bg-black transition-all ease-linear w-full flex h-full ${element.id === timer ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
                <img className="object-cover w-full opacity-80" src={element.img} alt="" />
                <div className="top-[calc(45%)] left-[calc(10%)] absolute text-white font-poppins flex items-baseline">
                  <img className='h-12 mr-1' src="../../image/imm-logo-white-short-v2.svg" alt="" />
                  <div className='mt-3 w-1 h-8 bg-white'></div>
                  <span className='pl-2 text-6xl font-lobster'>farma</span>
                </div>
              </div>
            ))}
          </div>


          <div className="w-80 min-w-[calc(280px)] backdrop-blur-sm py-4 bg-black bg-opacity-10 m-auto">
            <div className="text-white font-poppins items-center flex sm:hidden justify-center">
              <img className='h-12 mr-1' src="../../image/imm-logo-white-short-v2.svg" alt="" />
              <div className='mt-3 w-1 h-8 bg-white'></div>
              <span className='pl-2 text-6xl font-lobster'>farma</span>
            </div>
            <div className="login__box__two__content p-4">
              <form onSubmit={submit}>
                <div className="my-4 mx-auto">
                  <InputLabel htmlFor="email" value="Email" className='text-white font-poppins rounded' />
                  <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className='p-1 w-full m-auto border-none rounded'
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="my-4 mx-auto">
                  <InputLabel className='text-white font-poppins rounded' htmlFor="password" value="Password" />

                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className='p-1 w-full m-auto border-none rounded'
                    autoComplete="current-password"
                    onChange={(e) => setData('password', e.target.value)}
                  />

                  <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <Checkbox
                      name="remember"
                      checked={data.remember}
                      onChange={(e) => setData('remember', e.target.checked)}
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-50">
                      Recordarme
                    </span>
                  </label>
                </div>


                {canResetPassword && (
                  <Link
                    href={route('password.request')}
                    className="underline text-sm text-white dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  >
                    ¿Olvidastes tu contraseña?
                  </Link>
                )}

                <div className="w-full mt-4 mx-auto flex justify-between items-center">
                  <PrimaryButton
                    className='p-1 font-poppins rounded bg-black text-white hover:bg-gray-800 cursor-pointer'
                    disabled={processing}>
                    Ingresar
                  </PrimaryButton>

                  <Link className='font-abel  text-white  hover:text-black transition-all duration-300'
                    href={route('register')}

                  >Crear una cuenta...</Link>
                </div>

                <p className="font-poppins text-2xl text-white text-center">ó</p>

                <div className="div-loginOthers">
                  <a className="my-2 mx-auto block font-poppins w-full text-center rounded-3xl bg-blue-imm-1 text-white" href="#"><strong className='text-2xl'>f</strong>acebook</a>
                  <a className="my-2 mx-auto block font-poppins w-full text-center rounded-3xl bg-white text-black" href="#"><strong className='text-2xl'>G</strong>oogle</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ml-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form> */}

    </GuestLayout>
  );
}
