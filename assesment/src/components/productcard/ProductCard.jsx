/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

export default function ProductCard({ data }) {
  const [time, setTime] = useState(parseInt((Math.random() * 24), 10) * 6);
  let disabled = false;

  if (time > 0) {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  } else {
    disabled = true;
  }
  const segundos = time % 60;
  const minutos = (time - segundos) / 60;

  return (
    <div className="card">
      <img src={data.image} alt="Imagen" />

      <div>{data.title}</div>
      <div className="foot">
        <label htmlFor="button">{ `00:${(minutos < 10) ? ('0') : ''}${minutos}:${(segundos < 10) ? ('0') : ''}${segundos}`}</label>
        {(time > 0) && (<Link className="button" to={`/details/${data.id}`} disabled={disabled}>Go to details</Link>)}
        {(time === 0) && (<button className="buttondisable" to={`/details/${data.id}`} disabled={disabled}>Go to details</button>)}
      </div>

    </div>
  );
}
