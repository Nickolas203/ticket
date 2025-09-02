import React, { useEffect, useState } from 'react';
import axios from '../services/api';

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/events').then(res => setEvents(res.data));
  }, []);

  return (
    <div className="p-5 bg-gray-50">
      <h1 className="text-2xl font-bold mb-5">Eventos Recomendados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
            {event.imageUrl && (
              <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-3">
              <span className="text-green-600 text-sm font-semibold mb-1 inline-block">Inscrições abertas</span>
              <h2 className="font-bold text-lg mb-1 truncate">{event.title}</h2>
              <div className="text-gray-600 text-sm mb-1">
                <p>{event.organizer?.name || 'Organizador'}</p>
                <p>{new Date(event.startAt).toLocaleDateString('pt-BR')}</p>
                <p>{event.city}, {event.state}</p>
              </div>
              <button className="mt-2 w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
