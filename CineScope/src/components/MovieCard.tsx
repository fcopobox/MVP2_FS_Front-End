import { Link } from "@tanstack/react-router";
import type { Movie } from "@/lib/movies-api";
import { Button } from "./Button";

// Componente de card para exibir informações básicas de um filme, como pôster, título, ano e gênero,
// com um botão para acessar detalhes do filme usando Link do React Router

type Props = { movie: Movie };

export function MovieCard({ movie }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-primary/40">
      <div className="aspect-[2/3] overflow-hidden bg-muted">
        <img
          src={movie.poster}
          alt={`Pôster do filme ${movie.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold text-foreground">{movie.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{movie.year}</span>
        </div>
        <span className="inline-block w-fit rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
          {movie.genre}
        </span>
        <Link to="/movies/$id" params={{ id: movie.id }} className="mt-2">
          <Button size="sm" className="w-full">Ver detalhes...</Button>
        </Link>
      </div>
    </article>
  );
}
