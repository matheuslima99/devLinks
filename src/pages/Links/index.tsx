import * as C from "./styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { LinkItem } from "../../components/LinkItem";

import { ILink } from "../../types/iLink";

import { getLinksSave, deleteLink } from "../../services/storeLinks";

export const Links = () => {
  const [data, setData] = useState<any>([]);
  const [haveLink, setHaveLink] = useState(true);

  const copyLink = async (link: string) => {
    await navigator.clipboard.writeText(link);
    alert("URL copiada com sucesso!");
  };

  const handleDelete = (links: ILink) => {
    let result = deleteLink(data, links);

    if (result.length === 0) {
      setHaveLink(false);
    }

    setData(result);
  };

  useEffect(() => {
    const getLinks = async () => {
      const response = await getLinksSave("@savedlinks");

      if (response.length === 0) {
        setHaveLink(false);
      }

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

        {haveLink ? (
          <C.LinksArea>
            {data.map((links: ILink) => {
              return (
                <LinkItem
                  key={links.id}
                  data={links}
                  copyLink={() => copyLink(links.link)}
                  linkDel={() => handleDelete(links)}
                />
              );
            })}
          </C.LinksArea>
        ) : (
          <C.NoLinksContainer>
            <h3>Sua lista está vazia...</h3>
          </C.NoLinksContainer>
        )}
      </C.Area>
    </C.Container>
  );
};
