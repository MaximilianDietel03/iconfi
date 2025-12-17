import type { Flashcard } from "@/app/topics/[topic]/types";

export type QuestionCardState = {
  hasSelection: boolean;
  isAnswerCorrect: boolean | null; // null = not checked yet, true/false = checked
};

export type QuestionCardProps = {
  flashcard: Flashcard;
  side: "front" | "back";
  onStateChange?: (state: QuestionCardState) => void;
};