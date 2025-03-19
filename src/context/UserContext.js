"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  const handleLogin = () => {
    console.log("Đăng nhập");

    const data = {
      id: 1,
      username: "Nguyễn Kim Hiến",
    };
    setUser(data);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return <UserContext.Provider value={{ user, setUser, handleLogout, handleLogin }}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
