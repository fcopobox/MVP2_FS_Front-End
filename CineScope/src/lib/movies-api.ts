// Módulo para simular uma API de filmes, fornecendo funções para buscar filmes com base 
// em parâmetros de pesquisa e obter detalhes de um filme específico, utilizando um pequeno
// delay para simular a latência da rede

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
function delay<T>(value: T, ms = 500): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function fetchMovies(params?: { q?: string; genre?: string }): Promise<Movie[]> {
  const { q, genre } = params || {};
  let result = movies;

  // Filtro por título
  if (q && q.trim() !== "") {
    result = result.filter((m) =>
      m.title.toLowerCase().includes(q.toLowerCase())
    );
  }

  // Filtro por gênero
  if (genre && genre !== "all") {
    result = result.filter((m) => m.genre.toLowerCase() === genre.toLowerCase());
  }

  return delay(result);
}

export async function fetchMovie(id: string): Promise<Movie | null> {
  const movie = movies.find((m) => m.id === id) ?? null;
  return delay(movie, 500);
}
