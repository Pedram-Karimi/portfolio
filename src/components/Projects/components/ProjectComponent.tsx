import { FaGithub } from "react-icons/fa";

interface Props {
  projectImg?: string;
  projectText?: string;
  link?: string;
}

const ProjectComponent: React.FC<Props> = ({
  projectImg,
  projectText,
  link,
}) => {
  return (
    <div className="project-component">
      <div className="project-img-cover"></div>
      <img src={projectImg} />
      <div className="project-detail">
        <p>{projectText}</p>
      </div>
      <FaGithub className="project-github-icon" href={link} />
    </div>
  );
};

export default ProjectComponent;
