import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { MovieCard } from "@/components/MovieCard";
import { Loader } from "@/components/Loader";
import { Button } from "@/components/Button";
import { fetchMovies, type Movie } from "@/lib/movies-api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CineScope — Home" },
      { name: "description", content: "Explore um catálogo curado de filmes no CineScope. Busque, descubra e mergulhe em sinopses." },
      { property: "og:title", content: "CineScope — Descubra novos filmes" },
      { property: "og:description", content: "Explore um catálogo curado de filmes no CineScope." },
    ],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [popular, setPopular] = useState<Movie[] | null>(null);

  useEffect(() => {
    let active = true;
    fetchMovies().then((m) => active && setPopular(m.slice(0, 8)));
    return () => { active = false; };
  }, []);

  function handleSearch(query: string) {
    navigate({ to: "/movies", search: query ? { q: query } : {} });
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,oklch(0.65_0.27_15)_0,transparent_40%),radial-gradient(circle_at_80%_70%,oklch(0.65_0.25_290)_0,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Sua nova forma de descobrir cinema
            </span>
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Cine<span className="text-gradient-primary">Scope</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Pesquise, explore e mergulhe em um catálogo de filmes com uma experiência moderna,
              rápida e inspirada nas melhores plataformas de streaming.
            </p>
            <div className="mt-10 flex justify-center">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Filmes populares</h2>
            <p className="mt-1 text-sm text-muted-foreground">Uma seleção do que está em alta no catálogo.</p>
          </div>
          <Link to="/movies">
            <Button variant="ghost" size="sm">Ver todos</Button>
          </Link>
        </div>

        {!popular ? (
          <Loader label="Carregando filmes populares..." />
        ) : (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {popular.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
