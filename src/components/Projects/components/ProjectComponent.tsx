import { FaGithub } from "react-icons/fa";

interface Props {
  projectImg?: string;
  projectText: string;
  link: string;
  webLink: string;
}

const ProjectComponent: React.FC<Props> = ({
  projectImg,
  projectText,
  link,
  webLink,
}) => {
  return (
    <div className="project-component">
      <a href={webLink} target="blank">
        {projectImg && <div className="project-img-cover"></div>}
        {projectImg && <img src={projectImg} />}
        <div className="project-detail">
          <p>{projectText}</p>
        </div>
      </a>
      <a href={link} target="blank">
        <FaGithub className="project-github-icon" />
      </a>
    </div>
  );
};

export default ProjectComponent;
