export type Movie = {
  id: string;
  title: string;
  year: number;
  genre: string;
  poster: string;
  description: string;
  director: string;
  actors: string[];
  country: string;
};

import data from "@/data/movies.json";

const movies = data as Movie[];

// Simula uma API com pequeno delay
function delay<T>(value: T, ms = 600): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function fetchMovies(query?: string): Promise<Movie[]> {
  const result = query
    ? movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    : movies;
  return delay(result);
}

export async function fetchMovie(id: string): Promise<Movie | null> {
  const movie = movies.find((m) => m.id === id) ?? null;
  return delay(movie, 400);
}
