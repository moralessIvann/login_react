import React from 'react'
import { useAuthContext } from '../context/UserProvider'

export const UserPage = () => {

    const auth = useAuthContext();
  
    return (
    <>
      <h1>UserPage</h1>
      <button onClick={auth.logout}>Logout</button>
    </>
  )
}
