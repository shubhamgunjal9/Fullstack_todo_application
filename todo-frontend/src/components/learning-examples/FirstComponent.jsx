import React from 'react';

function MyFirstComponenet(props) {

    return (
      <div className='first-component'>
        <h1>this is my first component { props.data} here it is {props.value}</h1>
      </div>
    )
}

export default MyFirstComponenet;
