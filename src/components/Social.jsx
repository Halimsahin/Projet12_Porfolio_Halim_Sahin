import GithubIcone from "../images/GithubIcone";
import LinkedinIcone from "../images/LinkedinIcone";
const Social = () => {
  return (
    <div className="social__container">
      <a
        href="https://github.com/Halimsahin?tab=repositories"
        aria-label="Github"
        target="_blank"
      >
        <GithubIcone />
      </a>
      <a
        href="https://www.linkedin.com/in/halim-sahin-6075271b6/"
        aria-label="Linkedin"
        target="_blank"
      >
        <LinkedinIcone />
      </a>
    </div>
  );
};

export default Social;
