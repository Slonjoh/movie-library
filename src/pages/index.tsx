import { fetchPopularMovies } from "@/utils/api";
import { useEffect, useState, useCallback } from "react";
import MovieCard from "@/components/MovieCard";
import Header from "@/components/Header";
import SkeletonLoader from "@/components/SkeletonLoader";

// Define types for the data
type Movie = {
  id: number;
  title: string;
  genre_ids: number[];
  poster_path: string;
  release_date: string;
  vote_average: number;
};

type InitialData = {
  results: Movie[];
};

export async function getServerSideProps() {
  // Fetch the initial set of movies
  const initialData = await fetchPopularMovies(1);
  return {
    props: { initialData },
  };
}

const HomePage = ({ initialData }: { initialData: InitialData }) => {
  const [movies, setMovies] = useState<Movie[]>(initialData.results);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to fetch the next page of movies
  const loadMoreMovies = useCallback(async () => {
    if (isLoading) return; // Prevent multiple fetch calls
    setIsLoading(true);
    const newMovies = await fetchPopularMovies(page + 1); // Fetch the next page
    setMovies((prev) => [...prev, ...newMovies.results]); // Append new movies
    setPage((prev) => prev + 1);
    setIsLoading(false);
  }, [isLoading, page]);

  // Scroll event listener to trigger infinite scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreMovies();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreMovies]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 pt-20">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre_ids.join(", ")} // Placeholder for genres
            thumbnail={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))}

        {/* Skeleton Loader */}
        {isLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
