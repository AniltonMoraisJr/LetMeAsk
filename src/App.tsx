import React from "react";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";
import Room from "./pages/Room";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthContextProvider>
      <Toaster />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
