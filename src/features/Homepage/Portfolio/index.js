import { PortfolioList, PortfolioSection, Project } from "./styled";
import { ProjectItem } from "./ProjectItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositoriesRequest } from "../homepageSlice";
import { selectLoading, selectError } from "../homepageSlice";
import { Loading } from "./Loading";
import { PortfolioContainer } from "./Portfolio";
import { LoadingError } from "./LoadingError";


export const Portfolio = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchRepositoriesRequest());
    }, []);

    return (
        loading ? <Loading /> : (error ? <LoadingError /> : <PortfolioContainer />)
    )
};