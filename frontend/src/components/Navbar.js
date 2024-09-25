import React from 'react';
import './Navbar.css';

import { Logo } from './Logo';

export const Navbar = ({ setSection }) => {
  return (

    <div className="sidebar">
      <Logo/>
      <a className="sidebar-brand" href="#" style={{color: 'white' }}>PharmaCommerce</a>
      <hr className="divider" />
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSection('Productos')}>
              <i className="fas fa-box icon"></i>
              <span className="link-text">Productos</span>
          </a>
        </li>
        <hr className="divider" />
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSection('Compras')}>
            <i className="fas fa-cart-shopping icon"></i>
            <span className="link-text">Compras</span>
          </a>
        </li>
        <hr className="divider" />
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSection('Clientes')}>
            <i className='fas fa-user icon'></i>
            <span className="link-text">Clientes</span>
          </a>
        </li>
        <hr className="divider" />
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSection('Empleados')}>
          <i className='fas fa-users icon'></i>
            <span className="link-text">Empleados</span>
          </a>
        </li>
        <hr className="divider" />
        <li className="sidebar-item">
          <a className="sidebar-link" href="#" onClick={() => setSection('Proveedores')}>
          <i className='fas fa-shop icon'></i>
            <span className="link-text">Proveedores</span>
          </a>
        </li>
        <hr className="divider" />
        <li className="sidebar-item">
          <a className="sidebar-link" href="#">
          <i className='fas fa-dollar-sign icon'></i>
            <span className="link-text">Ventas</span>
          </a>
        </li>
        <hr className="divider" />
        <li className="sidebar-item">
          <a className="sidebar-link" href="#">
          <i className='fas fa-phone icon'></i>
            <span className="link-text">Servicio al cliente</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
