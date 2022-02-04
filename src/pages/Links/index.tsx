import * as C from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { LinkItem } from "../../components/LinkItem";

import { ILink } from "../../types/iLink";

import { getLinksSave } from "../../services/storeLinks";

export const Links = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getLinks = async () => {
      const response = await getLinksSave("@savedlinks");

      setData(response);
    };

    getLinks();
  }, []);

  return (
    <C.Container>
      <C.Area>
        <C.HeaderLinks>
          <Link to="/">
            <FiArrowLeft color="#fff" size={35} />
          </Link>

          <h1>Meus links</h1>
        </C.HeaderLinks>

        <C.LinksArea>
          {data.map((links: ILink) => {
            return <LinkItem key={links.id} data={links} />;
          })}
        </C.LinksArea>
      </C.Area>
    </C.Container>
  );
};
