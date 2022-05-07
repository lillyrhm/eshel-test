//component for search and filter books



// bookshelf.js
// export const books = [
//     {
//       name: "Eloquent JavaScript",
//       author: "Marijn Haverbeke",
//     },
//     {
//       name: "CSS The Definitive Guide",
//       author: "Eric A. Meyer & Estelle Weyl",
//     },
//     {
//       name: "Automate the boring stuff with Python",
//       author: "Al Sweigart",
//     },
//     {
//       name: "Make: JavaScript Robotics",
//       author: "Donovan Buck, Bryan Hughes et al",
//     },
//   ];

//////////////////////////////////////////////////
// import React from 'react';

// export default function Search ({val, onSearch, ...props}){
//     return (
//         <input
//         value={val} 
//         onClick={onSearch}
//         placeholder="search"
//         {...props}
//         />
//     );
// };

////////////////////////////////////////////
// books.js

// import React from "react";

// const Books = ({ books }) => {
//   return books.map((book, index) => {
//     return (
//       <ul key={index}>
//         <li>Book: {book.name}</li>
//         <li>Author: {book.author}</li>
//       </ul>
//     );
//   });
// };
// export default Books;

//////////////////////////////////////////////
// const App = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const handleInputChange = (e) => {
//       setSearchTerm(e.target.value);
//     };
//     // performs a filtering on the questions
//     // based on the user's input and returns a new array
//     // which gets rendered to the DOM.
  
//     const filteredBooks = books.filter((book) => {
//       return book.name.includes(searchTerm);
//     });
//     return (
//       <section>
//         <Search name="search" onSearch={handleInputChange} val={searchTerm} />
//         <Books books={filteredBooks} />
//       </section>
//     );
//   };
//   export default App;