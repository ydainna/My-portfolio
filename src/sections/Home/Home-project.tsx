import { useTranslation } from "react-i18next";
import { project } from "@components/project/Config";
import ProjectCard from "@components/project/ProjectCard";

const HomeProject = () => {
  const { t } = useTranslation();

  return (
    <>
      {project.map((item) => (
        <ProjectCard
          key={item.id}
          title={t(`home.projects.${item.name}.title`)}
          description={t(`home.projects.${item.name}.description`)}
          picture={item.picture}
          isDisableWeb={item.isDisableWeb}
          isDisableGit={item.isDisableGit}
          webLink={item.webLink}
          gitLink={item.gitLink}
        />
      ))}
    </>
  );
};

export default HomeProject;
