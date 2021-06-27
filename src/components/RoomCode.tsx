import React from "react";
import toast from "react-hot-toast";
import copyImg from "../assets/images/copy.svg";
// import { Container } from './styles';

import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
    toast.success("Código copiado", {
      position: "top-center",
    });
  }
  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>Sala {code}</span>
    </button>
  );
};

export default RoomCode;
