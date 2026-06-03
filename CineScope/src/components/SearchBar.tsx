import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "./Button";

type Props = {
  initialValue?: string;
  initialGenre?: string;
  onSearch: (query: string, genre?: string) => void; 
  placeholder?: string;
};
// Componente para exibir a barra de busca com filtro de gênero
export function SearchBar({
  initialValue = "",
  initialGenre = "all",
  onSearch,
  placeholder = "Busque por um filme..."
}: Props) {
  const [value, setValue] = useState(initialValue);
  const [genre, setGenre] = useState(initialGenre);

  // Função para lidar com o envio do formulário de busca
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSearch(value.trim(), genre === "all" ? undefined : genre); 
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            setValue(newValue);

            // Quando o campo fica vazio, recarrega o catálogo completo
            if (newValue.trim() === "") {
              onSearch("", genre === "all" ? undefined : genre);
            }
          }}
          placeholder={placeholder}
          aria-label="Buscar filmes"
          className="h-12 w-full rounded-lg border border-border bg-input pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/50"
        />
      </div>

      <select
        value={genre}
        onChange={(e) => {
          const newGenre = e.target.value;
          setGenre(newGenre);

          // Se "all", remove o filtro
          onSearch(value, newGenre === "all" ? undefined : newGenre);
        }}
        className="h-12 rounded-lg border border-border bg-input px-3 text-sm text-foreground"
      >
        <option value="all">Todos</option>
        <option value="ação">Ação</option>
        <option value="aventura">Aventura</option>
        <option value="comedia">Comédia</option>
        <option value="drama">Drama</option>
        <option value="fantasia">Fantasia</option>
        <option value="mistério">Mistério</option>
        <option value="musical">Musical</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci‑Fi</option>
        <option value="suspense">Suspense</option>
        <option value="terror">Terror</option>
      </select>

      <Button type="submit" size="lg">Buscar</Button>
    </form>
  );
}
