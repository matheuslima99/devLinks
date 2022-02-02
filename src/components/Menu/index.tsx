import * as C from "./styles";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <C.Container>
      <div>
        <a href="https://www.linkedin.com/in/matheus-soares99/" target="_blank">
          <BsLinkedin color="#fff" size={20} />
        </a>
        <a href="https://www.instagram.com/math_s.99/" target="_blank" >
          <BsInstagram color="#fff" size={20} />
        </a>
      </div>
      <Link className="menu-links" to="/links">Meus links</Link>
    </C.Container>
  );
};
