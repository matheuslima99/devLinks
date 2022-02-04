import * as C from "./styles";
import { FiX, FiClipboard } from "react-icons/fi";

import { ILink } from "../../types/iLink";

type Props = {
  closeModal: () => void;
  data: ILink;
};

export const Modal = ({ closeModal, data }: Props) => {
  const copyLink = async () => {
    await navigator.clipboard.writeText(data.link);
    alert("URL Copiada com sucesso!");
  };

  return (
    <C.Container>
      <C.HeaderModal>
        <h2>Link encurtado:</h2>
        <button onClick={closeModal}>
          <FiX color="#000" size={25} />
        </button>
      </C.HeaderModal>
      <div>
        <span>{data.long_url}</span>
      </div>
      <C.ModalLink onClick={copyLink}>
        {data.link}
        <FiClipboard className="la" color="#fff" size={18} />
      </C.ModalLink>
    </C.Container>
  );
};
