import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Button } from "./Button";

type Props = {
  initialValue?: string;
  onSearch: (query: string) => void;
  placeholder?: string;
};

export function SearchBar({ initialValue = "", onSearch, placeholder = "Busque por um filme..." }: Props) {
  const [value, setValue] = useState(initialValue);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSearch(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          aria-label="Buscar filmes"
          className="h-12 w-full rounded-lg border border-border bg-input pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/50"
        />
      </div>
      <Button type="submit" size="lg">Buscar</Button>
    </form>
  );
}
