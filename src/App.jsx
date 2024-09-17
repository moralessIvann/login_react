import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserProvider } from "./context/UserProvider";
import { PrivateRoute } from "./route/PrivateRoute";
import { AdminPage, LoginPage, UserPage } from "./pages";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          {/* Ruta para el panel de administración (solo para admin) */}
          <Route path="/admin" element={ 
            <PrivateRoute role="admin">
              <AdminPage />
            </PrivateRoute>
            }
          />

          {/* Ruta para el área de usuario */}
          <Route
            path="/user"
            element={
              <PrivateRoute role="user">
                <UserPage />
              </PrivateRoute>
            }
          />

          {/* Página de inicio */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <h2>Inicio</h2>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;