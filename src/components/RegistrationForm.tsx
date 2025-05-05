
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserData } from "@/types";
import { toast } from "sonner";

interface RegistrationFormProps {
  onSubmit: (userData: UserData) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.whatsapp) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }
    
    onSubmit(formData);
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
                placeholder="Seu nome completo"
                value={formData.name}
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
                placeholder="seu.email@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/50"
              />
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
            onClick={handleSubmit}
          >
            Iniciar diagnóstico
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationForm;
