import React, { useState } from 'react';

export default function KitSelector({ kits, onSelect }) {
  const [selected, setSelected] = useState({});
  const handleChange = (kitId, value) => {
    setSelected({...selected, [kitId]: value});
    onSelect({...selected, [kitId]: value});
  };
  return (
    <div>
      {kits.map(kit=>(
        <div key={kit.id} className="border p-2 mb-2">
          <h3 className="font-bold">{kit.name} - R$ {(kit.priceCents/100).toFixed(2)}</h3>
          <label>Tamanho da camisa:</label>
          <select className="border ml-2" onChange={e=>handleChange(kit.id,e.target.value)}>
            {kit.shirtOptions.map(opt=><option key={opt.id} value={opt.size}>{opt.size}</option>)}
          </select>
        </div>
      ))}
    </div>
  )
}
