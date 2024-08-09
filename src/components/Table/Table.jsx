import { useContext } from 'react';
import { TableContext } from '../../context/TableContext';
import {useState} from 'react'
import { useForm } from 'react-hook-form';

const Table = () =>{
    const {clientes, removeClient, modifyClient} = useContext(TableContext)
    const [toModify, setToModify] = useState()
    const [handleTab, setHandleTab] = useState(false)
    const { register, handleSubmit } = useForm()
    const [color, setColor] = useState(false)

    const validarNombre = (name) =>{
        if(name !== ''){
            setColor(false)
            return(true)
        }
        else{
            setColor(true)
            return(false)
        }
    }

    const enviar = (data) =>{
        let nameValidation = validarNombre(data.name)
        if(nameValidation){
            let newClient = {...data, email: toModify.email, id: toModify.email}
            modifyClient(toModify.id, newClient)
            closeTab()
        }
    }

    const tab = (
        <div className="absolute left-auto top-20 bg-white p-2 rounded-lg border solid 1px">
            <form className="flex flex-col justify-center align-center gap-5 w-full" onSubmit={handleSubmit(enviar)}>
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
                    <p className="p-2 font-bold">Direccion:</p>
                    <input
                    className="border solid  p-2 rounded-lg w-[100%]"
                    placeholder="Correo electronico"
                    type="text"
                    {...register("address")}
                     />
                </div>
                <div className="flex">
                    <button
                      className="w-[100%] font-bold text-xl p-2 m-2 bg-[#1A3670] text-white rounded-lg "
                      type="submit"
                     >
                      Modificar
                    </button>
                    <button
                      className="w-[100%] font-bold text-xl p-2 m-2 bg-red-600 text-white rounded-lg "
                      onClick={()=>closeTab()}
                     >
                      Cancelar
                    </button>
                </div>
            </form>
        </div>
    )

    const openTab = (client) =>{
        setHandleTab(true)
        setToModify(client)
    }
    const closeTab = () =>{
        setToModify()
        setHandleTab(false)
        setColor(false)
    }

    return(
        <div className="flex justify-center align-center relative">
            {handleTab ?
            tab
            :
            <></>}
            <div className="flex flex-col gap-10 justify-center items-center p-10">
                <h1 className="font-bold text-2xl lg:text-3xl">Tabla de clientes</h1>
                <div className="flex flex-col gap-10 bg-gray-100 p-10 rounded-lg">
                {clientes && clientes.map(client=>(
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <h1 className="">nombre:</h1>
                            <h1 className="font-bold">{client.name}</h1>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="">telefono:</h1>
                            <h1 className="font-bold">{client.phone}</h1>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="">correo electronico:</h1>
                            <h1 className="font-bold">{client.email}</h1>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="">direccion:</h1>
                            <h1 className="font-bold">{client.address}</h1>
                        </div>
                        <button onClick={()=>openTab(client)}>
                            Modificar
                        </button>
                        <button onClick={()=>removeClient(client.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Table