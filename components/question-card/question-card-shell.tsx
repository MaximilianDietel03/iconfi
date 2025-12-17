import { ReactNode } from "react";

import { Flashcard } from "@/app/topics/[topic]/types";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

type QuestionCardShellProps = {
  flashcard: Flashcard;
  children: ReactNode;
};

export function QuestionCardShell({
  flashcard,
  children,
}: QuestionCardShellProps) {
  const { question } = flashcard;

  return (
    <div className="flex flex-col gap-4">
      {question.context ? (
        <Alert className="justify-start">
          <InfoIcon />
          <AlertDescription className="text-foreground">
            {question.context}
          </AlertDescription>
        </Alert>
      ) : null}
      
      <div className="space-y-4">
        <div className="text-lg font-medium leading-relaxed">
          {question.question_text}
        </div>
        
        {question.options_title ? (
          <div className="text-base font-semibold text-foreground">
            {question.options_title}
          </div>
        ) : null}
        
        {question.options_prefix ? (
          <div className="text-sm text-muted-foreground">
            {question.options_prefix}
          </div>
        ) : null}
      </div>
      
      {children}
    </div>
  );
}


