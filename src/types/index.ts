
export interface UserData {
  name: string;
  email: string;
  whatsapp: string;
}

export interface Question {
  id: number;
  text: string;
  options: {
    id: number;
    text: string;
    profileId: string;
  }[];
}

export interface SpiritualProfile {
  id: string;
  name: string;
  description: string;
  formation: string;
  refuge: string;
  biblicalCharacter: string;
  transformation: string;
  commonPains: string;
  solutions: string;
  summary: string;
}

export type Step = 'welcome' | 'welcome-page' | 'register' | 'questions' | 'result';
