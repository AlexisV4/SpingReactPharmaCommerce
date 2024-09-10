import React, { useState } from 'react';
import './components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Productos from './components/Productos/Productos'; // Importa las secciones como componentes
import Compras from './components/Compras/Compras'; // Importa las secciones como componentes
import { Clientes } from './components/Clientes/Clientes';
import { CrearProducto } from './components/Productos/CrearProducto';
import { CrearCompra } from './components/Compras/CrearCompra';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [section, setSection] = useState('Productos'); // Sección inicial

  const renderSection = () => {
    switch (section) {
      case 'Productos':
        return <Productos setSection={setSection}/>;
      case 'Compras':
        return <Compras setSection={setSection}/>;
      case 'Clientes':
        return <Clientes setSection={setSection}/>;
      case 'CrearProducto':
        return <CrearProducto setSection={setSection}/>;
      case 'CrearCompra':
          return <CrearCompra setSection={setSection}/>;
      default:
        return <Productos setSection={setSection}/>;
    }
  };

  return (
    <div className="App">
      <div className="top-bar"></div>
      <Navbar setSection={setSection} /> {/* Pasa la función setSection al Navbar */}
      <div className="main-content container">
        {renderSection()} {/* Renderiza la sección seleccionada */}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
