import { useParams, Navigate } from "react-router-dom";
import DataProjet from "../annexes/projets.json";
import Carrousel from "./Carrousel";
import GithubIcone from "../images/GithubIcone";
import HtmlCssIcone from "../images/HtmlCssIcone";
import ReactIcone from "../images/ReactIcone";
const FicheProjet = () => {
  const { id } = useParams();

  const ficheProjet = DataProjet.find((projet) => projet.id === id);

  console.log(ficheProjet?.pictures);

  return (
    <>
      {ficheProjet ? (
        <div className="fiche__projet">
          <div className="fiche__content">
            <h1>{ficheProjet.title}</h1>
            <p>{ficheProjet.description}</p>
          </div>
          <div className="fiche__aside">
            <a href={ficheProjet.lienrepo} aria-label="Github" target="_blank">
              <GithubIcone />
            </a>
            <div className="fiche__technique">
              <HtmlCssIcone />
              <ReactIcone />
            </div>
          </div>
          <Carrousel slides={ficheProjet.pictures} />
        </div>
      ) : (
        <Navigate replace to="/Error" />
      )}
      ;
    </>
  );
};

export default FicheProjet;
