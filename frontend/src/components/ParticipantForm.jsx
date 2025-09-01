    import React, { useState } from 'react';

export default function ParticipantForm({ onChange }) {
  const [participants, setParticipants] = useState([{ name:'', cpf:'', kitId:'', shirtSize:'' }]);

  const handleChange = (index, field, value) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
    onChange(updated);
  }

  const addParticipant = () => {
    setParticipants([...participants, { name:'', cpf:'', kitId:'', shirtSize:'' }]);
  }

  return (
    <div>
      {participants.map((p,index)=>(
        <div key={index} className="border p-2 mb-2">
          <input placeholder="Nome" className="border p-1 mr-2" value={p.name} onChange={e=>handleChange(index,'name',e.target.value)} />
          <input placeholder="CPF" className="border p-1" value={p.cpf} onChange={e=>handleChange(index,'cpf',e.target.value)} />
        </div>
      ))}
      <button onClick={addParticipant} className="bg-green-500 text-white p-1 rounded mt-2">Adicionar Participante</button>
    </div>
  )
}
