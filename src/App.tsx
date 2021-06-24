import React from "react";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
