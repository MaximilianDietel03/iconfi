import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { QuestionCardShell } from "./question-card-shell";
import { Flashcard } from "@/app/topics/[topic]/types";
import { QuestionCardState } from "./types";

type MultipleChoiceQuestionCardProps = {
  flashcard: Flashcard;
  side: "front" | "back";
  onStateChange?: (state: QuestionCardState) => void;
};

export function MultipleChoiceQuestionCard({
  flashcard,
  side,
  onStateChange,
}: MultipleChoiceQuestionCardProps) {
  const { question } = flashcard;
  const { options } = question;

  const [selectedOptionIds, setSelectedOptionIds] = useState<Set<string>>(new Set());
  const isBack = side === "back";

  // Reset selection when card changes
  useEffect(() => {
    setSelectedOptionIds(new Set());
  }, [flashcard.question.id]);

  // Report state changes (selection and correctness)
  useEffect(() => {
    const hasSelection = selectedOptionIds.size > 0;
    
    let isAnswerCorrect: boolean | null = null;
    if (isBack && hasSelection) {
      const correctOptionIds = new Set(
        options.filter(opt => opt.is_correct === true).map(opt => opt.id)
      );
      const incorrectOptionIds = new Set(
        options.filter(opt => opt.is_correct !== true).map(opt => opt.id)
      );
      
      // Check if all correct options are selected and no incorrect ones
      const hasAllCorrect = correctOptionIds.size > 0 && 
        Array.from(correctOptionIds).every(id => selectedOptionIds.has(id));
      const hasNoIncorrect = Array.from(selectedOptionIds).every(id => !incorrectOptionIds.has(id));
      const hasCorrectCount = selectedOptionIds.size === correctOptionIds.size;
      
      isAnswerCorrect = hasAllCorrect && hasNoIncorrect && hasCorrectCount;
    }
    
    onStateChange?.({ hasSelection, isAnswerCorrect });
  }, [isBack, selectedOptionIds, options, onStateChange]);

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptionIds(prev => {
      const next = new Set(prev);
      if (next.has(optionId)) {
        next.delete(optionId);
      } else {
        next.add(optionId);
      }
      return next;
    });
  };

  return (
    <QuestionCardShell flashcard={flashcard}>
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isCorrect = option.is_correct === true;
          const isSelected = selectedOptionIds.has(option.id);

          let borderClass = "";
          if (isBack) {
            if (isSelected && isCorrect) {
              // User selected it and it's correct - green solid border
              borderClass = "border-green-500 dark:border-green-400";
            } else if (!isSelected && isCorrect) {
              // User didn't select it but it's correct - green dashed border (missed answer)
              borderClass = "border-green-500 dark:border-green-400 border-dashed";
            } else if (isSelected && !isCorrect) {
              // User selected it but it's wrong - red border
              borderClass = "border-red-500 dark:border-red-400";
            }
          }

          return (
            <Label
              key={option.id}
              htmlFor={option.id}
              className={`flex items-center justify-center gap-3 p-3 rounded border bg-muted/50 hover:bg-muted transition-colors cursor-pointer ${borderClass}`}
            >
              <Checkbox
                id={option.id}
                checked={isSelected}
                onCheckedChange={() => handleOptionToggle(option.id)}
                disabled={isBack}
              />
              <span className="flex-1">{option.text}</span>
            </Label>
          );
        })}
      </div>
    </QuestionCardShell>
  );
}
