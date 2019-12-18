import React from 'react';


function Card (props)  {
    return (
      <div>
         <p>{ props.title }</p>
         <p> { props.userId } </p>
         <p>{ props.key } </p>
      </div>
    );
}

export default Card;
