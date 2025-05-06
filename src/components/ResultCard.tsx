
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserData, SpiritualProfile } from "@/types";
import { Download, MessageSquare } from "lucide-react";
import { generateResultPDF } from "@/utils/pdfGenerator";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

interface ResultCardProps {
  userData: UserData;
  profile: SpiritualProfile;
}

const ResultCard = ({ userData, profile }: ResultCardProps) => {
  useEffect(() => {
    // Save result to Supabase
    const saveResultToSupabase = async () => {
      try {
        const { error } = await supabase
          .from('results')
          .insert([
            { 
              user_email: userData.email,
              profile_id: profile.id,
              created_at: new Date().toISOString()
            }
          ]);
          
        if (error) console.error("Error saving result:", error);
      } catch (error) {
        console.error("Error saving result to Supabase:", error);
      }
    };
    
    saveResultToSupabase();
  }, [userData.email, profile.id]);

  const handleDownloadPDF = () => {
    generateResultPDF(userData, profile);
  };
  
  return (
    <Card className="glass-card w-full max-w-2xl mx-auto border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Seu Perfil Espiritual Dominante:
        </CardTitle>
        <div className="mt-3 text-2xl font-bold text-purple-800">
          👉 {profile.name}
        </div>
        <CardDescription className="text-base mt-4">
          {profile.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">🧩 COMO ESSE PERFIL SE FORMA:</h3>
          <p className="text-gray-700">{profile.formation}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">🏠 REFÚGIO QUE PROCURA:</h3>
          <p className="text-gray-700">{profile.refuge}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">📖 Personagem bíblico que viveu isso:</h3>
          <p className="text-gray-700">{profile.biblicalCharacter}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">✨ Como Deus o transformou:</h3>
          <p className="text-gray-700 whitespace-pre-line">{profile.transformation}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">💔 DORES EM COMUM:</h3>
          <p className="text-gray-700">{profile.commonPains}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">🔥 O QUE PRECISA FAZER PARA SAIR DESSE PERFIL:</h3>
          <p className="text-gray-700 whitespace-pre-line">{profile.solutions}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">📝 RESUMO:</h3>
          <p className="text-gray-700">{profile.summary}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md">
          <Button 
            variant="outline" 
            className="w-full sm:w-1/2 border-purple-300 text-purple-700 hover:bg-purple-50"
            onClick={handleDownloadPDF}
          >
            <Download className="h-4 w-4 mr-2" />
            Baixar em PDF
          </Button>
          
          <a 
            href="https://www.whatsapp.com/channel/0029VbAfmlsDp2Q5WBtB4A3t" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-1/2"
          >
            <Button 
              variant="outline" 
              className="w-full border-green-500 text-green-600 hover:bg-green-50"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Entrar no grupo do WhatsApp
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
