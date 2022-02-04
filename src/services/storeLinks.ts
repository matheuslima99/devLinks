import { ILink } from "../types/iLink";

export const getLinksSave = (key: string) => {
  const myLinks: any = localStorage.getItem(key);
  const linksSaves = JSON.parse(myLinks) || [];
  return linksSaves;
};

export const saveLink = (key: string, newlink: ILink) => {
  let linksStored = getLinksSave(key);

  const hasLink = linksStored.some((link: ILink) => link.id === newlink.id);

  if (hasLink) {
    return;
  }

  linksStored.push(newlink);
  localStorage.setItem(key, JSON.stringify(linksStored));
};
