
import { supabase } from "@/integrations/supabase/client";
import { Question, Option, SpiritualProfile } from "@/types";

// Função para obter todas as perguntas do Supabase
export const fetchQuestions = async (): Promise<Question[]> => {
  const { data: questionsData, error: questionsError } = await supabase
    .from('questions')
    .select('*')
    .order('id');
    
  if (questionsError) {
    console.error("Erro ao buscar perguntas:", questionsError);
    return [];
  }
  
  const questions: Question[] = [];
  
  // Para cada pergunta, buscar as opções correspondentes
  for (const question of questionsData) {
    const { data: optionsData, error: optionsError } = await supabase
      .from('options')
      .select('*')
      .eq('question_id', question.id)
      .order('id');
      
    if (optionsError) {
      console.error(`Erro ao buscar opções para a pergunta ${question.id}:`, optionsError);
      continue;
    }
    
    // Mapear as opções para o formato esperado
    const options: Option[] = optionsData.map(option => ({
      id: option.id,
      text: option.text,
      profileId: option.profile_id,
      weight: option.weight
    }));
    
    // Adicionar a pergunta com suas opções à lista
    questions.push({
      id: question.id,
      text: question.text,
      options
    });
  }
  
  return questions;
};

// Função para obter todos os perfis espirituais
export const fetchSpiritualProfiles = async (): Promise<SpiritualProfile[]> => {
  const { data, error } = await supabase
    .from('spiritual_profiles')
    .select('*');
    
  if (error) {
    console.error("Erro ao buscar perfis espirituais:", error);
    return [];
  }
  
  // Mapear os perfis para o formato esperado
  return data.map(profile => ({
    id: profile.id,
    name: profile.name,
    description: profile.description,
    formation: profile.formation,
    refuge: profile.refuge,
    biblicalCharacter: profile.biblical_character,
    transformation: profile.transformation,
    commonPains: profile.common_pains,
    solutions: profile.solutions,
    summary: profile.summary
  }));
};

// Função para salvar uma resposta
export const saveAnswer = async (
  userEmail: string,
  questionId: number,
  optionId: number,
  profileId: string
) => {
  const { error } = await supabase
    .from('answers')
    .insert([
      { 
        user_email: userEmail,
        question_id: questionId,
        option_id: optionId,
        profile_id: profileId,
        created_at: new Date().toISOString()
      }
    ]);
    
  if (error) console.error("Erro ao salvar resposta:", error);
};

// Função para salvar o resultado
export const saveResult = async (
  userEmail: string,
  profileId: string
) => {
  const { error } = await supabase
    .from('results')
    .insert([
      { 
        user_email: userEmail,
        profile_id: profileId,
        created_at: new Date().toISOString()
      }
    ]);
    
  if (error) console.error("Erro ao salvar resultado:", error);
};

// Função para calcular o perfil dominante com base nas respostas
export const calculateDominantProfile = (answers: Map<number, { profileId: string, weight: number }>) => {
  // Inicializar contagem de perfis
  const profileScores = new Map<string, number>();
  
  // Contar a ocorrência de cada perfil nas respostas, considerando os pesos
  for (const answer of answers.values()) {
    const { profileId, weight } = answer;
    const currentScore = profileScores.get(profileId) || 0;
    profileScores.set(profileId, currentScore + weight);
  }
  
  // Encontrar o perfil com a maior pontuação
  let maxScore = 0;
  let dominantProfileId = "";
  
  profileScores.forEach((score, profileId) => {
    console.log(`Perfil ${profileId}: ${score} pontos`);
    if (score > maxScore) {
      maxScore = score;
      dominantProfileId = profileId;
    }
  });
  
  // Em caso de empate, usar critério de desempate
  const tiedProfiles: string[] = [];
  profileScores.forEach((score, profileId) => {
    if (score === maxScore) {
      tiedProfiles.push(profileId);
    }
  });
  
  if (tiedProfiles.length > 1) {
    console.log("Múltiplos perfis empatados com maior pontuação:", tiedProfiles);
    
    // Usar a última resposta que contribuiu para os perfis empatados como critério de desempate
    const answersArray = Array.from(answers.entries()).sort((a, b) => b[0] - a[0]);
    for (const [, answer] of answersArray) {
      if (tiedProfiles.includes(answer.profileId)) {
        console.log(`Desempate resolvido com o perfil: ${answer.profileId}`);
        return answer.profileId;
      }
    }
  }
  
  console.log(`Perfil dominante: ${dominantProfileId} com ${maxScore} pontos`);
  return dominantProfileId || "Lamentador";
};
