import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { SearchBar } from "@/components/SearchBar";
import { MovieCard } from "@/components/MovieCard";
import { Loader } from "@/components/Loader";
import { fetchMovies, type Movie } from "@/lib/movies-api";

// Rota para exibir a página de listagem de filmes, com validação dos parâmetros de busca usando Zod,
// e renderizando a lista de filmes ou mensagens de erro/estado vazio conforme o resultado da busca

const searchSchema = z.object({ 
  q: z.string().optional(),
  genre: z.string().optional() 
});

// Esquema de validação para os parâmetros de busca, garantindo que sejam strings opcionais
export const Route = createFileRoute("/movies/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "CineScope — Filmes" },
      { name: "description", content: "Navegue pelo catálogo completo de filmes do CineScope." },
      { property: "og:title", content: "Filmes — CineScope" },
      { property: "og:description", content: "Navegue pelo catálogo completo de filmes do CineScope." },
    ],
  }),
  component: MoviesPage,
});

// Componente para exibir a página de listagem de filmes
function MoviesPage() {
  const { q, genre } = Route.useSearch();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [error, setError] = useState(false);
// Efeito para buscar filmes sempre que os parâmetros de busca mudarem
  useEffect(() => {
    let active = true;
    setMovies(null);
    setError(false);
    fetchMovies({ q, genre })
      .then((data) => active && setMovies(data))
      .catch(() => active && setError(true));
    return () => { active = false; };
  }, [q, genre]);

  // Função para lidar com a busca de filmes a partir do SearchBar
function handleSearch(query: string, genre?: string) {
  const search: any = {};

  if (query.trim()) search.q = query.trim();
  if (genre && genre !== "all") search.genre = genre;

  navigate({ to: "/movies", search });
}

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">Catálogo de filmes</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {q ? <>Resultados para <span className="text-foreground font-medium">"{q}"</span></> : "Explore todos os filmes disponíveis."}
          </p>
        </div>
        <SearchBar
          initialValue={q ?? ""}
          initialGenre={genre ?? "all"}   
          onSearch={handleSearch}
        />
      </div>

      {error ? (
        <EmptyState
          title="Erro ao carregar dados"
          message="Não foi possível carregar os filmes. Tente novamente em instantes."
        />
      ) : !movies ? (
        <Loader />
      ) : movies.length === 0 ? (
        <EmptyState
          title="Nenhum filme encontrado"
          message="Tente buscar por outro título, gênero ou limpe a busca."
        />
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 animate-fade-in"> 
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

// Componente para exibir estados vazios, como erros ou ausência de resultados
function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card/40 py-20 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
