 import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/info")({
    head: () => ({
    meta: [
      { title: "CineScope — Sobre o Projeto" },
      { name: "description", content: "Informações sobre o projeto CineScope." }
    ]
  }),
  component: InfoPage,
});

function InfoPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>

      <p className="mb-4">
        O <strong>CineScope</strong> é um MVP desenvolvido para a disciplina de
        Desenvolvimento Front-End Avançado da PUC-Rio.
      </p>

      <p className="mb-4">
        A aplicação consiste em uma SPA (Single Page Application) para visualização
        de informações sobre filmes, utilizando React, Vite e TanStack Router, com navegação dinâmica 
        entre páginas e componentização.
      </p>

      {/* Autor */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Autor</h2>
      <p className="mb-4">
        Francisco Silveira
      </p>

      {/* Funcionalidades */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Funcionalidades</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Aplicação SPA com navegação sem recarregamento de página</li>
        <li>Página de detalhes com rota dinâmica baseada em ID</li>
        <li>Componentes reutilizáveis (botões, loader, layout, cards, tooltips)</li>
        <li>Interface responsiva para diferentes tamanhos de tela</li>
        <li>Feedback visual ao usuário (loading e tratamento de erros)</li>
      </ul>

      {/* Tecnologias */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Tecnologias</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>React + Vite</li>
        <li>TanStack Router</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
      </ul>

      {/* Requisitos do MVP */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Requisitos Atendidos</h2>
      <ul className="list-disc pl-6 space-y-1">

        <li>Aplicação com múltiplas páginas (SPA com roteamento)</li>

        <li>
          Navegação entre páginas utilizando TanStack Router
          (equivalente ao React Router)
        </li>

        <li>
          Uso de hooks do React e de navegação: useState e useEffect para controle
          de estado e efeitos, além de useParams (captura de parâmetros da rota),
          useNavigate (navegação programática) e useLocation (leitura da URL atual)
        </li>

        <li>
          Componentização com reutilização de componentes em diferentes partes da aplicação
        </li>

        <li>
          Implementação de responsividade garantindo uso em diferentes dispositivos
        </li>

        <li>
          Melhorias de usabilidade com feedback visual ao usuário
        </li>

        <li>
          Tratamento de erros e mensagens contextuais para informar o usuário sobre o estado da aplicação
        </li>
      </ul>

      {/* Explicação do feedback visual */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Feedback Visual ao Usuário
      </h2>

      <p className="mb-2">
        A aplicação fornece feedback visual para melhorar a experiência do usuário,
        garantindo que ele sempre compreenda o estado atual da interface.
      </p>

      {/* Observação */}
      <p className="mt-6 text-sm text-gray-500">
        Este projeto foi desenvolvido como parte de um MVP acadêmico para fins educacionais.
      </p>
    </main>
  );
}
