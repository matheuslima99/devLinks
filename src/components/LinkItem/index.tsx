import * as C from "./styles";
import { FiLink, FiTrash } from "react-icons/fi";

import { ILink } from "../../types/iLink";

type Props = {
  data: ILink;
};

export const LinkItem = ({ data }: Props) => {
  return (
    <C.Container>
      <FiLink color="#fff" size={18} />
      <button className="copy-button">
        {data.long_url}
      </button>
      <button className=" delete-button">
        <FiTrash color="#ff5454" size={25} />
      </button>
    </C.Container>
  );
};
