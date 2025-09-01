import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import EventCard from '../components/EventCard';

export default function Home(){
  const [events,setEvents] = useState([]);
  useEffect(()=>{
    axios.get('/events').then(res=>setEvents(res.data));
  },[]);
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map(e=><EventCard key={e.id} event={e} />)}
    </div>
  )
}
