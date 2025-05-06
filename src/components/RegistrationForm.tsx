
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserData } from "@/types";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface RegistrationFormProps {
  onSubmit: (userData: UserData) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    
    // Format WhatsApp number as user types
    if (name === "whatsapp") {
      // Remove non-numeric characters
      value = value.replace(/\D/g, "");
      
      // Apply formatting based on length
      if (value.length <= 2) {
        // Just the DDD
      } else if (value.length <= 7) {
        // DDD + first part
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        // Complete format: (XX) XXXXX-XXXX
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      }
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    // Validate name (at least two names)
    if (!formData.name.trim() || formData.name.trim().split(" ").length < 2) {
      toast.error("Por favor, insira seu nome completo.");
      return false;
    }
    
    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return false;
    }
    
    // Validate WhatsApp (must have at least 14 characters with formatting)
    if (formData.whatsapp.replace(/\D/g, "").length < 10) {
      toast.error("Por favor, insira um número de WhatsApp válido com DDD.");
      return false;
    }
    
    return true;
  };

  const saveUserToSupabase = async () => {
    try {
      const { error } = await supabase
        .from('users')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            whatsapp: formData.whatsapp,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (error) throw error;
      
      // We don't need to handle success here as the form will proceed anyway
    } catch (error) {
      console.error("Error saving user to Supabase:", error);
      // Continue anyway to not block user experience
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Save user data to Supabase
      await saveUserToSupabase();
      
      // Proceed with the form submission
      onSubmit(formData);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Ocorreu um erro ao registrar seus dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="glass-card border-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-purple-700">
            Antes de começar, preencha seus dados
          </CardTitle>
          <CardDescription className="text-center">
            Seus dados estão seguros e serão usados apenas para enviar sua análise e orientações espirituais.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome e sobrenome"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
              <p className="text-xs text-gray-500">Digite seu nome completo</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
              <p className="text-xs text-gray-500">Usaremos para enviar seu resultado</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp com DDD <span className="text-red-500">*</span></Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
              <p className="text-xs text-gray-500">Digite apenas números com DDD</p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Processando..." : "Iniciar diagnóstico"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationForm;
