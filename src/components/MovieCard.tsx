import React from "react";
import Image from "next/image";

interface MovieCardProps {
  title: string;
  genre: string;
  thumbnail: string;
  releaseDate: string;
  rating: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  genre,
  thumbnail,
  releaseDate,
  rating,
}) => {
  return (
    <div className="movie-card bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
      {/* Use Next.js Image component */}
      <Image
        src={thumbnail}
        alt={`${title} poster`}
        width={500} // Adjust width
        height={200} // Adjust height
        className="rounded-t-lg"
      />
      <div className="p-3">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm text-gray-400">{genre}</p>
        <p className="text-sm text-gray-400">Release Date: {releaseDate}</p>
        <p className="text-sm text-gray-400">Rating: {rating}/10</p>
      </div>
    </div>
  );
};

export default MovieCard;

