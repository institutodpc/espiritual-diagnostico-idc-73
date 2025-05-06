
import { useState, useEffect } from "react";
import { UserData, Step, Question, SpiritualProfile } from "@/types";
import WelcomePopup from "@/components/WelcomePopup";
import WelcomePage from "@/components/WelcomePage";
import RegistrationForm from "@/components/RegistrationForm";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { 
  fetchQuestions, 
  fetchSpiritualProfiles, 
  saveAnswer, 
  saveResult,
  calculateDominantProfile
} from "@/services/supabaseService";

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");
  const [userData, setUserData] = useState<UserData>({ name: "", email: "", whatsapp: "" });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<number, { profileId: string, weight: number }>>(new Map());
  const [dominantProfileId, setDominantProfileId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [spiritualProfiles, setSpiritualProfiles] = useState<SpiritualProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar perguntas e perfis do Supabase
    const loadData = async () => {
      setLoading(true);
      try {
        const [fetchedQuestions, fetchedProfiles] = await Promise.all([
          fetchQuestions(),
          fetchSpiritualProfiles()
        ]);
        
        if (fetchedQuestions.length > 0) {
          setQuestions(fetchedQuestions);
        } else {
          toast.error("Não foi possível carregar as perguntas. Por favor, tente novamente mais tarde.");
        }
        
        if (fetchedProfiles.length > 0) {
          setSpiritualProfiles(fetchedProfiles);
        } else {
          toast.error("Não foi possível carregar os perfis espirituais. Por favor, tente novamente mais tarde.");
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        toast.error("Erro ao carregar os dados. Por favor, verifique sua conexão.");
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
    
    // Verificar se as tabelas do Supabase existem
    const checkSupabaseTables = async () => {
      try {
        const { data: users, error: usersError } = await supabase
          .from('users')
          .select('id')
          .limit(1);
          
        if (usersError) {
          console.error("Users table error:", usersError);
          if (usersError.code === '42P01') {
            toast.error("Configuração do banco de dados necessária. Por favor, contate o administrador.");
          }
        }
      } catch (error) {
        console.error("Error checking Supabase tables:", error);
      }
    };
    
    checkSupabaseTables();
  }, []);

  const handleStartDiagnostic = () => {
    setStep("welcome-page");
  };

  const handleStartRegistration = () => {
    setStep("register");
  };

  const handleRegistrationSubmit = async (data: UserData) => {
    try {
      // Salvar usuário no Supabase
      const { error } = await supabase
        .from('users')
        .insert([
          {
            name: data.name,
            email: data.email,
            whatsapp: data.whatsapp
          }
        ]);
      
      if (error && error.code !== "23505") {  // Ignora erro de duplicação
        console.error("Erro ao salvar usuário:", error);
        toast.error("Erro ao registrar. Por favor, tente novamente.");
        return;
      }
      
      setUserData(data);
      setStep("questions");
      toast.success("Registro concluído! Vamos iniciar o diagnóstico.");
    } catch (error) {
      console.error("Erro durante o registro:", error);
      toast.error("Ocorreu um erro inesperado. Por favor, tente novamente.");
    }
  };

  const handleAnswer = async (questionId: number, optionId: number, profileId: string, weight: number) => {
    try {
      // Salvar a resposta no Supabase
      await saveAnswer(userData.email, questionId, optionId, profileId);
      
      // Atualizar o estado local das respostas
      const newAnswers = new Map(answers);
      newAnswers.set(questionId, { profileId, weight });
      setAnswers(newAnswers);
      
      // Avançar para a próxima pergunta ou finalizar
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Calcular o resultado
        const resultProfileId = calculateDominantProfile(newAnswers);
        setDominantProfileId(resultProfileId);
        
        // Salvar o resultado no Supabase
        await saveResult(userData.email, resultProfileId);
        
        setStep("result");
        toast.success("Diagnóstico concluído! Veja seu resultado.");
      }
    } catch (error) {
      console.error("Erro ao processar resposta:", error);
      toast.error("Erro ao processar sua resposta. Por favor, tente novamente.");
    }
  };

  if (loading && step !== "welcome") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-purple-700">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      <BackgroundEffect />
      
      <Header step={step} />
      
      <main className="container mx-auto px-4 py-8">
        {step === "welcome" && <WelcomePopup onStart={handleStartDiagnostic} />}
        
        {step === "welcome-page" && <WelcomePage onStart={handleStartRegistration} />}
        
        {step === "register" && (
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        )}
        
        {step === "questions" && questions.length > 0 && (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {step === "result" && dominantProfileId && spiritualProfiles.length > 0 && (
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
