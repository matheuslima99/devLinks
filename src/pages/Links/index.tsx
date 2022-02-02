import * as C from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";

export const Links = () => {
  return (
    <C.Container>
      <C.Area>
        <C.HeaderLinks>
          <Link to="/">
            <FiArrowLeft color="#fff" size={35} />
          </Link>

          <h1>Meus links</h1>
        </C.HeaderLinks>

        <C.ListItem>
          <button>
            <FiLink color="#fff" size={18} />
            https://sujeitoprogramador.com https://sujeitoprogramador.com
            https://sujeitoprogramador.com https://sujeitoprogramador.com
            https://sujeitoprogramador.com
          </button>

          <FiTrash color="#f00" size={25} />
        </C.ListItem>

        <C.ListItem>
          <button>
            <FiLink color="#fff" size={18} />
            https://sujeitoprogramador.com
          </button>
        </C.ListItem>
      </C.Area>
    </C.Container>
  );
};
