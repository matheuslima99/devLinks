import * as C from "./styles";
import { FiLink } from "react-icons/fi";

import { Menu } from "../../components/Menu";
import { Modal } from "../../components/Modal";
import { useState } from "react";

export const Home = () => {
  
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShortLink = () => {
    setShowModal(true);
  };

  return (
    <C.Container>
      <Menu />
      <C.LogoArea>
        <img src="/logo.png" alt="DevLinks" />
        <h1>DevLinks</h1>
        <span>Cole seu link para encurtar</span>
      </C.LogoArea>

      <C.InputArea>
        <div>
          <FiLink color="#fff" size={22} />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar link</button>
      </C.InputArea>

      {showModal && <Modal closeModal={() => setShowModal(false)} link={link} />}

    </C.Container>
  );
};
