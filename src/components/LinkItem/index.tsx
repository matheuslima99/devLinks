import * as C from "./styles";
import { FiLink, FiTrash } from "react-icons/fi";

import { ILink } from "../../types/iLink";

type Props = {
  data: ILink;
  copyLink: () => void;
  linkDel: () => void;
};

export const LinkItem = ({ data, copyLink, linkDel }: Props) => {
  return (
    <C.Container>
      <button className="copy-button" onClick={copyLink}>
        <FiLink color="#fff" size={18} />
        {data.long_url}
      </button>
      <button className=" delete-button"
      
      onClick={linkDel}>
        <FiTrash color="#ff5454" size={23} />
      </button>
    </C.Container>
  );
};
