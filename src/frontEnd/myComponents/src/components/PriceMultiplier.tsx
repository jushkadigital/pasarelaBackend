import React, { useState } from 'react';
import "./PriceMultiplier.css"

interface Props {
name: string,
initialValue: string
}

const PriceMultiplier = ({ name, initialValue }:Props) => {
  const [price, setPrice] = useState<number>(parseFloat(initialValue) || 0);
  const [multiplier, setMultiplier] = useState(1);

  const handleMultiply = () => {
    setPrice((prevPrice) => (prevPrice) * (multiplier));
  };

  return (
    <div className="myComponent">
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        name={name}
      />
      <input
        type="number"
        placeholder="Multiplicador"
        onChange={(e) => setMultiplier(Number(e.target.value))}
      />
      <button type="button" onClick={handleMultiply}>
        Multiplicar
      </button>
    </div>
  );
};

export default PriceMultiplier;
