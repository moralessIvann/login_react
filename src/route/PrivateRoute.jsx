import React from 'react'
import { useAuthContext } from '../context/UserProvider';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children, role}) => {
    
    const auth = useAuthContext();

    if (auth.loading) {
        // Si no está autenticado, redirigir al login
        return <div>Loading...</div>;
    }

    if (!auth.user) {
      // Si no está autenticado, redirigir al login
      return <Navigate to="/login" />;
    }
  
    if (role && auth.user.role !== role) {
      // Si el rol no coincide, redirigir al home
      return <Navigate to="login" />;
    }
  
    return children;
}
