import React, { FormEvent, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useHistory } from "react-router-dom";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import { Button } from "../components/Button";
// import { Container } from './styles';

import "../styles/auth.scss";
import { database } from "../services/firebease";

const NewRoom: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          {user && (
            <div className="user-info">
              <img src={user.avatar} alt="Avatar do usuário" />
              <span>{user.name}</span>
            </div>
          )}
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              onChange={(e) => setNewRoom(e.target.value)}
              placeholder="Nome da sala"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
