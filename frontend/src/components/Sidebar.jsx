import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(){
  return (
    <div className="w-64 bg-gray-100 h-full p-5">
      <h2 className="text-xl font-bold mb-5">Menu</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard">Dashboard</Link></li>
        <li className="mb-2"><Link to="/dashboard/events">Eventos</Link></li>
        <li className="mb-2"><Link to="/dashboard/kits">Kits</Link></li>
        <li className="mb-2"><Link to="/dashboard/orders">Vendas</Link></li>
      </ul>
    </div>
  )
}
