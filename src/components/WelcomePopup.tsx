
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
      <DialogContent className="glass-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-purple-700">
            ⚠️ Descubra seu perfil espiritual
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <p className="mb-4">
              Você terá acesso a <span className="font-bold">1 análise gratuita e exclusiva</span> com base em suas respostas.
            </p>
            <p className="mb-4">
              Este diagnóstico vai revelar a área que mais precisa de cura espiritual.
            </p>
            <p className="text-amber-500 italic">
              🟡 Obs.: Após essa análise, você poderá desbloquear conteúdos e desafios personalizados.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={handleStart}>
            OK, quero começar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
