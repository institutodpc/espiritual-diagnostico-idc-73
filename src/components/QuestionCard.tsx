
import { Question, Option } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: number, optionId: number, profileId: string, weight: number) => void;
}

const QuestionCard = ({ question, questionNumber, totalQuestions, onAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ID único para opção neutra (usando número negativo para evitar conflitos)
  const neutralOptionId = -question.id;

  const allOptions: Option[] = [
    ...question.options,
    {
      id: neutralOptionId,
      text: "Nenhuma das alternativas",
      profileId: "neutro",
      weight: 0
    }
  ];

  const handleNext = async () => {
    if (selectedOption !== null && !isSubmitting) {
      try {
        setIsSubmitting(true);
        const option = allOptions.find(opt => opt.id === selectedOption);
        
        if (option) {
          await onAnswer(
            question.id,
            option.id,
            option.profileId,
            option.weight
          );
        }
      } catch (error) {
        console.error('Erro ao processar resposta:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="glass-card w-full max-w-md mx-auto border-0">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-purple-700">
          Responda com sinceridade
        </CardTitle>
        <CardDescription className="text-center">
          Pergunta {questionNumber} de {totalQuestions}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg font-medium text-center mb-6">
          {question.text}
        </div>
        <RadioGroup 
          className="space-y-4"
          value={selectedOption?.toString()}
          onValueChange={(value) => {
            const numValue = parseInt(value);
            setSelectedOption(numValue);
          }}
        >
          {allOptions.map((option) => (
            <div 
              key={option.id} 
              className="flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/30"
            >
              <RadioGroupItem 
                value={option.id.toString()} 
                id={`option-${option.id}`} 
                className="mt-1"
              />
              <Label 
                htmlFor={`option-${option.id}`} 
                className="font-normal cursor-pointer"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          onClick={handleNext}
          disabled={selectedOption === null || isSubmitting}
        >
          {isSubmitting ? "Processando..." : questionNumber === totalQuestions ? "Ver resultado" : "Próxima"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
