// import React, { useState, useRef } from 'react';
 
// export default function LockPage() {
//     const count = useRef([]);
//     const [number, setNumber] = useState(0);
 
//     const checkNumber = () => {
//     //     if (count.current.values(number)) {
//     //         count.current.style.backgroundColor = "red";
//     //     } else {
//     //         count.current.style.backgroundColor = "green";
//     //     }
//     // };
// //  {}
//     return (
//         <div>
//             {/* @ts-ignore */}
//             <h1>Enter a number greater than 10</h1>
//             <input
//               ref={count}
//               type="text"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//             />
//             <button onClick={() => checkNumber()}>Click</button>
//         </div>
//     );
// }