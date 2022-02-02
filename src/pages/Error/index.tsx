import * as C from "./styles";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <C.Container>
        <img src="/notfound.png" alt="aa" />
        <h1>Página não encontrada!</h1>
        <Link className="link-button" to="/">Voltar para home</Link>
     </C.Container>
  );
};
