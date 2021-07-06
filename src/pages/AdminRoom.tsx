import React from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import Question from "../components/Question";
import RoomCode from "../components/RoomCode";
// import useAuth from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";
// import { Container } from './styles';

import "../styles/rooms.scss";

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const { id: roomId } = useParams<RoomParams>();
  // const { user } = useAuth();
  const { questions, title } = useRoom(roomId);
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logo} alt="Logo LetmeAsk" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutline>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
