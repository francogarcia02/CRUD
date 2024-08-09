import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className="w-screen flex justify-center align-center gap-5 p-2 bg-red-600">
            <Link className="text-white font-bold" to="/formulario">Formulario</Link>
            <Link className="text-white font-bold" to="/tabla">Tabla</Link>
        </div>
    )
}

export default Navbar