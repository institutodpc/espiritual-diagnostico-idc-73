
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
    lastName: "", // Adicionado campo lastName
    email: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    
    if (name === "whatsapp") {
      value = value.replace(/\D/g, "");
      
      if (value.length <= 2) {
        // Just the DDD
      } else if (value.length <= 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      }
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Por favor, insira seu nome.");
      return false;
    }

    if (!formData.lastName.trim()) {
      toast.error("Por favor, insira seu sobrenome.");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido.");
      return false;
    }
    
    if (formData.whatsapp.replace(/\D/g, "").length < 10) {
      toast.error("Por favor, insira um número de WhatsApp válido com DDD.");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const fullName = `${formData.name.trim()} ${formData.lastName.trim()}`;
      
      const { data, error } = await supabase
        .from('users')
        .insert([
          { 
            name: fullName, 
            email: formData.email,
            whatsapp: formData.whatsapp,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;
      
      // Chama a função onSubmit com os dados do usuário
      onSubmit(formData);
      
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      toast.error("Ocorreu um erro ao salvar seus dados. Por favor, tente novamente.");
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
              <Label htmlFor="name">Nome <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Sobrenome <span className="text-red-500">*</span></Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Seu sobrenome"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
              <p className="text-xs text-gray-500"></p>
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
              <p className="text-xs text-gray-500"></p>
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
