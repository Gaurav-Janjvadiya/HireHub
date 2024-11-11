import { Outlet } from "react-router-dom";
import { Header } from "./components";
import AuthContextProvider from "./context/AuthContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContextProvider value={{ user, setUser }}>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
