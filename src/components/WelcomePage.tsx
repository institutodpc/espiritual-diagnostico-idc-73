
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface WelcomePageProps {
  onStart: () => void;
}

const WelcomePage = ({ onStart }: WelcomePageProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <div className="mx-auto bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center mb-8">
          <span className="text-4xl">✨</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
          Diagnóstico Espiritual
        </h1>
        
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Descubra seu perfil espiritual e entenda quais áreas da sua vida precisam de cura e restauração.
        </p>
        
        <div className="space-y-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-3">Como funciona?</h2>
            <p className="text-gray-700">
              Você responderá a perguntas simples sobre suas experiências e sentimentos espirituais. 
              Com base nas suas respostas, identificaremos seu perfil dominante e ofereceremos insights valiosos.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-3">O que você vai receber?</h2>
            <p className="text-gray-700">
              Um relatório detalhado sobre seu perfil espiritual, incluindo sua formação, áreas que precisam de 
              cura, referências bíblicas e direcionamentos práticos para sua jornada de transformação.
            </p>
          </motion.div>
        </div>
        
        <Button 
          onClick={onStart}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 
                    text-white font-medium py-4 px-10 rounded-full transition-all duration-200 
                    transform hover:scale-105 shadow-lg text-lg flex items-center gap-2"
        >
          Iniciar Diagnóstico
          <ChevronRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
