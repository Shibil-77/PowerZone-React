import React from 'react'

const AdminCard = ({children}) => {
    return (
        <div className={"bg-snow-drift-50 w-full shadow-md shadow-heavy-metal-400 rounded-md p-4 mb-5"}>
            {children}
        </div>
    )
}

export default AdminCard