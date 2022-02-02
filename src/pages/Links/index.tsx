import * as C from "./styles";
import { useState } from "react";
import { FiArrowLeft, FiLink } from "react-icons/fi";

export const Links = () => {
  return (
    <C.Container>
      <C.Area>
        <C.HeaderLinks>
          <FiArrowLeft color="#fff" size={35} />
          <h1>Meus links</h1>
        </C.HeaderLinks>

        <C.ListItem>
          <button>
            <FiLink color="#fff" size={18} />
            https://sujeitoprogramador.com
          </button>
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
