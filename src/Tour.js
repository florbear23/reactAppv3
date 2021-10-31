import React, { useState } from 'react';
import Tours from './Tours';

const Tour = ({id,image,info,price,name, removeTour}) => {
  const [readMore,setReadMore] = useState(false)
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">₱{price}</h4>
      </div>
      <p>{readMore ? info :`${info.substring(0, 200)}...` }</p>
      <button onClick={() =>setReadMore(!readMore) }  >
        {readMore?'Showless':'Readmore'}
      </button>
      <button className="delete-btn" onClick={() => removeTour(id)}> Ayoko Dito</button>
    </footer>
  </article>;
};

export default Tour;


