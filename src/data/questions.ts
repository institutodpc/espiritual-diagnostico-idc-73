import { Question, SpiritualProfile } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    text: "Quando recebo uma crítica construtiva, eu geralmente...",
    options: [
      { id: 1, text: "Me sinto mal e começo a duvidar de mim mesmo.", profileId: "Inseguro" },
      { id: 2, text: "Tento justificar e mostrar que estava certo.", profileId: "Orgulhoso" },
      { id: 3, text: "Fico pensando no que os outros vão achar de mim.", profileId: "Obcecado com a Opinião Alheia" }
    ]
  },
  {
    id: 2,
    text: "Diante de uma responsabilidade importante, eu...",
    options: [
      { id: 1, text: "Fico esperando o momento perfeito para agir.", profileId: "Procrastinador" },
      { id: 2, text: "Tento controlar tudo para que saia como planejei.", profileId: "Controlador" },
      { id: 3, text: "Me saboto achando que não vou conseguir.", profileId: "Síndrome do Eu Não" }
    ]
  },
  {
    id: 3,
    text: "Quando erro, eu costumo...",
    options: [
      { id: 1, text: "Me culpar excessivamente por muito tempo.", profileId: "Culpado" },
      { id: 2, text: "Esconder e fingir que está tudo bem.", profileId: "Hipócrita" },
      { id: 3, text: "Usar justificativas para aliviar o peso.", profileId: "Senhor das Desculpas" }
    ]
  },
  {
    id: 4,
    text: "Em relação à oração e jejum, eu...",
    options: [
      { id: 1, text: "Oro quando estou em apuros, mas não tenho constância.", profileId: "Não Ora" },
      { id: 2, text: "Quase nunca jejuo, mesmo sabendo da importância.", profileId: "Não Jejua" },
      { id: 3, text: "Me sinto distante de Deus e não sei por onde recomeçar.", profileId: "Escravo do Mundo" }
    ]
  },
  {
    id: 5,
    text: "Quando vejo alguém sendo exaltado espiritualmente, eu...",
    options: [
      { id: 1, text: "Sinto uma pontinha de inveja.", profileId: "Invejoso Espiritual" },
      { id: 2, text: "Tento me aproximar da pessoa para ser notado também.", profileId: "Bajulador" },
      { id: 3, text: "Questiono se a pessoa realmente merece.", profileId: "Julgador" }
    ]
  },
  {
    id: 6,
    text: "Quando falam de estudar a Bíblia, eu...",
    options: [
      { id: 1, text: "Até quero, mas sempre deixo pra depois.", profileId: "Não Estuda a Bíblia" },
      { id: 2, text: "Me sinto perdido, como se fosse complicado demais.", profileId: "Falta de Sabedoria" },
      { id: 3, text: "Acredito que já sei o suficiente e não preciso estudar tanto.", profileId: "Perfeccionista Espiritual" }
    ]
  },
  {
    id: 7,
    text: "Sobre relacionamentos e pureza, eu...",
    options: [
      { id: 1, text: "Tenho dificuldade em manter limites no digital.", profileId: "Fornicador Digital" },
      { id: 2, text: "Vivo lembranças que me afastam de Deus.", profileId: "Não se Perdoa" },
      { id: 3, text: "Já me peguei mentindo para evitar conflitos.", profileId: "Mentiroso" }
    ]
  },
  {
    id: 8,
    text: "Quando alguém tenta me ajudar espiritualmente, eu...",
    options: [
      { id: 1, text: "Desconfio e fico na defensiva.", profileId: "Desconfiado" },
      { id: 2, text: "Penso que já conheço Deus e não preciso de mentor.", profileId: "Não Procura Espírito de Conhecimento" },
      { id: 3, text: "Aceito o conselho, mas não mudo nada na prática.", profileId: "Tolo" }
    ]
  },
  {
    id: 9,
    text: "Em tempos difíceis, eu...",
    options: [
      { id: 1, text: "Reclamo muito e me sinto injustiçado.", profileId: "Lamentador" },
      { id: 2, text: "Me isolo emocionalmente e não compartilho com ninguém.", profileId: "Vitimista" },
      { id: 3, text: "Busco saídas imediatas que aliviem a dor (dinheiro, vícios, distrações).", profileId: "Adora o Dinheiro e Esquece do Reino" }
    ]
  },
  {
    id: 10,
    text: "Sobre decisões importantes, eu...",
    options: [
      { id: 1, text: "Tomo atitudes sem pensar nas consequências.", profileId: "Imprudente" },
      { id: 2, text: "Fico tão ansioso que me torno impaciente com tudo.", profileId: "Impaciente" },
      { id: 3, text: "Espiritualizo tudo ao extremo e travo por medo de errar.", profileId: "Perfeccionista Espiritual" }
    ]
  },
  {
    id: 11,
    text: "Quando vejo que estou distante de Deus, eu...",
    options: [
      { id: 1, text: "Me sinto indigno demais para recomeçar.", profileId: "Não se Perdoa" },
      { id: 2, text: "Espero um sinal de Deus para tomar atitude.", profileId: "Procrastinador" },
      { id: 3, text: "Me comparo com quem parece 'mais santo'.", profileId: "Invejoso Espiritual" }
    ]
  },
  {
    id: 12,
    text: "Quando vejo alguém sendo muito usado por Deus, eu...",
    options: [
      { id: 1, text: "Penso que aquilo é só aparência.", profileId: "Julgador" },
      { id: 2, text: "Me comparo e acho que Deus não me vê do mesmo jeito.", profileId: "Invejoso" },
      { id: 3, text: "Me esforço para agradar líderes e ser notado também.", profileId: "Desesperado por Aprovação" }
    ]
  },
  {
    id: 13,
    text: "Diante de um erro cometido, eu...",
    options: [
      { id: 1, text: "Tento esconder de todos e continuar como se nada tivesse acontecido.", profileId: "Hipócrita" },
      { id: 2, text: "Crio uma história para aliviar o impacto.", profileId: "Mentiroso" },
      { id: 3, text: "Me afasto de tudo achando que Deus me rejeita.", profileId: "Não se Perdoa" }
    ]
  },
  {
    id: 14,
    text: "Quando leio ou escuto a Bíblia, eu...",
    options: [
      { id: 1, text: "Tenho dificuldade de aplicar na minha vida.", profileId: "Tolo" },
      { id: 2, text: "Entendo, mas não coloco em prática por medo de errar.", profileId: "Inseguro" },
      { id: 3, text: "Acredito que estudar demais pode até esfriar minha fé.", profileId: "Não Procura Espírito de Conhecimento" }
    ]
  },
  {
    id: 15,
    text: "Em momentos de espera por promessas, eu...",
    options: [
      { id: 1, text: "Perco a paciência facilmente.", profileId: "Impaciente" },
      { id: 2, text: "Tento forçar as coisas com minhas próprias mãos.", profileId: "Controlador" },
      { id: 3, text: "Reclamo ou questiono se Deus realmente me ama.", profileId: "Lamentador" }
    ]
  },
  {
    id: 16,
    text: "Sobre meu tempo com Deus, eu...",
    options: [
      { id: 1, text: "Pulo o devocional porque acho que Ele entende minha rotina.", profileId: "Não Ora" },
      { id: 2, text: "Faço por obrigação e não por prazer.", profileId: "Perfeccionista Espiritual" },
      { id: 3, text: "Penso que Deus não responde porque não sou bom o suficiente.", profileId: "Vitimista" }
    ]
  },
  {
    id: 17,
    text: "Quando alguém me confronta em amor, eu...",
    options: [
      { id: 1, text: "Reajo com orgulho, mesmo sabendo que está certo.", profileId: "Orgulhoso" },
      { id: 2, text: "Dou desculpas dizendo que não era bem assim.", profileId: "Senhor das Desculpas" },
      { id: 3, text: "Agradeço na hora, mas por dentro fico magoado.", profileId: "Culpado" }
    ]
  },
  {
    id: 18,
    text: "Em momentos de lazer ou redes sociais, eu...",
    options: [
      { id: 1, text: "Me distraio com conteúdos que não edificam.", profileId: "Fornicador Digital" },
      { id: 2, text: "Me comparo e fico frustrado com minha realidade.", profileId: "Invejoso" },
      { id: 3, text: "Uso isso para fugir dos meus conflitos internos.", profileId: "Escravo do Mundo" }
    ]
  },
  {
    id: 19,
    text: "Quando estou em um grupo cristão, eu...",
    options: [
      { id: 1, text: "Tento impressionar com o que sei.", profileId: "Bajulador" },
      { id: 2, text: "Me calo com medo de errar ou parecer ignorante.", profileId: "Síndrome do Eu Não" },
      { id: 3, text: "Julgo os que não têm o mesmo nível de entrega que eu.", profileId: "Julgador" }
    ]
  },
  {
    id: 20,
    text: "Diante de decisões espirituais sérias, eu...",
    options: [
      { id: 1, text: "Me baseio mais no que sinto do que no que está escrito.", profileId: "Falta de Sabedoria" },
      { id: 2, text: "Vou pela opinião dos outros para não errar sozinho.", profileId: "Obcecado com Opinião Alheia" },
      { id: 3, text: "Decido rápido e depois me arrependo.", profileId: "Imprudente" }
    ]
  },
  {
    id: 21,
    text: "Em relação ao jejum, eu...",
    options: [
      { id: 1, text: "Já tentei, mas sempre quebro antes do fim.", profileId: "Não Jejua" },
      { id: 2, text: "Jejuo apenas quando sou pressionado por alguém.", profileId: "Desesperado por Aprovação" },
      { id: 3, text: "Não entendo o verdadeiro valor e nunca pratiquei.", profileId: "Não Procura Espírito de Conhecimento" }
    ]
  },
  {
    id: 22,
    text: "Quando tenho dificuldades financeiras, eu...",
    options: [
      { id: 1, text: "Culpo Deus ou penso que Ele esqueceu de mim.", profileId: "Lamentador" },
      { id: 2, text: "Me foco tanto em ganhar dinheiro que esqueço do Reino.", profileId: "Adora o Dinheiro e Esquece do Reino" },
      { id: 3, text: "Tento resolver tudo sozinho sem pedir direção.", profileId: "Orgulhoso" }
    ]
  },
  {
    id: 23,
    text: "Quando enfrento um desafio, eu...",
    options: [
      { id: 1, text: "Costumo pensar logo em desistir.", profileId: "Vitimista" },
      { id: 2, text: "Adio a decisão esperando que tudo se resolva sozinho.", profileId: "Procrastinador" },
      { id: 3, text: "Digo a mim mesmo: 'Não sou capaz, não sei lidar com isso'.", profileId: "Síndrome do Eu Não" }
    ]
  },
  {
    id: 24,
    text: "Em situações onde estou em pecado, eu...",
    options: [
      { id: 1, text: "Me justifico dizendo que é normal e todo mundo faz.", profileId: "Hipócrita" },
      { id: 2, text: "Me afasto de tudo, achando que não sou digno de continuar.", profileId: "Não se Perdoa" },
      { id: 3, text: "Me sinto preso, mas não consigo largar aquilo.", profileId: "Fornicador Digital" }
    ]
  },
  {
    id: 25,
    text: "Quando alguém me decepciona...",
    options: [
      { id: 1, text: "Crio uma barreira para não confiar mais.", profileId: "Desconfiado" },
      { id: 2, text: "Me culpo achando que o erro foi meu.", profileId: "Culpado" },
      { id: 3, text: "Tento manter a aparência de que está tudo bem, mesmo machucado.", profileId: "Controlador" }
    ]
  },
  {
    id: 26,
    text: "Quando vejo alguém sendo exaltado por Deus...",
    options: [
      { id: 1, text: "Me questiono: 'Por que comigo não acontece?'", profileId: "Lamentador" },
      { id: 2, text: "Sinto algo estranho por dentro, mas disfarço.", profileId: "Invejoso Espiritual" },
      { id: 3, text: "Tento imitar atitudes daquela pessoa esperando ter o mesmo resultado.", profileId: "Bajulador" }
    ]
  },
  {
    id: 27,
    text: "Sobre minha vida de oração, eu...",
    options: [
      { id: 1, text: "Oro apenas quando algo ruim acontece.", profileId: "Não Ora" },
      { id: 2, text: "Me distraio facilmente e fico com a mente cheia.", profileId: "Impaciente" },
      { id: 3, text: "Acredito que minhas orações não têm poder.", profileId: "Vitimista" }
    ]
  },
  {
    id: 28,
    text: "Quando alguém me elogia, eu...",
    options: [
      { id: 1, text: "Fico desconfiado, achando que querem algo em troca.", profileId: "Desconfiado" },
      { id: 2, text: "Me alimento do elogio como se fosse uma prova de valor.", profileId: "Desesperado por Aprovação" },
      { id: 3, text: "Finjo humildade, mas me acho melhor que os outros.", profileId: "Orgulhoso" }
    ]
  },
  {
    id: 29,
    text: "Quando estou em um culto ou estudo bíblico, eu...",
    options: [
      { id: 1, text: "Fico pensando em outras coisas.", profileId: "Impaciente" },
      { id: 2, text: "Penso: 'Isso não é pra mim, é pra fulano que não está aqui'.", profileId: "Julgador" },
      { id: 3, text: "Finjo estar prestando atenção, mas estou só no automático.", profileId: "Hipócrita" }
    ]
  },
  {
    id: 30,
    text: "Quando preciso tomar uma decisão importante, eu...",
    options: [
      { id: 1, text: "Busco muitos conselhos, mas não oro sobre isso.", profileId: "Não Ora" },
      { id: 2, text: "Decido pelo que parece mais fácil ou lógico.", profileId: "Falta de Sabedoria" },
      { id: 3, text: "Me deixo levar pela emoção do momento.", profileId: "Imprudente" }
    ]
  },
  {
    id: 31,
    text: "Quando falam de estudar a Bíblia, eu...",
    options: [
      { id: 1, text: "Sinto que não tenho cabeça pra isso.", profileId: "Síndrome do Eu Não" },
      { id: 2, text: "Leio mais por obrigação do que por prazer.", profileId: "Perfeccionista Espiritual" },
      { id: 3, text: "Não consigo manter constância, começo e paro várias vezes.", profileId: "Procrastinador" }
    ]
  },
  {
    id: 32,
    text: "Ao olhar para minha trajetória espiritual, eu...",
    options: [
      { id: 1, text: "Sinto vergonha do meu passado.", profileId: "Não se Perdoa" },
      { id: 2, text: "Acredito que não mudei tanto assim.", profileId: "Tolo" },
      { id: 3, text: "Me comparo com os outros e sinto que não evoluí.", profileId: "Invejoso" }
    ]
  },
  {
    id: 33,
    text: "Quando peco e sou confrontado pela Palavra, eu...",
    options: [
      { id: 1, text: "Tento me esconder atrás de boas ações.", profileId: "Hipócrita" },
      { id: 2, text: "Digo a mim mesmo que Deus já me perdoou e sigo em frente sem mudar.", profileId: "Fornicador Digital" },
      { id: 3, text: "Evito ler ou ouvir mais sobre aquilo, pois me sinto mal.", profileId: "Não Conhece Seu Coração" }
    ]
  }
];

export const spiritualProfiles: SpiritualProfile[] = [
  {
    id: "Lamentador",
    name: "O Lamentador",
    description: "Sempre voltado para suas próprias perdas e dificuldades, lamenta constantemente, esquecendo-se de olhar para as promessas de Deus.",
    formation: "Esse crente nasceu da decepção com o tempo de Deus. Ele acreditava, orava, jejuava, mas as coisas não aconteceram. Então a fé virou mágoa, e a mágoa virou identidade. Ele não percebe, mas murmura até quando agradece.",
    refuge: "O Lamentador encontra abrigo nas próprias feridas. Ele se esconde atrás da dor como se fosse um cobertor espiritual, mas essa dor virou um ídolo — ele sente mais segurança na amargura do que nas promessas de Deus. O lamento virou uma linguagem, e o silêncio de Deus se transformou em desculpa para não confiar mais.",
    biblicalCharacter: "Jó, o homem que perdeu tudo... e se perdeu por um tempo dentro da própria dor. Ele se perdeu justamente demais para sofrer. Fez da dor um púlpito e começou a pregar pra si mesmo: 'Eu sou vítima'. Ele não blasfemou com a boca, mas murmurou com o coração. 'Maldito o dia em que nasci...' (Jó 3:3) — Ele amaldiçoou o nascimento, o chamado e o propósito.",
    transformation: "Deus só virou o cativeiro de Jó depois que ele orou por seus amigos. Ou seja: quando ele parou de olhar pro umbigo e começou a liberar graça. Deus não mudou a sorte de Jó porque ele chorou muito, mas porque ele mudou sua postura.\n\n'E o Senhor virou o cativeiro de Jó, quando orava pelos seus amigos...' (Jó 42:10)",
    commonPains: "Ele acredita que, se está sofrendo, é porque falhou em algo — e Deus está cobrando. Ele está ferido, mas aprendeu a sorrir na igreja. A dor espiritual não é expressada — ela é engolida, o que gera isolamento interior. A oração virou tarefa, não encontro. O Lamentador ora como quem cumpre pena, não como quem se encontra com o Pai. Como não entende o 'porquê do sofrimento', o Lamentador começa a acusar o céu em silêncio. O Lamentador não é apenas alguém triste — é alguém com uma espiritualidade ferida, que passou a crer que Deus só envelheceu para os outros. Esse perfil precisa de cura emocional. Sem isso, ele se tornará estéril espiritualmente, mesmo estando dentro da igreja.",
    solutions: "🔥 1. Arrependa-se por idolatrar a própria dor. Você fez da sua dor um trono — e mandou nela. Mas Cristo só reina onde tem espaço. É hora de se levantar do altar do coitadismo.\n\n🔥 2. Enxergue que lamentar é murmurar disfarçado. Não é humildade — é orgulho ferido. Você sente que merece mais.\n\n🔥 3. Comece a agradecer antes de ver a mudança. Gratidão é fé em ação. O céu responde à voz que agradece no escuro.\n\n🔥 4. Ore por alguém — mesmo sem vontade. Assim como com Jó, sua libertação virá quando você quebrar o ciclo da autopiedade e se tornar canal de cura.",
    summary: "Você está preso num ciclo de tristeza que parece espiritual, mas é orgulho ferido. Deus não te esqueceu. Você é quem parou de olhar para Ele. Sua saída não é o que sente, mas o que decide: ou continua vivendo como uma vítima de Deus, ou começa a andar como filho amadurecido."
  },
  // Adicione mais perfis aqui conforme necessário
  {
    id: "Não se Perdoa",
    name: "O Que Não se Perdoa",
    description: "Carrega o peso dos erros passados como se o perdão de Deus não fosse suficiente.",
    formation: "Este crente conhece a graça na teoria, mas não consegue aplicá-la a si mesmo. Cada erro do passado se torna um eco constante, impedindo-o de avançar com liberdade.",
    refuge: "Encontra refúgio na autopunição. Acredita que ao se castigar continuamente, de alguma forma está compensando pelo que fez errado.",
    biblicalCharacter: "Pedro, após negar Jesus três vezes. Ele voltou a pescar, como se não merecesse mais o chamado apostólico. Sua vergonha o levou de volta para o lugar de antes do chamado.",
    transformation: "Jesus restaurou Pedro perguntando três vezes se ele o amava, uma para cada negação. Não concentrou-se nos erros, mas na oportunidade de recomeço. 'Apascenta as minhas ovelhas' (João 21:17) - Jesus devolveu a missão a Pedro, mostrando que o passado não anulava seu propósito.",
    commonPains: "Vive em constante autocondenação. Mesmo quando os outros já o perdoaram, continua punindo a si mesmo. Não consegue aceitar elogios ou reconhecimento. Muitas vezes cai nos mesmos erros porque, no fundo, já se vê como um fracasso. Tem dificuldade em crer que Deus ainda pode usá-lo poderosamente.",
    solutions: "🔥 1. Aceite que a dívida já foi paga. Cristo sofreu para que você não precisasse carregar mais esse peso.\n\n🔥 2. Entenda que não perdoar a si mesmo é um tipo de orgulho. É como dizer que seu pecado é maior que o sangue de Jesus.\n\n🔥 3. Comece a se ver como Deus o vê: perdoado, purificado, nova criatura.\n\n🔥 4. Assuma novos desafios na fé, mesmo se sentindo indigno. A obediência quebra o ciclo de autocondenação.",
    summary: "Você está vivendo como prisioneiro de um cárcere que já foi aberto. Deus já o libertou, mas você escolhe ficar algemado às suas falhas passadas. É tempo de aceitar o perdão divino e viver na liberdade que Cristo conquistou para você."
  }
];

// Updated calculation function to ensure accuracy
export const calculateResult = (answers: Map<number, string>): string => {
  // Initialize profile counts
  const profileCounts = new Map<string, number>();
  
  // Count the occurrence of each profile in the answers
  for (const profileId of answers.values()) {
    const currentCount = profileCounts.get(profileId) || 0;
    profileCounts.set(profileId, currentCount + 1);
  }
  
  // Find the profile with the most occurrences
  let maxCount = 0;
  let dominantProfileId = "";
  
  profileCounts.forEach((count, profileId) => {
    console.log(`Profile ${profileId}: ${count} occurrences`);
    if (count > maxCount) {
      maxCount = count;
      dominantProfileId = profileId;
    }
  });
  
  // If there's a tie, we need a tiebreaker
  const tieBreakerProfiles: string[] = [];
  profileCounts.forEach((count, profileId) => {
    if (count === maxCount) {
      tieBreakerProfiles.push(profileId);
    }
  });
  
  if (tieBreakerProfiles.length > 1) {
    console.log("Multiple profiles tied with most occurrences:", tieBreakerProfiles);
    
    // Use the profile that appeared in the most recent questions as tiebreaker
    // This assumes that later questions are more significant
    for (let questionId = questions.length; questionId >= 1; questionId--) {
      const profileForQuestion = answers.get(questionId);
      if (profileForQuestion && tieBreakerProfiles.includes(profileForQuestion)) {
        console.log(`Tiebreaker resolved with question ${questionId}, profile: ${profileForQuestion}`);
        return profileForQuestion;
      }
    }
  }
  
  console.log(`Dominant profile: ${dominantProfileId} with ${maxCount} occurrences`);
  return dominantProfileId || "Lamentador"; // Default to Lamentador if no profile is found
};
