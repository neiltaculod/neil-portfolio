// Records the most recent server-side error so src/server.ts can log the real
// cause when h3 swallows an SSR exception into a generic 500 response.
// Replace with the project's original src/lib/error-capture.ts when re-uploading.

let lastCapturedError: unknown;

export function captureError(error: unknown): void {
  lastCapturedError = error;
}

export function consumeLastCapturedError(): unknown {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

const originalConsoleError = console.error.bind(console);
console.error = (...args: unknown[]) => {
  const error = args.find((arg) => arg instanceof Error);
  if (error) captureError(error);
  originalConsoleError(...args);
};
