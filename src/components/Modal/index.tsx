import * as C from "./styles";
import { FiX, FiClipboard } from "react-icons/fi";

type Props = {
  closeModal: () => void,
  link: string
}

export const Modal = ({ closeModal, link }: Props) => {
  return (
    <C.Container>
      <C.HeaderModal>
        <h2>Link encurtado:</h2>
        <button
          onClick={closeModal}
        >
          <FiX color="#000" size={25} />
        </button>
      </C.HeaderModal>
      <div>
        <span>{link}</span>
      </div>
      <C.ModalLink>
        https://bit.ly/3mJxeUq
        <FiClipboard className="la" color="#fff" size={18} />
      </C.ModalLink>
    </C.Container>
  );
};
