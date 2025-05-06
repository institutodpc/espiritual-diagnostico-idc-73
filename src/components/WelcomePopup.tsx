
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
      <DialogContent className="max-w-md mx-auto p-6 rounded-xl bg-white/90 backdrop-blur-md border border-purple-200 shadow-xl">
        <DialogHeader className="space-y-4">
          <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          
          <DialogTitle className="text-center text-2xl font-bold text-purple-700">
            Descubra seu perfil espiritual
          </DialogTitle>
          
          <DialogDescription className="text-center pt-2 space-y-4 text-gray-700">
            <p className="font-medium">
              Você terá acesso a <span className="font-bold text-purple-600">1 análise gratuita e exclusiva</span> com base em suas respostas.
            </p>
            <p>
              Este diagnóstico vai revelar a área que mais precisa de cura espiritual em sua vida.
            </p>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 mt-4">
              <p className="text-amber-700 text-sm">
                <span className="font-semibold">Observação:</span> Após essa análise, você poderá desbloquear conteúdos e desafios personalizados.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex justify-center mt-6">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg w-full sm:w-auto"
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
