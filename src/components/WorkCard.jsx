import OpenclassroomIcone from "../images/OpenclassroomIcone";
import { Link } from "react-router-dom";
import projets from "../annexes/projets.json";

const WorkCard = () => {
  return (
    <div className="work__card">
      {projets.map((projet) => {
        return (
          <div className="w-card" key={projet.id}>
            <article>
              <Link to={`/projet/${projet.id}`}>
                <OpenclassroomIcone />
                <div className="w-card__content">
                  <h3>{projet.littletitle}</h3>
                  <p>{projet.littledescription}</p>
                </div>
              </Link>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;
