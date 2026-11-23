import { createFileRoute } from "@tanstack/react-router";

// Temporary page shown until the portfolio's real src/routes/ folder is uploaded.
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="grid min-h-screen place-items-center p-8 text-center">
      <div>
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <p className="mt-2 text-muted-foreground">This site is being updated. Check back soon.</p>
      </div>
    </main>
  );
}
