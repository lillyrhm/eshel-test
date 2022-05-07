// import { react, useState, useEffect } from "react";
// // import useFetch from "react-fetch-hook";



// const useFetch = (url) => {
//     const [dataList, setDataList] = useState([]);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState([]);

//     const callApi=async()=>{
//         fetch(url)
//         .then(response => response.json())
    
//         .then(response => {
//             if (!response.ok) {
//                 throw Error('the Error massage for fetch dose not work');
//             }
//             return response.json();
//         })
//         .then(dataList => {
//             setDataList(dataList);
//             setIsPending(false);
//             setError(null);
//         })
//         .catch(error => {
//             setIsPending(false);
//             setError(error.massage);
//         })
//     }

//     useEffect(() => {
//         callApi()
//     }, [url]);

//     return (
//         <div>
//             {dataList, isPending, error}
//         </div>
//     );
// }

// export default useFetch;




  // const callApi = async () => {
  //   fetch('http://localhost:3000/data/bb.json')
  //     .then(response => response.json())
  //     // .then(json => console.log(json))
  //     // }
  //     .then(data => {
  //       setButtonList(data)
  //     });
  // }

  // useEffect(() => {
  //   callApi()
  // }, []);