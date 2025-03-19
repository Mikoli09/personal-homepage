import { useDispatch } from "react-redux";
import { fetchRepositoriesRequest } from "../homepageSlice";
import { useEffect } from "react";

export const useFetchRepositories = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepositoriesRequest());
    }, []);
};