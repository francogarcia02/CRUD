import { createContext, useState, children, useEffect } from 'react';


export const TableContext = createContext();

const clientesLocal = JSON.parse(localStorage.getItem("clientes")) || [];

export const TableProvider = ({children}) => {
    const [clientes, setClientes] = useState(clientesLocal);

    const addClient = (client) =>{
        let user = {...client, id: client.email}
        let newClientes = [...clientes, user]
        console.log('entra al add')
        setClientes(newClientes)
    }

    const removeClient = (id) => {
        let newClientes = clientes.filter(cliente => cliente.id !== id);
        setClientes(newClientes)
        console.log('entra al remove')
    };

    const modifyClient = (id, updatedClient) => {
        setClientes((prevClientes) =>
            prevClientes.map(cliente => (cliente.id === id ? { ...cliente, ...updatedClient } : cliente))
        );
    };
    useEffect(() =>{
        localStorage.setItem("clientes", JSON.stringify(clientes))
    },[clientes])

    return(
    <TableContext.Provider
    value={{
        addClient,
        clientes,
        removeClient,
        modifyClient
    }}>
        {children}
    </TableContext.Provider>
    )
}