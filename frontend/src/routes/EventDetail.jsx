import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

export default function EventDetail(){
  const { id } = useParams();
  const [event,setEvent] = useState(null);
  useEffect(()=>{
    axios.get(`/events`).then(res=>{
      const e = res.data.find(ev=>ev.id===id);
      setEvent(e);
    });
  },[id]);
  if(!event) return <p>Carregando...</p>;
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p><strong>Local:</strong> {event.city} / {event.state}</p>
      <h3 className="mt-3 font-semibold">Kits disponíveis</h3>
      <ul>
        {event.kits.map(k=><li key={k.id}>{k.name} - R$ {(k.priceCents/100).toFixed(2)}</li>)}
      </ul>
    </div>
  )
}
