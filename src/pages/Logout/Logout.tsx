import * as React from 'react'

function Logout(props: { history: string[] }) {
    const handleLogout = () => {
        return (
            props.history.push('/')
        )
    }

    return (
        <div className='container-all-page '>
            <button onClick={handleLogout}>'خروج از حساب کاربری'
            </button>
        </div>
    )
}

export default Logout;
