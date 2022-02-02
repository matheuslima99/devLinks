import * as C from "./styles";
import { FiLink } from "react-icons/fi";

import { Menu } from "../../components/Menu";

export const Home = () => {
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
          />
        </div>
        <button>Encurtar link</button>
      </C.InputArea>
    </C.Container>
  );
};
