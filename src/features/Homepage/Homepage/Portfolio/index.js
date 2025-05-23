import { useSelector } from "react-redux";
import { selectStatus } from "../../homepageSlice";
import { Loading } from "./Loading";
import { PortfolioContainer } from "./PortfolioContainer";
import { LoadingError } from "./LoadingError";
import { useFetchRepositories } from "./useFetchRepositories";

export const Portfolio = () => {
    useFetchRepositories();
    const status = useSelector(selectStatus);

    switch (status) {
        case "LOADING":
            return <Loading />;
        case "ERROR":
            return <LoadingError />;
        case "SUCCESS":
            return <PortfolioContainer />;
    }
};