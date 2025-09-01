import React from 'react';
import { Link } from 'react-router-dom';

export default function EventCard({ event }){
  return (
    <div className="border rounded p-3 shadow hover:shadow-lg transition">
      {event.imageUrl && <img src={event.imageUrl} alt="evento" className="w-full h-40 object-cover rounded" />}
      <h2 className="text-xl font-bold mt-2">{event.title}</h2>
      <p>{event.city} / {event.state}</p>
      <Link to={`/event/${event.id}`} className="text-blue-500">Detalhes</Link>
    </div>
  )
}
