import { FaGithub } from "react-icons/fa";

interface Props {
  projectImg?: string;
  projectText?: string;
}

const ProjectComponent: React.FC<Props> = ({ projectImg, projectText }) => {
  return (
    <div className="project-component">
      <div className="project-img-cover"></div>
      <img src={projectImg} />
      <div className="project-detail">
        <p>{projectText}</p>
      </div>
      <FaGithub className="project-github-icon" />
    </div>
  );
};

export default ProjectComponent;
