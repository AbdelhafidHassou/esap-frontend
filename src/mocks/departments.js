export const departments = [
  {
    id: "dep_it",
    name: "IT & Sécurité",
    modules: [
      {
        id: "mod_it_1",
        title: "Reconnaître le phishing",
        description: "Identifier les e-mails frauduleux et les pièges courants.",
        imageUrl: "https://images.unsplash.com/photo-1654588831193-0285dab84d5a?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          { id: "ch_it_1_1", title: "Qu'est-ce que le phishing ?", order: 1, contentType: "article", durationSeconds: 300 },
          { id: "ch_it_1_2", title: "Les signaux d'alerte", order: 2, contentType: "infographic", durationSeconds: 180 },
          { id: "ch_it_1_3", title: "Étude de cas vidéo", order: 3, contentType: "video", durationSeconds: 420 },
        ],
        quiz: { id: "quiz_it_1", questionCount: 5, timerSeconds: 300, passThreshold: 100 },
      },
      {
        id: "mod_it_2",
        title: "Mots de passe robustes",
        description: "Créer et gérer des mots de passe sûrs.",
        imageUrl: "https://images.unsplash.com/photo-1762330472502-83efbe1d4478?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          { id: "ch_it_2_1", title: "Pourquoi les mots de passe faibles échouent", order: 1, contentType: "article", durationSeconds: 300 },
          { id: "ch_it_2_2", title: "Gestionnaires de mots de passe", order: 2, contentType: "pdf", durationSeconds: 240 },
          { id: "ch_it_2_3", title: "Bonnes pratiques", order: 3, contentType: "link", durationSeconds: 120 },
        ],
        quiz: { id: "quiz_it_2", questionCount: 5, timerSeconds: 300, passThreshold: 100 },
      },
      {
        id: "mod_it_3",
        title: "Ingénierie sociale",
        description: "Comprendre les manipulations humaines.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          { id: "ch_it_3_1", title: "Les techniques de manipulation", order: 1, contentType: "article", durationSeconds: 300 },
          { id: "ch_it_3_2", title: "Cas réels", order: 2, contentType: "video", durationSeconds: 360 },
          { id: "ch_it_3_3", title: "Se protéger", order: 3, contentType: "infographic", durationSeconds: 180 },
        ],
        quiz: { id: "quiz_it_3", questionCount: 5, timerSeconds: 300, passThreshold: 100 },
      },
    ],
    test: { id: "test_it", questionCount: 15, passThreshold: 80, timerSeconds: 1800, maxAttemptsPerDay: 3 },
  },
  {
    id: "dep_hr",
    name: "Ressources Humaines",
    modules: [
      {
        id: "mod_hr_1",
        title: "Fraude au président (BEC)",
        description: "Détecter les arnaques par usurpation de dirigeant.",
        imageUrl: "https://images.unsplash.com/photo-1674049404913-2005c02245fa?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          { id: "ch_hr_1_1", title: "Qu'est-ce que le BEC ?", order: 1, contentType: "article", durationSeconds: 300 },
          { id: "ch_hr_1_2", title: "Anatomie d'une fraude", order: 2, contentType: "video", durationSeconds: 400 },
          { id: "ch_hr_1_3", title: "Vérifier avant d'agir", order: 3, contentType: "infographic", durationSeconds: 180 },
        ],
        quiz: { id: "quiz_hr_1", questionCount: 5, timerSeconds: 300, passThreshold: 100 },
      },
      {
        id: "mod_hr_2",
        title: "Protection des données personnelles",
        description: "Manipuler les données RH en conformité.",
        imageUrl: "https://images.unsplash.com/photo-1762330465065-af76f23809db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          { id: "ch_hr_2_1", title: "Données sensibles", order: 1, contentType: "article", durationSeconds: 300 },
          { id: "ch_hr_2_2", title: "Règles de conservation", order: 2, contentType: "pdf", durationSeconds: 240 },
          { id: "ch_hr_2_3", title: "En cas de fuite", order: 3, contentType: "link", durationSeconds: 120 },
        ],
        quiz: { id: "quiz_hr_2", questionCount: 5, timerSeconds: 300, passThreshold: 100 },
      },
      {
        id: "mod_hr_3",
        title: "Sécurité au quotidien",
        description: "Bureau propre, écrans verrouillés, vigilance.",
        imageUrl: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          { id: "ch_hr_3_1", title: "Le bureau propre", order: 1, contentType: "article", durationSeconds: 240 },
          { id: "ch_hr_3_2", title: "Appareils mobiles", order: 2, contentType: "video", durationSeconds: 300 },
          { id: "ch_hr_3_3", title: "Check-list", order: 3, contentType: "infographic", durationSeconds: 150 },
        ],
        quiz: { id: "quiz_hr_3", questionCount: 5, timerSeconds: 300, passThreshold: 100 },
      },
    ],
    test: { id: "test_hr", questionCount: 15, passThreshold: 80, timerSeconds: 1800, maxAttemptsPerDay: 3 },
  },
]

export const ssiDocuments = [
  { id: "ssi_1", title: "Charte informatique", docType: "pdf", url: "/mock/charte.pdf", order: 1 },
  { id: "ssi_2", title: "Politique de sécurité", docType: "pdf", url: "/mock/politique.pdf", order: 2 },
  { id: "ssi_3", title: "Règlement d'usage des e-mails", docType: "link", url: "https://example.com/email-policy", order: 3 },
]