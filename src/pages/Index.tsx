
import { useState, useEffect } from "react";
import { UserData, Step } from "@/types";
import WelcomePopup from "@/components/WelcomePopup";
import RegistrationForm from "@/components/RegistrationForm";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";
import { questions, spiritualProfiles, calculateResult } from "@/data/questions";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client"; 

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");
  const [userData, setUserData] = useState<UserData>({ name: "", email: "", whatsapp: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const [dominantProfileId, setDominantProfileId] = useState<string | null>(null);

  useEffect(() => {
    // Check if Supabase tables exist
    const checkSupabaseTables = async () => {
      try {
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('id')
          .limit(1);
          
        if (usersError && usersError.code === '42P01') {
          console.error("Users table does not exist:", usersError);
          toast.error("Configuração do banco de dados necessária. Por favor, contate o administrador.");
        }
        
        const { data: results, error: resultsError } = await supabase
          .from('results')
          .select('id')
          .limit(1);
          
        if (resultsError && resultsError.code === '42P01') {
          console.error("Results table does not exist:", resultsError);
        }
        
        const { data: answers, error: answersError } = await supabase
          .from('answers')
          .select('id')
          .limit(1);
          
        if (answersError && answersError.code === '42P01') {
          console.error("Answers table does not exist:", answersError);
        }
      } catch (error) {
        console.error("Error checking Supabase tables:", error);
      }
    };
    
    checkSupabaseTables();
  }, []);

  const handleStartDiagnostic = () => {
    setStep("register");
  };

  const handleRegistrationSubmit = (data: UserData) => {
    setUserData(data);
    setStep("questions");
    toast.success("Registro concluído! Vamos iniciar o diagnóstico.");
  };

  const handleAnswer = async (questionId: number, optionId: number) => {
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
    
    // Save this answer to Supabase
    try {
      const { error } = await supabase
        .from('answers')
        .insert([
          { 
            user_email: userData.email,
            question_id: questionId,
            option_id: optionId,
            profile_id: selectedOption.profileId,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (error) console.error("Error saving answer:", error);
    } catch (error) {
      console.error("Error saving answer to Supabase:", error);
    }
    
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
