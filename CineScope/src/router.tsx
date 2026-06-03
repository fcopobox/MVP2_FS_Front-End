import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Configuração do roteador da aplicação, utilizando TanStack Router e integrando o React Query para gerenciamento de estado assíncrono,
// com scroll restoration e tempo de pré-carregamento de dados definido para 0 para garantir dados sempre atualizados

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
