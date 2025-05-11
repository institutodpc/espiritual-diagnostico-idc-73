
import { Step } from "@/types";

interface HeaderProps {
  step: Step;
}

const Header = ({ step }: HeaderProps) => {
  // Determine text based on current step
  const getHeaderText = () => {
    switch (step) {
      case "welcome":
        return "";
      case "welcome-page":
        return "";
      case "register":
        return "";
      case "questions":
        return "Questionário de Diagnóstico";
      case "result":
        return "Seu Resultado";
      default:
        return "";
    }
  };
  
  // Hide header on welcome screen
  if (step === "welcome") {
    return null;
  }
  
  return (
    <header className="py-6 bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">✨</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Diagnóstico Espiritual
            </h1>
          </div>
          
          <div className="text-purple-700 font-medium">
            {getHeaderText()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
