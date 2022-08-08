import axios from "axios";

// Axios global
axios.defaults.headers.common['X-Auth-Token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

function GetRequest() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => showOutPut(res.data))
        .catch(err => console.log(err))
}

function showOutPut() {
    return (
        <div>
            <div>
                <h5>`${res.status}`</h5>
            </div>

            <div>
                <h5>`${JSON.stringify(res.headers, null, 2)}`</h5>
            </div>

            <div>
                <h5>`${JSON.stringify(res.data, null, 2)}`</h5>
            </div>
        </div>
    )
}