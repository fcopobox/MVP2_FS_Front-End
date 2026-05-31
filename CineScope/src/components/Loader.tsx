import { Loader2 } from "lucide-react";

type Props = { label?: string; className?: string };

export function Loader({ label = "Carregando...", className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 py-12 ${className}`}>
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
