import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ProductCard.scss';

export default function ProductCard({ data }) {
  const [time, setTime] = useState(parseInt((Math.random() * 24), 10) * 6);
  let disabled = false;
  let segundos = 0;
  let minutos = 0;

  if (time > 0) {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  } else {
    disabled = true;
  }
  segundos = time % 60;
  minutos = (time - segundos) / 60;

  return (
    <div className="card">
      <img src={data.image} alt="Imagen" />

      <div>{data.title}</div>
      <div className="foot">
        <label htmlFor="button">{ `00:${(minutos < 10) ? ('0') : ''}${minutos}:${(segundos < 10) ? ('0') : ''}${segundos}`}</label>
        {(time > 0) && (<Link className="button" to={`/details/${data.id}`} disabled={disabled}>Go to details</Link>)}
        {(time === 0) && (<button type="button" className="buttondisable" to={`/details/${data.id}`} disabled={disabled}>Go to details</button>)}
      </div>

    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
