 import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/info")({
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
        de filmes, utilizando React, Vite e TanStack Router, com navegação dinâmica,
        componentização e consumo de dados simulados via JSON.
      </p>

      {/* ✅ Autor */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Autor</h2>
      <p className="mb-4">
        Francisco Silveira
      </p>

      {/* ✅ Funcionalidades */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Funcionalidades</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Aplicação SPA com navegação sem recarregamento de página</li>
        <li>Listagem de filmes carregados a partir de arquivo JSON</li>
        <li>Página de detalhes com rota dinâmica baseada em ID</li>
        <li>Componentes reutilizáveis (botões, loader, layout, etc.)</li>
        <li>Interface responsiva para diferentes tamanhos de tela</li>
        <li>Feedback visual ao usuário (loading e tratamento de erros)</li>
      </ul>

      {/* ✅ Tecnologias */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Tecnologias</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>React + Vite</li>
        <li>TanStack Router</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
      </ul>

      {/* ✅ Requisitos do MVP */}
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
          Consumo de dados simulados via arquivos JSON (sem backend real)
        </li>

        <li>
          Implementação de responsividade garantindo uso em diferentes dispositivos
        </li>

        <li>
          Melhorias de usabilidade com feedback visual ao usuário
        </li>
      </ul>

      {/* ✅ Explicação do feedback visual */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        Feedback Visual ao Usuário
      </h2>

      <p className="mb-2">
        A aplicação fornece feedback visual para melhorar a experiência do usuário,
        garantindo que ele sempre compreenda o estado atual da interface.
      </p>

      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Loading:</strong> exibição de um componente de carregamento
          (Loader) enquanto os dados dos filmes estão sendo buscados
        </li>

        <li>
          <strong>Tratamento de erros:</strong> exibição de mensagens claras quando
          um filme não é encontrado ou ocorre algum problema na obtenção dos dados
        </li>

        <li>
          <strong>Mensagens contextuais:</strong> utilização da URL atual para informar
          ao usuário qual recurso não foi encontrado
        </li>
      </ul>

      {/* ✅ Observação */}
      <p className="mt-6 text-sm text-gray-500">
        Este projeto foi desenvolvido como parte de um MVP acadêmico para fins educacionais.
      </p>
    </main>
  );
}
