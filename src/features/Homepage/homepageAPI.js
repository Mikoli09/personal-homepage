import axios from "axios";

const username = "Mikoli09";
const gitHubAPI = "https://api.github.com/users"

export const getUserRepositories = async () => {
    const response = await axios.get(`${gitHubAPI}/${username}/repos`);
    console.log(response.data);
    return response.data;
};