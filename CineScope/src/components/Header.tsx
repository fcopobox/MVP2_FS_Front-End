import { Link } from "@tanstack/react-router";
import { Film, HelpCircle } from "lucide-react";
import { Tooltip } from "./Tooltip";

const linkBase =
  "relative px-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
const activeStyle =
  "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-primary";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Film className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Cine<span className="text-gradient-primary">Scope</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={linkBase}
            activeOptions={{ exact: true }}
            activeProps={{ className: `${linkBase} ${activeStyle}` }}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={linkBase}
            activeProps={{ className: `${linkBase} ${activeStyle}` }}
          >
            Filmes
          </Link>
          <Tooltip content="Busque e explore filmes do catálogo CineScope">
            <HelpCircle className="h-4 w-4 cursor-help text-muted-foreground transition-colors hover:text-foreground" />
          </Tooltip>
        </nav>
      </div>
    </header>
  );
}
