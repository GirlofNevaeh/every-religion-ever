import { createFileRoute } from "@tanstack/react-router";
import { WorldMap } from "@/components/world-map";

export const Route = createFileRoute("/places")({
  head: () => ({ meta: [{ title: "Places · Every Religion Ever" }] }),
  component: PlacesPage,
});

function PlacesPage() {
  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <h1 className="text-4xl text-sky">Places</h1>
      <p className="mt-2 max-w-2xl">
        People in these faiths live all over the world. Each stop is one kind of place of worship. The stops are the same size.
      </p>
      <div className="mt-5">
        <WorldMap />
      </div>
    </main>
  );
}
