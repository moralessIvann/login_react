import React from 'react'
import { useAuthContext } from '../context/UserProvider'
import { Navigate } from 'react-router-dom';

export const AdminPage = () => {

    const auth = useAuthContext();
    if(auth.user?.role !== 'admin'){
        return <Navigate to="/Login" />
    }

  return (
    <>
      <h1>AdminPage</h1>
      <button onClick={auth.logout}>Logout</button>
    </>
  )
}
