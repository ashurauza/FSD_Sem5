
import React, { useState } from 'react'

function StateHandling() {
    const [count,setCount] = useState(20);

    function increasedValue(){
        setCount(count + 10);
    }
    return(
        <div> StateHandling
            <h2>Counter Value: {count}</h2>
            <button onClick={increasedValue}>Increment</button>
            <button onClick={
()=> setCount(count - 10)
            } value={count}>{count}</button>

        </div>
    )
}

export default StateHandling;
 