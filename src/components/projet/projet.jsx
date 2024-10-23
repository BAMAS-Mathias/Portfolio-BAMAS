import React, { Component } from "react";
import "./projet.css";

const Projet = ({ title, description, img, languageList, linksMap }) => {
  const LinkList = ({ links }) => {
    return (
      <ul className={"projet-links-list"}>
        {Object.entries(links).map(([linkName, iconAndLink]) => (
          <li>
            <Link
              linkName={linkName}
              icon={iconAndLink[0]}
              link={iconAndLink[1]}
            ></Link>
          </li>
        ))}
      </ul>
    );
  };

  const Link = ({ linkName, icon, link }) => (
    <div className={"link-container"}>
      <img src={icon} />
      <p>{linkName}</p>
      <a href={link}></a>
    </div>
  );

  const LanguageList = ({ languages }) => {
    return languages.map((lang) => <li>{lang}</li>);
  };

  return (
    <div className={"projet-container"}>
      <div className={"projets-infos"}>
        <h2>{title}</h2>
        <p className={"projet-description"}>{description}</p>
        <ul className={"language-list"}>
          <LanguageList languages={languageList} />
        </ul>
        {linksMap && <LinkList links={linksMap} />}
      </div>
      <img className={"projet-thumbnail"} src={img} />
    </div>
  );
};

export default Projet;
