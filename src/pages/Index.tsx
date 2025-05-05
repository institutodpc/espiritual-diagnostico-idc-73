
import { useState } from "react";
import { UserData, Step } from "@/types";
import WelcomePopup from "@/components/WelcomePopup";
import RegistrationForm from "@/components/RegistrationForm";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";
import { questions, spiritualProfiles, calculateResult } from "@/data/questions";
import { toast } from "sonner";

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");
  const [userData, setUserData] = useState<UserData>({ name: "", email: "", whatsapp: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const [dominantProfileId, setDominantProfileId] = useState<string | null>(null);

  const handleStartDiagnostic = () => {
    setStep("register");
  };

  const handleRegistrationSubmit = (data: UserData) => {
    setUserData(data);
    setStep("questions");
    toast.success("Registro concluído! Vamos iniciar o diagnóstico.");
  };

  const handleAnswer = (questionId: number, optionId: number) => {
    // Encontrar a questão
    const question = questions.find(q => q.id === questionId);
    if (!question) return;
    
    // Encontrar a opção selecionada
    const selectedOption = question.options.find(opt => opt.id === optionId);
    if (!selectedOption) return;
    
    // Salvar o perfil associado à resposta
    const newAnswers = new Map(answers);
    newAnswers.set(questionId, selectedOption.profileId);
    setAnswers(newAnswers);
    
    // Avançar para a próxima pergunta ou finalizar
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calcular o resultado
      const resultProfileId = calculateResult(newAnswers);
      setDominantProfileId(resultProfileId);
      setStep("result");
      toast.success("Diagnóstico concluído! Veja seu resultado.");
    }
  };

  const handleTransformationPlan = () => {
    toast.info("Plano de transformação em desenvolvimento. Em breve você receberá mais informações no email cadastrado.");
  };

  return (
    <div className="min-h-screen pb-16">
      <BackgroundEffect />
      
      <Header step={step} />
      
      <main className="container mx-auto px-4 py-8">
        {step === "welcome" && <WelcomePopup onStart={handleStartDiagnostic} />}
        
        {step === "register" && (
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        )}
        
        {step === "questions" && (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {step === "result" && dominantProfileId && (
          <ResultCard
            userData={userData}
            profile={spiritualProfiles.find(p => p.id === dominantProfileId) || spiritualProfiles[0]}
            onTransformationPlan={handleTransformationPlan}
          />
        )}
      </main>
      
      {step !== "welcome" && (
        <footer className="text-center text-sm text-gray-500 mt-12">
          <p>© {new Date().getFullYear()} Diagnóstico Espiritual IDC. Todos os direitos reservados.</p>
        </footer>
      )}
    </div>
  );
};

export default Index;
