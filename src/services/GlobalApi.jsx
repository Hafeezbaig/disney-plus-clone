import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"; // Ensure you include the correct version path
const api_key = "bfa44af407790d3d5f265798eb4976cd";

// Function to get trending videos
const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

export default {
    getTrendingVideos
};
