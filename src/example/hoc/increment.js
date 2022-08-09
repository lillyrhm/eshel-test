import { Update } from '@material-ui/icons';
import React, { Component, useState } from 'react';
import UpdatedComponent from './withCounter';

function IncrementCount() {
    const [count, setCount] = useState(0);
    const [incrementCount, setIncrement] = useState('leila');
    const increment = () => {
        setCount((count) => {
            return count + 1;
        });
    }
    return (
        <>
            <button onClick={increment}>{incrementCount} click {count} time</button>
        </>
    );
}

export default UpdatedComponent(IncrementCount);
