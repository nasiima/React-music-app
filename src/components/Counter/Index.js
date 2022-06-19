
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const CounterBtn = () => {
    const [counter, setCounter] = useState(0)

    const handleBtnClick = () => {
        setCounter(counter + 1)
    }

  
  return (
    <div>
        <div role="figure">count: {counter}</div>
    <button className='btn btn-success' onClick={() => handleBtnClick()}>
        add one
    </button>
    </div>



  )
}

export default CounterBtn;