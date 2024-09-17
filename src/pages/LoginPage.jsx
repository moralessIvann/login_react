import React, { useState } from "react";
import { useAuthContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const auth = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(username);
    // navigate('/'); // Redirige al home después del login
    if (username === 'admin') {
      navigate('/admin');
    } else if(username === '') {
      navigate('/login');
    } else {
      navigate('/user');
    }
  
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre de usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};