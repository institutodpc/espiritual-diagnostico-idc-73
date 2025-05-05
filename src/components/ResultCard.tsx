
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserData, SpiritualProfile } from "@/types";
import { Download } from "lucide-react";

interface ResultCardProps {
  userData: UserData;
  profile: SpiritualProfile;
  onTransformationPlan: () => void;
}

const ResultCard = ({ userData, profile, onTransformationPlan }: ResultCardProps) => {
  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    alert("Função de download de PDF será implementada futuramente.");
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
          Este perfil representa sua maior batalha espiritual neste momento. Aqui está o que isso revela sobre você:
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">🧩 Descrição do perfil:</h3>
          <p className="text-gray-700">{profile.description}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">📖 Personagem bíblico que viveu isso:</h3>
          <p className="text-gray-700">{profile.biblicalCharacter}</p>
        </div>
        
        <div className="p-6 bg-white/30 rounded-xl">
          <h3 className="font-semibold text-lg mb-3 text-purple-700">✨ Como Deus o transformou:</h3>
          <p className="text-gray-700">{profile.transformation}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button 
          className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
          onClick={onTransformationPlan}
        >
          Quero meu plano de transformação
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full md:w-auto border-purple-300 text-purple-700 hover:bg-purple-50"
          onClick={handleDownloadPDF}
        >
          <Download className="h-4 w-4 mr-2" />
          Baixar em PDF
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
