import { PortfolioHeader, PortfolioList, PortfolioSection, Project } from "./styled";
import { ProjectItem } from "./ProjectItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositoriesRequest } from "../homepageSlice";
import { selectLoading, selectRepositories } from "../homepageSlice";
import { Loading } from "./Loading";


export const Portfolio = ({ projects }) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositoriesRequest());
    }, []);


    return (
        (loading) ?
            (
                <Loading />

            ) : (
                < PortfolioSection >
                    <PortfolioHeader>
                        Portfolio
                    </PortfolioHeader>
                    <PortfolioList>
                        {repositories.map((project) =>
                            <ProjectItem projectProperties={project} />)
                        }
                    </PortfolioList>
                </PortfolioSection >
            )
    )

};