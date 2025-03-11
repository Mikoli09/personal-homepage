import { PortfolioHeader, PortfolioList, PortfolioSection, Project } from "./styled";
import { ProjectItem } from "./ProjectItem";

export const Portfolio = ({ projects }) => (
    <PortfolioSection>
        <PortfolioHeader>
            Portfolio
        </PortfolioHeader>
        <PortfolioList>
            {projects.map((project) =>
                <ProjectItem projectProperties={project} />)
            }
        </PortfolioList>
    </PortfolioSection>
);