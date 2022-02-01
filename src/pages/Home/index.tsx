import * as C from "./styles";
import { FiLink } from "react-icons/fi";

export const Home = () => {
  return (
    <C.Container>
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
