
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
    profileId: number;
  }[];
}

export interface SpiritualProfile {
  id: number;
  name: string;
  description: string;
  biblicalCharacter: string;
  transformation: string;
}

export type Step = 'welcome' | 'register' | 'questions' | 'result';
