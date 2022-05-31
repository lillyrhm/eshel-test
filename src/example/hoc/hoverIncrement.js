import React, { Component, useState } from 'react';
import UpdatedComponent from './withCounter';

function HoverCount() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('leila');
    const increment = () => {
        setCount((count) => {
            return count + 1;
        });
    }
    return (
        <>
            <h3 onMouseOver={increment}>{name} hover {count} time</h3>
        </>
    );
}

export default UpdatedComponent(HoverCount);