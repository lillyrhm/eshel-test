import React,{useState} from 'react';

const UpdatedComponent = (OriginalComponent) => {
   
    // const incrementCount = () => {
    //     const [count, setCount] = useState(0);
    //     setCount((count) => {
    //         return count + 1;
    //     });
    // }

    const NewComponent = (incrementCount) => {
        return <OriginalComponent increment={incrementCount} />;
    }
    return NewComponent;
}

export default UpdatedComponent;