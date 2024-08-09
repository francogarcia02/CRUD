import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {TableProvider} from './context/TableContext'

function App() {
  return (
    <div className="App">
        <TableProvider>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/formulario" element={<Form/>}/>
                <Route path="/tabla" element={<Table/>}/>
            </Routes>
        </BrowserRouter>
        </TableProvider>
    </div>
  );
}

export default App;