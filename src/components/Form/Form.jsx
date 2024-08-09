import { useForm } from 'react-hook-form';
import {useState} from 'react'
import { useContext } from 'react';
import { TableContext } from '../../context/TableContext';

const Form = () =>{
    const { register, handleSubmit } = useForm()
    const [errorNombre, setErrorNombre] = useState(<></>)
    const [color, setColor] = useState(false)
    const {addClient} = useContext(TableContext)

    const validarNombre = (name) =>{
        if(name !== ''){
            setColor(false)
            setErrorNombre(
                <div></div>
            )
            return(true)
        }
        else{
            setColor(true)
            setErrorNombre(
                <div className="bg-gray-100 rounded absolute right-20">Error en el nombre</div>
            )
            return(false)
        }
    }
    const validarMail = (email) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const enviar = (data) =>{
        let nameValidation = validarNombre(data.name)
        let emailValidation = validarMail(data.email)
        if(nameValidation && emailValidation){
            addClient(data)
        }
        else{
            console.log(emailValidation, nameValidation)
        }
    }

    return(
        <div className="flex justify-center align-center p-10 relative">
            {errorNombre}
            <form className="flex flex-col justify-center align-center gap-5 w-[50%]" onSubmit={handleSubmit(enviar)}>
                <h1 className="font-bold text-2xl lg:text-3xl">Registrar cliente</h1>
                <div className="w-full">
                    <p className="p-2 font-bold">Nombre:</p>
                    <input
                    className={`border solid ${color ? 'border-red-500' : ''} p-2 rounded-lg w-[100%]`}
                    placeholder="Correo electronico"
                    type="text"
                    {...register("name")}
                     />
                </div>
                <div className="">
                    <p className="p-2 font-bold">Numero telefonico:</p>
                    <input
                    className="border solid  p-2 rounded-lg w-[100%]"
                    placeholder="Correo electronico"
                    type="text"
                    {...register('phone')}
                     />
                </div>
                <div className="">
                    <p className="p-2 font-bold">Correo electronico:</p>
                    <input
                    className="border solid p-2 rounded-lg w-[100%]"
                    placeholder="Correo electronico"
                    type="text"
                    {...register("email")}
                     />
                </div>
                <div className="">
                    <p className="p-2 font-bold">Direccion:</p>
                    <input
                    className="border solid  p-2 rounded-lg w-[100%]"
                    placeholder="Correo electronico"
                    type="text"
                    {...register("address")}
                     />
                </div>
                <button
                  className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg "
                  type="submit"
                 >
                  Registrar
                </button>
            </form>
        </div>
    )
}

export default Form