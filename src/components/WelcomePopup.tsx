
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface WelcomePopupProps {
  onStart: () => void;
}

const WelcomePopup = ({ onStart }: WelcomePopupProps) => {
  const [open, setOpen] = useState(true);

  const handleStart = () => {
    setOpen(false);
    onStart();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md mx-auto p-8 rounded-xl bg-white border border-purple-200 shadow-xl">
        <DialogHeader className="space-y-6">
          <div className="mx-auto bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center">
            <span className="text-3xl">✨</span>
          </div>
          
          <DialogTitle className="text-center text-2xl font-bold text-purple-800">
            Descubra seu perfil espiritual
          </DialogTitle>
          
          <DialogDescription className="text-center pt-2 space-y-4 text-gray-800">
            <p className="font-medium text-lg">
              Você terá acesso a <span className="font-bold text-purple-600">1 análise gratuita e exclusiva</span> com base em suas respostas.
            </p>
            <p className="text-base">
              Este diagnóstico vai revelar a área que mais precisa de cura espiritual em sua vida.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
              <p className="text-amber-800 text-sm">
                <span className="font-semibold">Observação:</span> Após essa análise, você poderá desbloquear conteúdos e desafios personalizados.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex justify-center mt-6">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto text-lg"
            onClick={handleStart}
          >
            OK, quero começar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
