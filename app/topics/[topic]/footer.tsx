"use client";

import { FC } from "react";
import { useFlashcards } from "./hooks";
import { Button } from "@/components/ui/button";
import { Rating } from "ts-fsrs";

interface TopicFooterProps {
  side: "front" | "back";
  hasSelection: boolean;
  isAnswerCorrect: boolean | null;
  onReveal: () => void;
}
export const TopicFooter: FC<TopicFooterProps> = ({ 
  side, 
  hasSelection, 
  isAnswerCorrect,
  onReveal,
}) => {
  const { currentFlashcard, gradeFlashcard } = useFlashcards();

  if (!currentFlashcard) {
    return null;
  }

  // Front side: show reveal button (disabled if no selection)
  if (side === "front") {
    return (
      <footer className="border-t border-t-border flex-shrink-0">
        <div className="max-w-5xl mx-auto w-full flex justify-center items-center p-2 gap-2">
          <Button 
            onClick={onReveal} 
            disabled={!hasSelection}
            className="grow"
          >
            Antwort anzeigen
          </Button>
        </div>
      </footer>
    );
  }

  // Wrong answer: show next card button (automatically grades as Hard)
  const handleNextCard = async () => {
    await gradeFlashcard(currentFlashcard, Rating.Hard);
    // State will be reset automatically when currentFlashcard changes
  };

  // Back side: show grading buttons if correct, or next card button if wrong
  if (isAnswerCorrect === true) {
    return (
      <footer className="border-t border-t-border flex-shrink-0">
        <div className="max-w-5xl mx-auto w-full flex justify-center items-center p-2 gap-2">
          <Button onClick={async () => await gradeFlashcard(currentFlashcard, Rating.Hard)} className="grow basis-1/3 bg-orange-500 hover:bg-orange-500/90">Schwer</Button>
          <Button onClick={async () => await gradeFlashcard(currentFlashcard, Rating.Good)} className="grow basis-1/3 bg-green-500 hover:bg-green-500/90">Gut</Button>
          <Button onClick={async () => await gradeFlashcard(currentFlashcard, Rating.Easy)} className="grow basis-1/3 bg-blue-500 hover:bg-blue-500/90">Einfach</Button>
        </div>
      </footer>
    );
  }

  // Wrong answer or null (shouldn't happen, but fallback): show next card button
  return (
    <footer className="border-t border-t-border flex-shrink-0">
      <div className="max-w-5xl mx-auto w-full flex justify-center items-center p-2 gap-2">
        <Button onClick={handleNextCard} className="grow">
          Nächste Karte
        </Button>
      </div>
    </footer>
  );
}