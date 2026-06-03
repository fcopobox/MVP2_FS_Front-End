import { useState, type ReactNode } from "react";

// Componente de tooltip reutilizável para exibir informações adicionais ao passar o mouse 
// ou focar em um elemento, com posicionamento configurável através da prop "side"

type Props = {
  content: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
};

export function Tooltip({ content, children, side = "top" }: Props) {
  const [open, setOpen] = useState(false);
// Para posicionar o tooltip de acordo com a prop "side"
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}

      {open && (
        <span
          role="tooltip"
          className={`
            pointer-events-none absolute z-50 whitespace-nowrap
            rounded-md bg-popover px-2.5 py-1.5 text-xs text-popover-foreground
            shadow-card border border-border animate-fade-in
            ${positionClasses[side]}
          `}
        >
          {content}
        </span>
      )}
    </span>
  );
}

