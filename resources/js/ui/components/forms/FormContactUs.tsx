import axios from "axios";
import { FormEvent, useState } from "react";
import InputErrors from "../spanbars/InputErrors";

type Values = {
  name: string,
  email: string,
  dni: string,
  telephone: string
}


interface PropsInputErrorsContactUs {
  name?: never[]
  email?: never[]
  dni?: never[]
  telephone?: never[]
}

export const FormContactUs = () => {

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    dni: "",
    telephone: ""
  });


  const [classActiveSended, setClassActiveSended] = useState(false);
  const [classActiveWarn, setclassActiveWarn] = useState(false)
  const [classActiveError, setclassActiveError] = useState(false)
  const [wasSuccesfull, setWasSuccesfull] = useState(false)

  const [errors, setErrors] = useState<PropsInputErrorsContactUs>({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onSubmitFormContactUs = async (event: FormEvent<HTMLFormElement>) => {


    const target = event.target as HTMLFormElement;

    if (Object.values(values).includes('')) {

      setclassActiveWarn(true);

      setTimeout(() => {
        setclassActiveWarn(false)
      }, 2000)
      return
    }

    try {

      setClassActiveSended(true);
      await axios.post('/api/mail/immetabolico', values)
      setWasSuccesfull(true)

      setTimeout(() => {
        setClassActiveSended(false);
        setWasSuccesfull(false)
        target.reset();
      }, 1000);

    } catch (error: any) {
      setErrors(error.response.data.errors)
      setclassActiveError(true);

      setTimeout(() => {
        setErrors({})
        setClassActiveSended(false);
        setclassActiveError(false);
        // target.reset();
      }, 3000);
    }
  }


  return (
    <section className="w-full max-w-6xl p-4 m-auto h-[80vh] flex relative ">
      <div className="w-full m-auto h-[80vh] flex relative bg-green-imm-2">
        <img className="absolute m-auto top-0 left-0 object-cover w-full opacity-80 h-[80vh]" src="/image/election-egi_emi/endo-fondo-footer-2.png" alt="asasa" />
        <section className="bg-white bg-opacity-60 relative z-10 w-full p-6 max-w-lg m-auto">
          <h2 className="font-poppins mb-4 font-semibold text-2xl">Separa tu cita</h2>
          <div className="contentInputs">
            <form
              className="contentInputsForm immetabolico"
              onSubmit={(event) => { event.preventDefault(); onSubmitFormContactUs(event) }}
            >
              <input
                className="block my-3 mx-auto w-full p-2 text-xl bg-white placeholder:text-slate-600 bg-opacity-0 border-0 border-b"
                type="text"
                required
                onChange={handleChange}
                id="name"
                name="name"
                placeholder="Nombre"
              />
              <InputErrors messages={errors?.name} className="mt-2" />

              <input className="block my-3 mx-auto w-full p-2 text-xl bg-white placeholder:text-slate-600 bg-opacity-0 border-0 border-b"
                type="number" required onChange={handleChange} id="dni" name="dni" placeholder="DNI" />
              <InputErrors messages={errors?.dni} className="mt-2" />

              <input className="block my-3 mx-auto w-full p-2 text-xl bg-white placeholder:text-slate-600 bg-opacity-0 border-0 border-b"
                type="email" required onChange={handleChange} id="email" name="email" placeholder="Correo" />
              <InputErrors messages={errors?.email} className="mt-2" />

              <input className="block my-3 mx-auto w-full p-2 text-xl bg-white placeholder:text-slate-600 bg-opacity-0 border-0 border-b"
                type="number" required onChange={handleChange} id="telephone" name="telephone" placeholder="Teléfono" />
              <InputErrors messages={errors?.telephone} className="mt-2" />

              <input
                className={`block mt-8 font-bold mb-3 mx-auto w-full p-2 text-xl  placeholder:text-slate-600 border-b border-black cursor-pointer  ${classActiveSended ? 'opacity-60' : 'opacity-100'} ${wasSuccesfull ? 'bg-green-imm-2 text-white': 'bg-opacity-0 bg-white hover:bg-white'}`}
                type="submit"
                disabled={classActiveSended}
                value={`${ classActiveSended && !wasSuccesfull ? 'Enviando...' : wasSuccesfull ? 'Enviado' : 'Enviar' }`} />

            </form>
          </div>
          <span className={`w-full text-center p-1 text-xl font-poppins bg-yellow-500 text-black ${classActiveWarn ? 'block' : 'hidden'}`}>Rellene Correctamente</span>
          <span className={`w-full text-center p-1 text-xl font-poppins bg-red-700 text-white ${classActiveError ? 'block' : 'hidden'}`}>Error al enviar</span>
        </section>
      </div>
    </section>
  )
}
