import * as C from "./styles";
import { useState } from "react";
import { FiLink } from "react-icons/fi";

import { Menu } from "../../components/Menu";
import { Modal } from "../../components/Modal";

import { ILink } from "../../types/iLink";

import { api } from "../../services/api";
import { saveLink } from "../../services/storeLinks";

export const Home = () => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>({});

  const handleShortLink = async () => {
    if (link.trim() === "") {
      alert("Por favor, coloque a sua URL");
      return;
    }

    try {
      const response = await api.post<ILink>("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      setLink("");

      saveLink("@savedlinks", response.data);
    } catch {
      alert("Ops, parece que algo deu errado...");
      setLink("");
    }
  };

  return (
    <C.Container>
      <Menu />
      <C.LogoArea>
        <img src="/logo.png" alt="DevLinks" />
        <h1>DevLinks</h1>
      </C.LogoArea>

      {!showModal ? (
        <C.InputArea>
          <span>Cole seu link para encurtar 👇</span>
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
      ) : (
        <Modal closeModal={() => setShowModal(false)} data={data} />
      )}
    </C.Container>
  );
};
