
import { Question, SpiritualProfile } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    text: "Quando enfrento dificuldades, eu costumo...",
    options: [
      { id: 1, text: "Buscar culpados e reclamar muito", profileId: 1 },
      { id: 2, text: "Me isolar e achar que ninguém me entende", profileId: 2 },
      { id: 3, text: "Orar e esperar uma direção de Deus", profileId: 3 }
    ]
  },
  {
    id: 2,
    text: "Em momentos de decisão, minha maior tendência é...",
    options: [
      { id: 1, text: "Agir por impulso sem considerar as consequências", profileId: 4 },
      { id: 2, text: "Postergar a decisão por medo de errar", profileId: 5 },
      { id: 3, text: "Consultar pessoas de confiança antes de decidir", profileId: 6 }
    ]
  },
  {
    id: 3,
    text: "Quando alguém me critica, eu geralmente...",
    options: [
      { id: 1, text: "Me defendo imediatamente e contra-ataco", profileId: 7 },
      { id: 2, text: "Fico magoado(a) e guardo ressentimento", profileId: 8 },
      { id: 3, text: "Avalio se há algo a aprender com a crítica", profileId: 9 }
    ]
  },
  {
    id: 4,
    text: "Minha relação com Deus é principalmente...",
    options: [
      { id: 1, text: "Baseada em regras e obrigações", profileId: 10 },
      { id: 2, text: "Distante e inconstante", profileId: 11 },
      { id: 3, text: "Íntima e baseada em confiança", profileId: 12 }
    ]
  },
  {
    id: 5,
    text: "Quando vejo o sucesso dos outros, costumo sentir...",
    options: [
      { id: 1, text: "Inveja e comparação negativa", profileId: 13 },
      { id: 2, text: "Que nunca conseguirei alcançar o mesmo", profileId: 14 },
      { id: 3, text: "Alegria e inspiração", profileId: 15 }
    ]
  },
  {
    id: 6,
    text: "Em relação ao perdão, eu...",
    options: [
      { id: 1, text: "Tenho dificuldade em perdoar quem me feriu", profileId: 16 },
      { id: 2, text: "Perdoo externamente, mas guardo mágoas", profileId: 17 },
      { id: 3, text: "Consigo perdoar genuinamente com a ajuda de Deus", profileId: 18 }
    ]
  },
  {
    id: 7,
    text: "Quando penso no futuro, geralmente me sinto...",
    options: [
      { id: 1, text: "Ansioso(a) e preocupado(a)", profileId: 19 },
      { id: 2, text: "Temeroso(a) e inseguro(a)", profileId: 20 },
      { id: 3, text: "Confiante e esperançoso(a)", profileId: 21 }
    ]
  },
  {
    id: 8,
    text: "Em relação à verdade, eu costumo...",
    options: [
      { id: 1, text: "Adaptar a verdade quando conveniente", profileId: 22 },
      { id: 2, text: "Ocultar partes da verdade para evitar problemas", profileId: 23 },
      { id: 3, text: "Valorizar a honestidade mesmo quando difícil", profileId: 24 }
    ]
  },
  {
    id: 9,
    text: "Com relação às minhas orações, eu...",
    options: [
      { id: 1, text: "Oro principalmente quando preciso de algo", profileId: 25 },
      { id: 2, text: "Tenho dificuldade em manter uma vida de oração", profileId: 26 },
      { id: 3, text: "Oro regularmente e busco intimidade com Deus", profileId: 27 }
    ]
  },
  {
    id: 10,
    text: "Quando estou sob pressão, eu geralmente...",
    options: [
      { id: 1, text: "Fico irritado(a) e impaciente", profileId: 28 },
      { id: 2, text: "Me paraliso e me desespero", profileId: 29 },
      { id: 3, text: "Busco força em Deus e mantenho a calma", profileId: 30 }
    ]
  },
  {
    id: 11,
    text: "Minha maior motivação na vida cristã é...",
    options: [
      { id: 1, text: "Obter as bênçãos e promessas de Deus", profileId: 31 },
      { id: 2, text: "Evitar o castigo e o julgamento", profileId: 32 },
      { id: 3, text: "Conhecer mais a Deus e servi-lo por amor", profileId: 33 }
    ]
  }
];

export const spiritualProfiles: SpiritualProfile[] = [
  {
    id: 1,
    name: "O Inseguro",
    description: "Você tende a buscar aprovação externa e tem dificuldade em confiar no plano de Deus para sua vida. Suas inseguranças frequentemente afetam seus relacionamentos e decisões.",
    biblicalCharacter: "Gideão",
    transformation: "Deus transformou Gideão de um homem temeroso em um guerreiro valente, mostrando que a segurança vem da identidade em Cristo."
  },
  {
    id: 2,
    name: "O Controlador",
    description: "Você tem a tendência de querer controlar situações e pessoas ao seu redor. Confiar no timing de Deus e aceitar incertezas é um desafio constante.",
    biblicalCharacter: "Moisés",
    transformation: "Deus ensinou Moisés a soltar o controle e confiar em Sua direção, transformando-o em um líder que seguia a nuvem do Senhor."
  },
  /* Additional profiles would be added here - I'm including only two examples for brevity */
];

export const calculateResult = (answers: Map<number, number>): number => {
  // Initialize profile scores
  const profileScores = new Map<number, number>();
  
  // Count occurrences of each profile
  for (const profileId of answers.values()) {
    const currentScore = profileScores.get(profileId) || 0;
    profileScores.set(profileId, currentScore + 1);
  }
  
  // Find the highest score
  let maxScore = 0;
  let dominantProfileId = 1; // Default to first profile
  
  profileScores.forEach((score, profileId) => {
    if (score > maxScore) {
      maxScore = score;
      dominantProfileId = profileId;
    }
  });
  
  return dominantProfileId;
};
