import { createFileRoute, useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Loader } from "@/components/Loader";
import { Button } from "@/components/Button";
import { fetchMovie, type Movie } from "@/lib/movies-api";

export const Route = createFileRoute("/movies/$id")({
  head: () => ({
    meta: [
      { title: "Detalhes do filme — CineScope" },
      { name: "description", content: "Veja sinopse, ano e gênero do filme selecionado no CineScope." },
    ],
  }),
  component: MovieDetail,
});

function MovieDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState<Movie | null | undefined>(undefined);

  useEffect(() => {
    let active = true;
    setMovie(undefined);
    fetchMovie(id).then((m) => active && setMovie(m));
    return () => { active = false; };
  }, [id]);

  function goBack() {
    // Volta na história se possível; senão, vai para /movies
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    } else {
      navigate({ to: "/movies" });
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Button variant="ghost" size="sm" onClick={goBack} className="mb-8" aria-label="Voltar">
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </Button>

      {movie === undefined ? (
        <Loader label="Carregando filme..." />
      ) : movie === null ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/40 py-20 text-center">
          <h2 className="text-xl font-semibold">Filme não encontrado</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            O filme solicitado em <span className="font-mono">{location.pathname}</span> não existe no catálogo.
          </p>
        </div>
      ) : (
        <article className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-14 animate-fade-in">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img
              src={movie.poster}
              alt={`Pôster do filme ${movie.title}`}
              className="aspect-[2/3] w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {movie.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {movie.year}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm text-accent">
                <Tag className="h-3.5 w-3.5" /> {movie.genre}
              </span>
            </div>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Sinopse
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">
              {movie.description}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}
