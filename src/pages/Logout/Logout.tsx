import React from 'react'

function Logout(props: { history: string[] }) {
    const handleLogout = () => {
        return (
            props.history.push('/')
            )
    }

    return (
       
<button onClick={handleLogout}>'خروج از حساب کاربری'
</button>

    )
}

export default Logout;
