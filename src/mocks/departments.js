export const departments = [
  {
    id: "dep_it",
    name: "IT & Sécurité",
    modules: [
      {
        id: "mod_it_1",
        title: "Protection contre le phishing",
        description: "Apprenez à identifier et signaler les tentatives de phishing par email, SMS et appels téléphoniques pour protéger vos comptes et données sensibles.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_it_1_1",
            title: "Comprendre les mécanismes du phishing",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_it_1_2",
            title: "Reconnaître un email frauduleux",
            order: 2,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_it_1_3",
            title: "Le phishing par SMS et appels vocaux",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_it_1_4",
            title: "Que faire en cas de phishing avéré",
            order: 4,
            contentType: "article",
            durationSeconds: 210
          },
          {
            id: "ch_it_1_5",
            title: "Exercices pratiques de détection",
            order: 5,
            contentType: "pdf",
            durationSeconds: 360
          }
        ],
        quiz: {
          id: "quiz_it_1",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_it_2",
        title: "Sécurité des mots de passe et authentification multifacteur",
        description: "Maîtrisez les bonnes pratiques de création et gestion des mots de passe, et comprenez l'importance cruciale de l'authentification multifacteur pour sécuriser vos accès.",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_it_2_1",
            title: "Créer des mots de passe robustes",
            order: 1,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_it_2_2",
            title: "Les gestionnaires de mots de passe expliqués",
            order: 2,
            contentType: "video",
            durationSeconds: 330
          },
          {
            id: "ch_it_2_3",
            title: "Qu'est-ce que l'authentification multifacteur",
            order: 3,
            contentType: "infographic",
            durationSeconds: 150
          },
          {
            id: "ch_it_2_4",
            title: "Configurer la MFA sur vos comptes principaux",
            order: 4,
            contentType: "link",
            durationSeconds: 180
          },
          {
            id: "ch_it_2_5",
            title: "Éviter le partage non sécurisé d'identifiants",
            order: 5,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_it_2_6",
            title: "Checklist de sécurité des comptes",
            order: 6,
            contentType: "pdf",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_it_2",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_it_3",
        title: "Défense contre les ransomwares",
        description: "Découvrez comment les ransomwares infectent les systèmes, comment les prévenir efficacement et quelles actions entreprendre en cas d'attaque pour limiter les dégâts.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_it_3_1",
            title: "Fonctionnement d'un ransomware",
            order: 1,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_it_3_2",
            title: "Vecteurs d'infection courants",
            order: 2,
            contentType: "article",
            durationSeconds: 300
          },
          {
            id: "ch_it_3_3",
            title: "L'importance des sauvegardes régulières",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_it_3_4",
            title: "Stratégie de sauvegarde 3-2-1",
            order: 4,
            contentType: "pdf",
            durationSeconds: 240
          },
          {
            id: "ch_it_3_5",
            title: "Procédure en cas d'attaque ransomware",
            order: 5,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_it_3_6",
            title: "Pourquoi ne pas payer la rançon",
            order: 6,
            contentType: "link",
            durationSeconds: 150
          },
          {
            id: "ch_it_3_7",
            title: "Simulation d'une réponse à incident",
            order: 7,
            contentType: "video",
            durationSeconds: 420
          }
        ],
        quiz: {
          id: "quiz_it_3",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_it_4",
        title: "Sécurité du réseau Wi-Fi et VPN",
        description: "Comprenez les risques liés aux réseaux Wi-Fi publics et privés, et apprenez à utiliser un VPN pour protéger vos communications et données en transit.",
        imageUrl: "https://images.unsplash.com/photo-1565715883021-fb644e2f5e8b",
        order: 4,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_it_4_1",
            title: "Risques des réseaux Wi-Fi publics",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_it_4_2",
            title: "Configurer un réseau Wi-Fi domestique sécurisé",
            order: 2,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_it_4_3",
            title: "Comprendre le chiffrement WPA3",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_it_4_4",
            title: "Fonctionnement et avantages d'un VPN",
            order: 4,
            contentType: "article",
            durationSeconds: 300
          },
          {
            id: "ch_it_4_5",
            title: "Choisir et installer un VPN d'entreprise",
            order: 5,
            contentType: "pdf",
            durationSeconds: 240
          },
          {
            id: "ch_it_4_6",
            title: "Bonnes pratiques du télétravail sécurisé",
            order: 6,
            contentType: "link",
            durationSeconds: 180
          }
        ],
        quiz: {
          id: "quiz_it_4",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_it_5",
        title: "Sécurité des appareils mobiles",
        description: "Protégez vos smartphones et tablettes professionnels contre les menaces spécifiques aux environnements mobiles, du vol physique aux applications malveillantes.",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        order: 5,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_it_5_1",
            title: "Menaces spécifiques aux appareils mobiles",
            order: 1,
            contentType: "article",
            durationSeconds: 210
          },
          {
            id: "ch_it_5_2",
            title: "Sécuriser l'accès à votre smartphone",
            order: 2,
            contentType: "video",
            durationSeconds: 270
          },
          {
            id: "ch_it_5_3",
            title: "Permissions des applications mobiles",
            order: 3,
            contentType: "infographic",
            durationSeconds: 150
          },
          {
            id: "ch_it_5_4",
            title: "Chiffrement des données sur mobile",
            order: 4,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_it_5_5",
            title: "Que faire en cas de perte ou vol",
            order: 5,
            contentType: "pdf",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_it_5",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_it_6",
        title: "Ingénierie sociale et usurpation d'identité",
        description: "Identifiez les techniques de manipulation psychologique utilisées par les cybercriminels pour obtenir des informations confidentielles et apprenez à vous en protéger.",
        imageUrl: "https://images.unsplash.com/photo-1557425955-2a62ce13b8e2",
        order: 6,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_it_6_1",
            title: "Les principes de l'ingénierie sociale",
            order: 1,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_it_6_2",
            title: "Techniques de manipulation courantes",
            order: 2,
            contentType: "article",
            durationSeconds: 300
          },
          {
            id: "ch_it_6_3",
            title: "Le prétexte et l'usurpation d'identité",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_it_6_4",
            title: "Attaques par appâtage et clés USB piégées",
            order: 4,
            contentType: "video",
            durationSeconds: 240
          },
          {
            id: "ch_it_6_5",
            title: "Signalement des tentatives suspectes",
            order: 5,
            contentType: "article",
            durationSeconds: 210
          },
          {
            id: "ch_it_6_6",
            title: "Scénarios interactifs de détection",
            order: 6,
            contentType: "pdf",
            durationSeconds: 420
          }
        ],
        quiz: {
          id: "quiz_it_6",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      }
    ],
    test: {
      id: "test_it",
      questionCount: 15,
      passThreshold: 80,
      timerSeconds: 1800,
      maxAttemptsPerDay: 3
    }
  },
  {
    id: "dep_hr",
    name: "Ressources Humaines",
    modules: [
      {
        id: "mod_hr_1",
        title: "Protection des données personnelles des employés",
        description: "Comprenez vos obligations légales et éthiques dans le traitement des données RH confidentielles et apprenez à prévenir les fuites d'informations sensibles.",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_1_1",
            title: "Quelles sont les données RH sensibles",
            order: 1,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_hr_1_2",
            title: "Obligations légales de confidentialité",
            order: 2,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_hr_1_3",
            title: "Cycle de vie des données employé",
            order: 3,
            contentType: "infographic",
            durationSeconds: 210
          },
          {
            id: "ch_hr_1_4",
            title: "Partage sécurisé des informations RH",
            order: 4,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_hr_1_5",
            title: "Destruction sécurisée des documents papier",
            order: 5,
            contentType: "pdf",
            durationSeconds: 180
          },
          {
            id: "ch_hr_1_6",
            title: "Procédure en cas de violation de données",
            order: 6,
            contentType: "link",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_hr_1",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_hr_2",
        title: "Sensibilisation au phishing ciblant les RH",
        description: "Identifiez les attaques de phishing spécifiquement conçues pour le département RH, comme les faux CV, fausses candidatures et demandes de modification de coordonnées bancaires.",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_2_1",
            title: "Pourquoi les RH sont une cible privilégiée",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_hr_2_2",
            title: "Faux CV et pièces jointes malveillantes",
            order: 2,
            contentType: "video",
            durationSeconds: 330
          },
          {
            id: "ch_hr_2_3",
            title: "Fraude au changement de RIB",
            order: 3,
            contentType: "infographic",
            durationSeconds: 210
          },
          {
            id: "ch_hr_2_4",
            title: "Vérification des demandes de modification de données",
            order: 4,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_hr_2_5",
            title: "Processus de validation interne",
            order: 5,
            contentType: "pdf",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_hr_2",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_hr_3",
        title: "Sécurité du recrutement en ligne",
        description: "Sécurisez l'ensemble du processus de recrutement numérique, de la réception des candidatures à la collecte de documents d'identité, en passant par les entretiens vidéo.",
        imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_3_1",
            title: "Risques liés aux plateformes de recrutement",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_hr_3_2",
            title: "Vérification de l'authenticité des candidats",
            order: 2,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_hr_3_3",
            title: "Sécuriser les entretiens vidéo",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_hr_3_4",
            title: "Collecte et stockage des pièces justificatives",
            order: 4,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_hr_3_5",
            title: "Durée de conservation des données candidats",
            order: 5,
            contentType: "link",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_hr_3",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_hr_4",
        title: "Sécurité physique et politique de bureau propre",
        description: "Appliquez les règles de sécurité physique au bureau, y compris la politique de bureau propre, le contrôle d'accès aux locaux et la protection contre les regards indiscrets.",
        imageUrl: "https://images.unsplash.com/photo-1497366754270-5e90d6c3aab0",
        order: 4,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_4_1",
            title: "La politique de bureau propre expliquée",
            order: 1,
            contentType: "article",
            durationSeconds: 210
          },
          {
            id: "ch_hr_4_2",
            title: "Gestion des visiteurs et badges d'accès",
            order: 2,
            contentType: "video",
            durationSeconds: 270
          },
          {
            id: "ch_hr_4_3",
            title: "Protection contre le shoulder surfing",
            order: 3,
            contentType: "infographic",
            durationSeconds: 150
          },
          {
            id: "ch_hr_4_4",
            title: "Sécurisation des documents imprimés",
            order: 4,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_hr_4_5",
            title: "Verrouillage systématique des postes de travail",
            order: 5,
            contentType: "pdf",
            durationSeconds: 180
          },
          {
            id: "ch_hr_4_6",
            title: "Procédure d'accueil des prestataires externes",
            order: 6,
            contentType: "link",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_hr_4",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_hr_5",
        title: "Formation continue et culture de sécurité",
        description: "Développez et maintenez une culture de sécurité solide au sein de l'organisation grâce à des programmes de formation continue et des campagnes de sensibilisation efficaces.",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
        order: 5,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_5_1",
            title: "Pourquoi la formation continue est essentielle",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_hr_5_2",
            title: "Concevoir un programme de sensibilisation",
            order: 2,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_hr_5_3",
            title: "Indicateurs de succès d'une campagne",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_hr_5_4",
            title: "Gestion des comportements à risque",
            order: 4,
            contentType: "article",
            durationSeconds: 300
          },
          {
            id: "ch_hr_5_5",
            title: "Simulations de phishing internes",
            order: 5,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_hr_5_6",
            title: "Ressources et référentiels utiles",
            order: 6,
            contentType: "link",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_hr_5",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_hr_6",
        title: "Départ d'un employé et révocation des accès",
        description: "Maîtrisez les procédures de départ sécurisé, incluant la révocation immédiate des accès numériques, la récupération du matériel et la gestion des données résiduelles.",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        order: 6,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_hr_6_1",
            title: "Checklist de départ sécurisé",
            order: 1,
            contentType: "pdf",
            durationSeconds: 240
          },
          {
            id: "ch_hr_6_2",
            title: "Révocation des comptes et accès",
            order: 2,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_hr_6_3",
            title: "Récupération du matériel informatique",
            order: 3,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_hr_6_4",
            title: "Conservation légale des données après départ",
            order: 4,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_hr_6_5",
            title: "Menace interne et départ conflictuel",
            order: 5,
            contentType: "article",
            durationSeconds: 330
          },
          {
            id: "ch_hr_6_6",
            title: "Coordination avec le service informatique",
            order: 6,
            contentType: "link",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_hr_6",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      }
    ],
    test: {
      id: "test_hr",
      questionCount: 15,
      passThreshold: 80,
      timerSeconds: 1800,
      maxAttemptsPerDay: 3
    }
  },
  {
    id: "dep_fin",
    name: "Finance",
    modules: [
      {
        id: "mod_fin_1",
        title: "Fraude au président et compromission d'email professionnel",
        description: "Identifiez les tentatives de fraude au président et de Business Email Compromise ciblant les services financiers pour détourner des virements et paiements.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_1_1",
            title: "Qu'est-ce que la fraude au président",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_fin_1_2",
            title: "Scénarios réels de BEC",
            order: 2,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_fin_1_3",
            title: "Indices révélateurs d'un email frauduleux",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_fin_1_4",
            title: "Processus de validation des demandes de virement",
            order: 4,
            contentType: "article",
            durationSeconds: 300
          },
          {
            id: "ch_fin_1_5",
            title: "Mise en place de la double validation",
            order: 5,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_fin_1_6",
            title: "Procédure d'urgence en cas de fraude avérée",
            order: 6,
            contentType: "link",
            durationSeconds: 240
          }
        ],
        quiz: {
          id: "quiz_fin_1",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_fin_2",
        title: "Fraude fournisseur et faux RIB",
        description: "Protégez votre entreprise contre les fraudes aux fournisseurs, incluant l'usurpation de RIB et les fausses demandes de modification de coordonnées bancaires.",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_2_1",
            title: "Typologie des fraudes fournisseurs",
            order: 1,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_fin_2_2",
            title: "Comment les fraudeurs interceptent les factures",
            order: 2,
            contentType: "video",
            durationSeconds: 330
          },
          {
            id: "ch_fin_2_3",
            title: "Vérification systématique des RIB modifiés",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_fin_2_4",
            title: "Mise en place d'un canal de confirmation",
            order: 4,
            contentType: "pdf",
            durationSeconds: 300
          },
          {
            id: "ch_fin_2_5",
            title: "Sécurisation du processus achats-paiements",
            order: 5,
            contentType: "article",
            durationSeconds: 240
          }
        ],
        quiz: {
          id: "quiz_fin_2",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_fin_3",
        title: "Sécurisation des transactions bancaires en ligne",
        description: "Adoptez les meilleures pratiques pour sécuriser l'accès aux portails bancaires professionnels, valider les ordres de virement et protéger les jetons d'authentification.",
        imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_3_1",
            title: "Menaces sur les portails bancaires",
            order: 1,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_fin_3_2",
            title: "Utilisation sécurisée des jetons et certificats",
            order: 2,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_fin_3_3",
            title: "Détection des connexions suspectes",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_fin_3_4",
            title: "Limiter les montants et droits par utilisateur",
            order: 4,
            contentType: "pdf",
            durationSeconds: 210
          },
          {
            id: "ch_fin_3_5",
            title: "Réconciliation et contrôle quotidien",
            order: 5,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_fin_3_6",
            title: "Checklist de sécurité bancaire",
            order: 6,
            contentType: "link",
            durationSeconds: 180
          }
        ],
        quiz: {
          id: "quiz_fin_3",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_fin_4",
        title: "Conformité RGPD pour les données financières",
        description: "Comprenez les exigences du RGPD applicables aux données financières, y compris le consentement, la minimisation des données et les droits des personnes concernées.",
        imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
        order: 4,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_4_1",
            title: "Champ d'application du RGPD en finance",
            order: 1,
            contentType: "article",
            durationSeconds: 300
          },
          {
            id: "ch_fin_4_2",
            title: "Données financières personnelles identifiées",
            order: 2,
            contentType: "infographic",
            durationSeconds: 240
          },
          {
            id: "ch_fin_4_3",
            title: "Principe de minimisation appliqué",
            order: 3,
            contentType: "video",
            durationSeconds: 270
          },
          {
            id: "ch_fin_4_4",
            title: "Droits d'accès et de rectification",
            order: 4,
            contentType: "pdf",
            durationSeconds: 210
          },
          {
            id: "ch_fin_4_5",
            title: "Notification des violations de données",
            order: 5,
            contentType: "link",
            durationSeconds: 330
          }
        ],
        quiz: {
          id: "quiz_fin_4",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_fin_5",
        title: "Gestion des accès et des habilitations financières",
        description: "Appliquez le principe du moindre privilège aux systèmes financiers, gérez les habilitations par profil et assurez une revue périodique des droits d'accès.",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        order: 5,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_5_1",
            title: "Le principe du moindre privilège en finance",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_fin_5_2",
            title: "Cartographie des rôles et droits",
            order: 2,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_fin_5_3",
            title: "Revue trimestrielle des habilitations",
            order: 3,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_fin_5_4",
            title: "Segrégation des tâches obligatoire",
            order: 4,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_fin_5_5",
            title: "Gestion des comptes à privilèges élevés",
            order: 5,
            contentType: "article",
            durationSeconds: 330
          },
          {
            id: "ch_fin_5_6",
            title: "Traçabilité et audit des actions",
            order: 6,
            contentType: "link",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_fin_5",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_fin_6",
        title: "Protection contre le vol de données financières",
        description: "Mettez en place des mesures techniques et organisationnelles pour protéger les données financières sensibles contre le vol, la fuite et l'espionnage industriel.",
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f2",
        order: 6,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_6_1",
            title: "Classification des données financières",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_fin_6_2",
            title: "Chiffrement des fichiers et des emails",
            order: 2,
            contentType: "video",
            durationSeconds: 360
          },
          {
            id: "ch_fin_6_3",
            title: "Partage sécurisé avec les tiers",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_fin_6_4",
            title: "Prévention des fuites par messagerie",
            order: 4,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_fin_6_5",
            title: "Surveillance des accès anormaux",
            order: 5,
            contentType: "article",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_fin_6",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_fin_7",
        title: "Sécurité des données dans le cloud financier",
        description: "Évaluez les risques liés au stockage et au traitement des données financières dans le cloud et appliquez les configurations de sécurité adaptées à ces environnements.",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
        order: 7,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_fin_7_1",
            title: "Modèles de responsabilité partagée",
            order: 1,
            contentType: "article",
            durationSeconds: 270
          },
          {
            id: "ch_fin_7_2",
            title: "Chiffrement au repos et en transit",
            order: 2,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_fin_7_3",
            title: "Configuration des contrôles d'accès cloud",
            order: 3,
            contentType: "infographic",
            durationSeconds: 210
          },
          {
            id: "ch_fin_7_4",
            title: "Sauvegarde et reprise d'activité",
            order: 4,
            contentType: "pdf",
            durationSeconds: 240
          },
          {
            id: "ch_fin_7_5",
            title: "Audit des fournisseurs cloud",
            order: 5,
            contentType: "link",
            durationSeconds: 330
          }
        ],
        quiz: {
          id: "quiz_fin_7",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      }
    ],
    test: {
      id: "test_fin",
      questionCount: 15,
      passThreshold: 80,
      timerSeconds: 1800,
      maxAttemptsPerDay: 3
    }
  },
  {
    id: "dep_sales",
    name: "Commercial & Marketing",
    modules: [
      {
        id: "mod_sales_1",
        title: "Sécurité du CRM et des données clients",
        description: "Protégez les informations confidentielles de vos clients stockées dans le CRM contre les accès non autorisés, les fuites et les utilisations abusives.",
        imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093",
        order: 1,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_sales_1_1",
            title: "Valeur des données clients pour les cybercriminels",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_sales_1_2",
            title: "Sécurisation de l'accès au CRM",
            order: 2,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_sales_1_3",
            title: "Permissions granuleuses par rôle commercial",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_sales_1_4",
            title: "Export et partage sécurisé des contacts",
            order: 4,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_sales_1_5",
            title: "Nettoyage et suppression des données obsolètes",
            order: 5,
            contentType: "article",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_sales_1",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_sales_2",
        title: "Phishing ciblant les équipes commerciales",
        description: "Reconnaissez les tentatives de phishing spécifiques aux fonctions commerciales, comme les fausses demandes de devis, les usurpations de prospects et les liens malveillants.",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        order: 2,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_sales_2_1",
            title: "Pourquoi les commerciaux sont ciblés",
            order: 1,
            contentType: "article",
            durationSeconds: 210
          },
          {
            id: "ch_sales_2_2",
            title: "Fausses demandes de devis et propositions",
            order: 2,
            contentType: "video",
            durationSeconds: 330
          },
          {
            id: "ch_sales_2_3",
            title: "Usurpation de prospects connus",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_sales_2_4",
            title: "Vérification avant ouverture des pièces jointes",
            order: 4,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_sales_2_5",
            title: "Signalement des emails suspects",
            order: 5,
            contentType: "pdf",
            durationSeconds: 150
          }
        ],
        quiz: {
          id: "quiz_sales_2",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_sales_3",
        title: "Sécurité des événements et salons professionnels",
        description: "Protégez les informations sensibles lors des salons et événements professionnels, incluant la collecte de leads, les démonstrations et la sécurité physique des stands.",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        order: 3,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_sales_3_1",
            title: "Risques spécifiques aux salons professionnels",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_sales_3_2",
            title: "Collecte sécurisée des leads et cartes de visite",
            order: 2,
            contentType: "video",
            durationSeconds: 270
          },
          {
            id: "ch_sales_3_3",
            title: "Protection des démonstrations sur écran",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_sales_3_4",
            title: "Sécurisation des appareils mobiles en déplacement",
            order: 4,
            contentType: "pdf",
            durationSeconds: 300
          },
          {
            id: "ch_sales_3_5",
            title: "Wi-Fi public et connexion en salon",
            order: 5,
            contentType: "link",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_sales_3",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_sales_4",
        title: "Protection de la propriété intellectuelle commerciale",
        description: "Préservez la confidentialité des stratégies commerciales, listes de prix, présentations et propositions face aux risques de fuite et d'espionnage concurrentiel.",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        order: 4,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_sales_4_1",
            title: "Qu'est-ce que la propriété intellectuelle commerciale",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_sales_4_2",
            title: "Classification des documents sensibles",
            order: 2,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_sales_4_3",
            title: "Partage sécurisé avec les partenaires",
            order: 3,
            contentType: "video",
            durationSeconds: 300
          },
          {
            id: "ch_sales_4_4",
            title: "Accords de confidentialité et clauses NDA",
            order: 4,
            contentType: "pdf",
            durationSeconds: 270
          },
          {
            id: "ch_sales_4_5",
            title: "Destruction des documents après usage",
            order: 5,
            contentType: "article",
            durationSeconds: 210
          }
        ],
        quiz: {
          id: "quiz_sales_4",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      },
      {
        id: "mod_sales_5",
        title: "Utilisation sécurisée des réseaux sociaux professionnels",
        description: "Maîtrisez les risques liés à l'utilisation des réseaux sociaux à des fins professionnelles, évitez les fuites d'informations et protégez votre e-réputation.",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
        order: 5,
        readingTimerSeconds: 180,
        chapters: [
          {
            id: "ch_sales_5_1",
            title: "Risques de l'oversharing professionnel",
            order: 1,
            contentType: "article",
            durationSeconds: 240
          },
          {
            id: "ch_sales_5_2",
            title: "Paramètres de confidentialité essentiels",
            order: 2,
            contentType: "video",
            durationSeconds: 270
          },
          {
            id: "ch_sales_5_3",
            title: "Détection des faux profils et approches suspectes",
            order: 3,
            contentType: "infographic",
            durationSeconds: 180
          },
          {
            id: "ch_sales_5_4",
            title: "Séparation vie professionnelle et personnelle",
            order: 4,
            contentType: "article",
            durationSeconds: 210
          },
          {
            id: "ch_sales_5_5",
            title: "Charte d'utilisation des réseaux sociaux",
            order: 5,
            contentType: "pdf",
            durationSeconds: 300
          }
        ],
        quiz: {
          id: "quiz_sales_5",
          questionCount: 5,
          timerSeconds: 300,
          passThreshold: 100
        }
      }
    ],
    test: {
      id: "test_sales",
      questionCount: 15,
      passThreshold: 80,
      timerSeconds: 1800,
      maxAttemptsPerDay: 3
    }
  }
];

export const ssiDocuments = [
  { id: "ssi_1", title: "Charte informatique", docType: "pdf", url: "/mock/charte.pdf", order: 1 },
  { id: "ssi_2", title: "Politique de sécurité", docType: "pdf", url: "/mock/politique.pdf", order: 2 },
  { id: "ssi_3", title: "Règlement d'usage des e-mails", docType: "link", url: "https://example.com/email-policy", order: 3 },
]
