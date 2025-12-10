import React, { createContext, useState } from 'react'

export const userProfileUpdate = createContext()
export const adminProfileUpdate = createContext()

function ContextShare({ children }) {
    const [updateProfileStatus, setUpdateProfileStatus] = useState({})
    const [adminProfileUpdateStatus, setAdminProfileUpdateStatus] = useState({})
    return (
        <userProfileUpdate.Provider value={{ updateProfileStatus, setUpdateProfileStatus }}>
            <adminProfileUpdate.Provider value={{ adminProfileUpdateStatus, setAdminProfileUpdateStatus }}>
                {children}
            </adminProfileUpdate.Provider>
        </userProfileUpdate.Provider>
    )
}

export default ContextShare