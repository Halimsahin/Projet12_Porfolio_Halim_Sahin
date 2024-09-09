import { useParams, Navigate } from "react-router-dom";
import DataProjet from "../annexes/projets.json";
import Carrousel from "./Carrousel";
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
