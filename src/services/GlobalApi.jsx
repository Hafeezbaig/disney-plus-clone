import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"; // Ensure you include the correct version path
const api_key = "bfa44af407790d3d5f265798eb4976cd";

// Function to get trending videos
const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

// Function to get movies by genre ID
const getMovieByGenreId = (id) => {
    const getMovieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;
    return axios.get(`${getMovieByGenreBaseURL}&with_genres=${id}`);
};

// Export the functions
export default {
    getTrendingVideos,
    getMovieByGenreId
};
