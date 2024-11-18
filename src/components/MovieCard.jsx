import React from 'react';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[120px] h-[180px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[375px] 
        rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 
        transition-all duration-150 ease-in cursor-pointer"
        alt={movie.title || movie.name}
      />
    </div>
  );
};

export default MovieCard;
