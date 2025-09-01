import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('/auth/login',{ email, password });
      login(res.data.token);
      navigate('/dashboard');
    }catch(err){
      alert('Erro no login');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-3" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" className="border p-2 w-full mb-3" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Entrar</button>
      </form>
    </div>
  )
}
