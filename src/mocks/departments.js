import { phishingImages } from "./phishingAssets";
import phishingVideo from "@/assets/general/phishing/18-sgtm.mp4";
export const departments = [
  {
    id: "dep_general",
    name: "Général",
    modules: [
      {
        id: "mod_gen_1",
        title: "Phishing et ingénierie sociale",
        description:
          "Reconnaître les tentatives de phishing et d'ingénierie sociale, adopter les bons réflexes de vérification et savoir réagir en cas de doute.",
        imageUrl: phishingImages[0],
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_gen_1_1", title: "Pourquoi SGTM est concernée", order: 1, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[0], alt: "Pourquoi SGTM est concernée" }
          },
          {
            id: "ch_gen_1_2", title: "Qu'est-ce que le phishing ?", order: 2, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[1], alt: "Qu'est-ce que le phishing" }
          },
          {
            id: "ch_gen_1_3", title: "Qu'est-ce que l'ingénierie sociale ?", order: 3, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[2], alt: "Qu'est-ce que l'ingénierie sociale" }
          },
          {
            id: "ch_gen_1_4", title: "L'email de phishing", order: 4, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[3], alt: "L'email de phishing" }
          },
          {
            id: "ch_gen_1_5", title: "Spear-phishing et usurpation", order: 5, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[4], alt: "Spear-phishing et usurpation" }
          },
          {
            id: "ch_gen_1_6", title: "Smishing et messageries", order: 6, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[5], alt: "Smishing et messageries" }
          },
          {
            id: "ch_gen_1_7", title: "Vishing et faux support", order: 7, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[6], alt: "Vishing et faux support" }
          },
          {
            id: "ch_gen_1_8", title: "Vérifier l'expéditeur", order: 8, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[7], alt: "Vérifier l'expéditeur" }
          },
          {
            id: "ch_gen_1_9", title: "Contrôler le lien et la pièce jointe", order: 9, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[8], alt: "Contrôler le lien et la pièce jointe" }
          },
          {
            id: "ch_gen_1_10", title: "Reconnaître l'urgence et la manipulation", order: 10, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[9], alt: "Reconnaître l'urgence et la manipulation" }
          },
          {
            id: "ch_gen_1_11", title: "Le réflexe des 10 secondes", order: 11, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[10], alt: "Le réflexe des 10 secondes" }
          },
          {
            id: "ch_gen_1_12", title: "Vérifier par un autre canal", order: 12, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[11], alt: "Vérifier par un autre canal" }
          },
          {
            id: "ch_gen_1_13", title: "Ce que je ne partage jamais", order: 13, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[12], alt: "Ce que je ne partage jamais" }
          },
          {
            id: "ch_gen_1_14", title: "Cas SGTM — Faux changement de RIB", order: 14, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[13], alt: "Cas SGTM, faux changement de RIB" }
          },
          {
            id: "ch_gen_1_15", title: "Cas SGTM — Faux lien vers un dossier chantier", order: 15, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[14], alt: "Cas SGTM, faux lien vers un dossier chantier" }
          },
          {
            id: "ch_gen_1_16", title: "J'ai cliqué ou répondu : que faire ?", order: 16, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[15], alt: "J'ai cliqué ou répondu, que faire" }
          },
          {
            id: "ch_gen_1_17", title: "Le bon réflexe à retenir", order: 17, contentType: "infographic", durationSeconds: 120,
            body: { imageUrl: phishingImages[16], alt: "Le bon réflexe à retenir" }
          },
          {
            id: "ch_gen_1_18", title: "SGTM TEST VIDEO", order: 18, contentType: "video", durationSeconds: 300,
            body: { provider: "local", src: phishingVideo }
          },
        ],
        quiz: {
          id: "quiz_gen_1",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      }
    ],
    test: {
      id: "test_general",
      questionCount: 15,
      passThreshold: 80,
      timerSeconds: 1800,
      maxAttemptsPerDay: 3,
    },
  },
  {
    id: "dep_hr",
    name: "Ressources Humaines",
    modules: [
      {
        id: "mod_hr_1",
        title: "Protection des données personnelles des employés",
        description:
          "Comprenez vos obligations légales et éthiques dans le traitement des données RH confidentielles et apprenez à prévenir les fuites d'informations sensibles.",
        imageUrl:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_1_1",
            title: "Quelles sont les données RH sensibles",
            order: 1,
            contentType: "article",
            durationSeconds: 270,
          },
          {
            id: "ch_hr_1_2",
            title: "Obligations légales de confidentialité",
            order: 2,
            contentType: "video",
            durationSeconds: 360,
          },
          {
            id: "ch_hr_1_3",
            title: "Cycle de vie des données employé",
            order: 3,
            contentType: "infographic",
            durationSeconds: 210,
          },
          {
            id: "ch_hr_1_4",
            title: "Partage sécurisé des informations RH",
            order: 4,
            contentType: "article",
            durationSeconds: 240,
          },
          {
            id: "ch_hr_1_5",
            title: "Destruction sécurisée des documents papier",
            order: 5,
            contentType: "pdf",
            durationSeconds: 180,
          },
          {
            id: "ch_hr_1_6",
            title: "Procédure en cas de violation de données",
            order: 6,
            contentType: "link",
            durationSeconds: 300,
          },
        ],
        quiz: {
          id: "quiz_hr_1",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      },
      {
        id: "mod_hr_2",
        title: "Sensibilisation au phishing ciblant les RH",
        description:
          "Identifiez les attaques de phishing spécifiquement conçues pour le département RH, comme les faux CV, fausses candidatures et demandes de modification de coordonnées bancaires.",
        imageUrl:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_2_1",
            title: "Pourquoi les RH sont une cible privilégiée",
            order: 1,
            contentType: "article",
            durationSeconds: 240,
          },
          {
            id: "ch_hr_2_2",
            title: "Faux CV et pièces jointes malveillantes",
            order: 2,
            contentType: "video",
            durationSeconds: 330,
          },
          {
            id: "ch_hr_2_3",
            title: "Fraude au changement de RIB",
            order: 3,
            contentType: "infographic",
            durationSeconds: 210,
          },
          {
            id: "ch_hr_2_4",
            title: "Vérification des demandes de modification de données",
            order: 4,
            contentType: "article",
            durationSeconds: 270,
          },
          {
            id: "ch_hr_2_5",
            title: "Processus de validation interne",
            order: 5,
            contentType: "pdf",
            durationSeconds: 300,
          },
        ],
        quiz: {
          id: "quiz_hr_2",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      },
      {
        id: "mod_hr_3",
        title: "Sécurité du recrutement en ligne",
        description:
          "Sécurisez l'ensemble du processus de recrutement numérique, de la réception des candidatures à la collecte de documents d'identité, en passant par les entretiens vidéo.",
        imageUrl:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_3_1",
            title: "Risques liés aux plateformes de recrutement",
            order: 1,
            contentType: "article",
            durationSeconds: 240,
          },
          {
            id: "ch_hr_3_2",
            title: "Vérification de l'authenticité des candidats",
            order: 2,
            contentType: "video",
            durationSeconds: 300,
          },
          {
            id: "ch_hr_3_3",
            title: "Sécuriser les entretiens vidéo",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180,
          },
          {
            id: "ch_hr_3_4",
            title: "Collecte et stockage des pièces justificatives",
            order: 4,
            contentType: "pdf",
            durationSeconds: 270,
          },
          {
            id: "ch_hr_3_5",
            title: "Durée de conservation des données candidats",
            order: 5,
            contentType: "link",
            durationSeconds: 210,
          },
        ],
        quiz: {
          id: "quiz_hr_3",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      },
      {
        id: "mod_hr_4",
        title: "Sécurité physique et politique de bureau propre",
        description:
          "Appliquez les règles de sécurité physique au bureau, y compris la politique de bureau propre, le contrôle d'accès aux locaux et la protection contre les regards indiscrets.",
        imageUrl:
          "https://images.unsplash.com/photo-1497366754270-5e90d6c3aab0",
        order: 4,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_4_1",
            title: "La politique de bureau propre expliquée",
            order: 1,
            contentType: "article",
            durationSeconds: 210,
          },
          {
            id: "ch_hr_4_2",
            title: "Gestion des visiteurs et badges d'accès",
            order: 2,
            contentType: "video",
            durationSeconds: 270,
          },
          {
            id: "ch_hr_4_3",
            title: "Protection contre le shoulder surfing",
            order: 3,
            contentType: "infographic",
            durationSeconds: 150,
          },
          {
            id: "ch_hr_4_4",
            title: "Sécurisation des documents imprimés",
            order: 4,
            contentType: "article",
            durationSeconds: 240,
          },
          {
            id: "ch_hr_4_5",
            title: "Verrouillage systématique des postes de travail",
            order: 5,
            contentType: "pdf",
            durationSeconds: 180,
          },
          {
            id: "ch_hr_4_6",
            title: "Procédure d'accueil des prestataires externes",
            order: 6,
            contentType: "link",
            durationSeconds: 300,
          },
        ],
        quiz: {
          id: "quiz_hr_4",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      },
      {
        id: "mod_hr_5",
        title: "Formation continue et culture de sécurité",
        description:
          "Développez et maintenez une culture de sécurité solide au sein de l'organisation grâce à des programmes de formation continue et des campagnes de sensibilisation efficaces.",
        imageUrl:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
        order: 5,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_5_1",
            title: "Pourquoi la formation continue est essentielle",
            order: 1,
            contentType: "article",
            durationSeconds: 240,
          },
          {
            id: "ch_hr_5_2",
            title: "Concevoir un programme de sensibilisation",
            order: 2,
            contentType: "video",
            durationSeconds: 360,
          },
          {
            id: "ch_hr_5_3",
            title: "Indicateurs de succès d'une campagne",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180,
          },
          {
            id: "ch_hr_5_4",
            title: "Gestion des comportements à risque",
            order: 4,
            contentType: "article",
            durationSeconds: 300,
          },
          {
            id: "ch_hr_5_5",
            title: "Simulations de phishing internes",
            order: 5,
            contentType: "pdf",
            durationSeconds: 270,
          },
          {
            id: "ch_hr_5_6",
            title: "Ressources et référentiels utiles",
            order: 6,
            contentType: "link",
            durationSeconds: 210,
          },
        ],
        quiz: {
          id: "quiz_hr_5",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      },
      {
        id: "mod_hr_6",
        title: "Départ d'un employé et révocation des accès",
        description:
          "Maîtrisez les procédures de départ sécurisé, incluant la révocation immédiate des accès numériques, la récupération du matériel et la gestion des données résiduelles.",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        order: 6,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_6_1",
            title: "Checklist de départ sécurisé",
            order: 1,
            contentType: "pdf",
            durationSeconds: 240,
          },
          {
            id: "ch_hr_6_2",
            title: "Révocation des comptes et accès",
            order: 2,
            contentType: "article",
            durationSeconds: 270,
          },
          {
            id: "ch_hr_6_3",
            title: "Récupération du matériel informatique",
            order: 3,
            contentType: "video",
            durationSeconds: 300,
          },
          {
            id: "ch_hr_6_4",
            title: "Conservation légale des données après départ",
            order: 4,
            contentType: "infographic",
            durationSeconds: 180,
          },
          {
            id: "ch_hr_6_5",
            title: "Menace interne et départ conflictuel",
            order: 5,
            contentType: "article",
            durationSeconds: 330,
          },
          {
            id: "ch_hr_6_6",
            title: "Coordination avec le service informatique",
            order: 6,
            contentType: "link",
            durationSeconds: 210,
          },
        ],
        quiz: {
          id: "quiz_hr_6",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100,
        },
      },
    ],
    test: {
      id: "test_hr",
      questionCount: 15,
      passThreshold: 80,
      timerSeconds: 1800,
      maxAttemptsPerDay: 3,
    },
  },
];

export const ssiDocuments = [
  {
    id: "ssi_1",
    title: "Charte informatique",
    docType: "pdf",
    url: "/mock/sample-local-pdf.pdf",
    order: 1,
  },
  {
    id: "ssi_2",
    title: "Politique de sécurité",
    docType: "pdf",
    url: "/mock/sample.pdf",
    order: 2,
  },
  {
    id: "ssi_3",
    title: "Règlement d'usage des e-mails",
    docType: "link",
    url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjL4NGnxouWAxXV1QIHHQUfE3AQFnoECBwQAQ&url=https%3A%2F%2Fpdfobject.com%2Fpdf%2Fsample.pdf&usg=AOvVaw3HWVVnyP33AitFrGydCfJ4&opi=89978449",
    order: 3,
  },
];
