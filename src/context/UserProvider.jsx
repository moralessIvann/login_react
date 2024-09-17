import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(null); // user tendrá los datos del usuario logueado
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        setLoading(false); // Once we check localStorage, stop loading
      }, []);

    const login = (username) => {
        /*
        if (username === "admin") {   
            setUser({ username, role: "admin" });
        } else {
            setUser({ username, role: "user" });
        }
        */
        // Simulamos un login simple
        const loggedUser = username === 'admin'
        ? { username, role: 'admin' }
        : { username, role: 'user' };

        // Guardamos el usuario en el estado y en localStorage
        setUser(loggedUser);
        localStorage.setItem('user', JSON.stringify(loggedUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Limpiar localStorage al cerrar sesión
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// hook personalizado para usar el contexto
export const useAuthContext = () => {
    return useContext(UserContext);
};
