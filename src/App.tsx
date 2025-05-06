
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { importDataToSupabase } from "./scripts/importDataToSupabase";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Verificar se é necessário importar dados para o Supabase
    const checkAndImportData = async () => {
      try {
        // Verificar se já existem perguntas no Supabase
        const { data: questions, error } = await supabase
          .from('questions')
          .select('id')
          .limit(1);
          
        if (error) {
          console.error("Erro ao verificar perguntas:", error);
          return;
        }
        
        // Se não houver perguntas, importar dados
        if (!questions || questions.length === 0) {
          console.log("Nenhuma pergunta encontrada. Importando dados...");
          await importDataToSupabase();
        }
      } catch (error) {
        console.error("Erro ao verificar/importar dados:", error);
      }
    };
    
    checkAndImportData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
