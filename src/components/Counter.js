import React, {useState} from 'react';

// Counter that counts incremently or decremently by 1 +- over the base amount of item.

const Counter = () => {

    const [counter_value, setCounterValue] = useState(1);

    // Decrement
    const decrement = () => {
        setCounterValue(counter_value-1)
    }

    // Increment
    const increment = () => {
        setCounterValue(counter_value+1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <input type="text" value={counter_value}></input>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;