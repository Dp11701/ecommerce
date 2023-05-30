import React, { useState } from 'react';

function Component(props) {
    const [count, setCount] = useState(0);
    const increment = () =>{
      setCount(a=>a+1);
    }
    return (
       
            <div className="product-like">
              <label>{count}</label> <br />
              <i className="fa fa-heart" onClick={increment}></i>
            </div>
    );
}

export default Component;