import { PortfolioSection } from "../styled";
import { PortfolioList } from "../styled";
import { useSelector } from "react-redux";
import { selectLoading, selectRepositories, selectError } from "../../homepageSlice";
import { ProjectItem } from "../ProjectItem";


export const PortfolioContainer = () => {
    const repositories = useSelector(selectRepositories);


    return (
        < PortfolioSection >
            <PortfolioList>
                {repositories.map((project) =>
                    <ProjectItem projectProperties={project} />)
                }
            </PortfolioList>
        </PortfolioSection >
    )
};