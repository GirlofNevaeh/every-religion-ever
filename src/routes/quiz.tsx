import { createFileRoute } from "@tanstack/react-router";
import { QuizGame } from "@/components/quiz-game";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title: "Quiz · Every Religion Ever" }] }),
  component: QuizPage,
});

function QuizPage() {
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 py-6">
      <h1 className="text-4xl text-sky">Class Quiz</h1>
      <p className="mt-2">Questions about memory and kindness. None of them ask which religion is right.</p>
      <QuizGame />
    </main>
  );
}
