import GithubIcone from "../images/GithubIcone";
import LinkedinIcone from "../images/LinkedinIcone";
import TwitterIcone from "../images/TwitterIcone";
const Social = () => {
  return (
    <div className="social__container">
      <a href="https://github.com/Halimsahin?tab=repositories" target="_blank">
        <GithubIcone />
      </a>
      <a
        href="https://www.linkedin.com/in/halim-sahin-6075271b6/"
        target="_blank"
      >
        <LinkedinIcone />
      </a>
      <a href="#" target="_blank">
        <TwitterIcone />
      </a>
    </div>
  );
};

export default Social;
