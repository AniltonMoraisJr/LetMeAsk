import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleLogo from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";
// import { Container } from './styles';

import "../styles/auth.scss";
import useAuth from "../hooks/useAuth";
import { database } from "../services/firebease";

const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleEnterRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists");
    }

    history.push(`/rooms/${roomRef.key}`);
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas da Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Logo" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleLogo} alt="Google logo" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entra na sua sala</div>
          <form onSubmit={handleEnterRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
