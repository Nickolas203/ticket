import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard(){
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold">Dashboard do Organizador</h1>
        <p>Aqui você poderá gerenciar eventos, kits e vendas.</p>
      </div>
    </div>
  )
}
