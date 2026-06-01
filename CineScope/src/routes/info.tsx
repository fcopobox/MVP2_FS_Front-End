import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/info")({
  component: InfoPage,
});

function InfoPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>

      <p className="mb-4">
        O CineScope é um MVP desenvolvido para a disciplina de Front-End da PUC-Rio.
        Ele demonstra o uso de React, Vite, TanStack Router, componentização,
        consumo de JSON e responsividade.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Funcionalidades</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>SPA com navegação sem recarregar a página</li>
        <li>Lista de filmes carregada de JSON</li>
        <li>Página de detalhes com rota dinâmica</li>
        <li>Componentização e responsividade</li>
        <li>UX com loader e tratamento de erros</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Tecnologias</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>React + Vite</li>
        <li>TanStack Router</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
      </ul>
    </main>
  );
}
