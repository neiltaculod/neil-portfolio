// Minimal HTML shown when server rendering fails.
// Replace with the project's original src/lib/error-page.ts when re-uploading.
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Something went wrong</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center;
        font-family: system-ui, sans-serif; text-align: center; padding: 2rem; }
      a { color: inherit; }
    </style>
  </head>
  <body>
    <main>
      <h1>Something went wrong</h1>
      <p>Please try again in a moment.</p>
      <p><a href="/">Back to the home page</a></p>
    </main>
  </body>
</html>`;
}
