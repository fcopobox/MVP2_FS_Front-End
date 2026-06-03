// Módulo para capturar erros globais e rejeições de promessas não tratadas, 
// armazenando o último erro capturado por um curto período de tempo (TTL) para consumo posterior

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

// Função para registrar um erro capturado, armazenando o erro e o timestamp atual
function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

// Função para consumir o último erro capturado, verificando se ainda está dentro do TTL
//  e retornando o erro ou undefined se expirado ou inexistente
export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
