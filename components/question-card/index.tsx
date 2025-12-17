import { QuestionCardShell } from "./question-card-shell";
import { MatchQuestionCard } from "./match-question-card";
import { MultipleChoiceQuestionCard } from "./multiple-choice-question-card";
import { OrderQuestionCard } from "./order-question-card";
import { SingleChoiceQuestionCard } from "./single-choice-question-card";
import { QuestionCardProps } from "./types";

export type { QuestionCardProps };

export function QuestionCard({ flashcard, side, onStateChange }: QuestionCardProps) {
  switch (flashcard.question.question_type) {
    case "single":
      return (
        <SingleChoiceQuestionCard
          flashcard={flashcard}
          side={side}
          onStateChange={onStateChange}
        />
      );
    case "multiple":
      return (
        <MultipleChoiceQuestionCard
          flashcard={flashcard}
          side={side}
          onStateChange={onStateChange}
        />
      );
    case "order":
      return (
        <OrderQuestionCard 
          flashcard={flashcard} 
          side={side}
          onStateChange={onStateChange}
        />
      );
    case "match":
      return (
        <MatchQuestionCard 
          flashcard={flashcard} 
          side={side}
          onStateChange={onStateChange}
        />
      );
    default:
      return (
        <QuestionCardShell flashcard={flashcard}>
          <div className="text-sm text-muted-foreground">
            Nicht unterstützter Fragetyp.
          </div>
        </QuestionCardShell>
      );
  }
}


