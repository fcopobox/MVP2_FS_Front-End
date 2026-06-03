import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilitário para combinar classes CSS de forma eficiente, utilizando clsx para lógica de combinação
// e twMerge para resolver conflitos de classes do Tailwind, garantindo que as classes sejam aplicadas corretamente

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
