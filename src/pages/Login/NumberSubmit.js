import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

function NumberSubmit({ authorized }) {
    if (!authorized) {
        return <Redirect to='/logout' />;
    }
    return (
        <div>
            <label for="codeNumber">کد تایید:</label><br />
            <input type="text" id='codeNumber' placeholder="کد تایید" />
        </div>
    )
}

export default NumberSubmit;
