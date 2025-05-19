import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Info from "./components/info/Info";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const handleLoginSuccess = (loggedInUser: any) => {
    localStorage.setItem("user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  };

  const isLoggedIn = !!user;

  return (
    <>
      <Navbar
        user={user}
        onLogout={() => {
          localStorage.removeItem("user");
          setUser(null);
        }}
        onLoginSuccess={handleLoginSuccess}
      />

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </>
  );
}
