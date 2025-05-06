
import { supabase } from "@/integrations/supabase/client";
import { questions as localQuestions, spiritualProfiles as localProfiles } from "@/data/questions";

/**
 * Este script importa as perguntas, alternativas e perfis espirituais para o Supabase.
 * Para executar, chame esta função em qualquer lugar do código.
 * Após a execução, você pode remover a chamada para manter o código limpo.
 */
export const importDataToSupabase = async () => {
  try {
    console.log("Iniciando importação de dados para o Supabase...");
    
    // Importar perfis espirituais
    console.log("Importando perfis espirituais...");
    for (const profile of localProfiles) {
      const { error } = await supabase
        .from('spiritual_profiles')
        .upsert({
          id: profile.id,
          name: profile.name,
          description: profile.description,
          formation: profile.formation,
          refuge: profile.refuge,
          biblical_character: profile.biblicalCharacter,
          transformation: profile.transformation,
          common_pains: profile.commonPains,
          solutions: profile.solutions,
          summary: profile.summary
        });
        
      if (error) {
        console.error(`Erro ao importar perfil ${profile.id}:`, error);
      }
    }
    
    // Importar perguntas e alternativas
    console.log("Importando perguntas e alternativas...");
    for (const question of localQuestions) {
      // Inserir pergunta
      const { data: insertedQuestion, error: questionError } = await supabase
        .from('questions')
        .upsert({
          id: question.id,
          text: question.text
        }, { onConflict: 'id' })
        .select();
        
      if (questionError) {
        console.error(`Erro ao importar pergunta ${question.id}:`, questionError);
        continue;
      }
      
      // Inserir opções
      for (const option of question.options) {
        const { error: optionError } = await supabase
          .from('options')
          .upsert({
            id: option.id,
            question_id: question.id,
            text: option.text,
            profile_id: option.profileId,
            weight: 1
          }, { onConflict: 'id' });
          
        if (optionError) {
          console.error(`Erro ao importar opção ${option.id} da pergunta ${question.id}:`, optionError);
        }
      }
    }
    
    console.log("Importação concluída com sucesso!");
    return true;
  } catch (error) {
    console.error("Erro durante a importação de dados:", error);
    return false;
  }
};
