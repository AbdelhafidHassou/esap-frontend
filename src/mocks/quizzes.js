export const quizzes = {
  quiz_accueil: [
    {
      id: "q_accueil_1",
      text: "Un nouveau collaborateur s'absente quelques minutes de son poste. Quel est le bon réflexe ?",
      hint: "Un poste laissé ouvert est un accès offert.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Laisser la session ouverte si le bureau est occupé",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Verrouiller sa session avant de s'absenter",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Éteindre systématiquement l'ordinateur",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Donner son mot de passe à un collègue",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_accueil_2",
      text: "Concernant les comptes et accès professionnels, quelle règle s'applique dès l'arrivée chez SGTM ?",
      hint: "Un accès, c'est une identité. Elle ne se prête pas.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Les accès sont personnels et ne doivent pas être prêtés",
          isCorrect: true,
        },
        {
          id: "b",
          text: "Les comptes peuvent être partagés au sein d'une même équipe",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Le mot de passe peut être communiqué au manager",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Un compte générique est toujours préférable",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_accueil_3",
      text: "Un nouvel arrivant souhaite installer rapidement un outil trouvé sur Internet pour gagner du temps. Que doit-il faire ?",
      hint: "Seuls les outils validés par SGTM sont autorisés.",
      type: "single",
      options: [
        {
          id: "a",
          text: "L'installer si l'outil est gratuit",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Demander à un collègue de l'installer",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Utiliser uniquement les outils et logiciels autorisés par SGTM",
          isCorrect: true,
        },
        { id: "d", text: "L'installer puis prévenir la DSI", isCorrect: false },
      ],
    },
    {
      id: "q_accueil_4",
      text: "Vous recevez un message inhabituel demandant une action urgente sur votre compte. Quel est le meilleur réflexe ?",
      hint: "L'urgence est un levier de manipulation. Vérifiez.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Exécuter la demande pour éviter un blocage",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Vérifier la demande et signaler en cas de doute",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Transférer le message à tous les collègues",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Répondre avec son mot de passe pour confirmer son identité",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_accueil_5",
      text: "Vous constatez un comportement inhabituel de votre poste de travail. Que faut-il faire ?",
      hint: "Signaler vite limite l'impact.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Continuer à travailler tant que le poste fonctionne",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Chercher seul une solution sur Internet",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Signaler rapidement le doute ou l'incident selon le canal prévu",
          isCorrect: true,
        },
        {
          id: "d",
          text: "Supprimer les fichiers qui semblent suspects",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_culture: [
    {
      id: "q_culture_1",
      text: "Pourquoi l'information doit-elle être protégée chez SGTM ?",
      hint: "Pense à l'impact : activité, finances, juridique, image.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Parce que toute information doit rester secrète",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Parce qu'une perte, altération ou divulgation peut impacter l'activité, les finances, le juridique ou l'image",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Uniquement pour respecter ISO 27001",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Uniquement pour protéger les ordinateurs",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_culture_2",
      text: "Que signifie la disponibilité dans le triptyque DIC ?",
      hint: "La bonne info, au bon moment, aux bonnes personnes.",
      type: "single",
      options: [
        {
          id: "a",
          text: "L'information est accessible au bon moment aux personnes autorisées",
          isCorrect: true,
        },
        {
          id: "b",
          text: "L'information est toujours publique",
          isCorrect: false,
        },
        {
          id: "c",
          text: "L'information ne peut jamais être modifiée",
          isCorrect: false,
        },
        { id: "d", text: "L'information doit être imprimée", isCorrect: false },
      ],
    },
    {
      id: "q_culture_3",
      text: "Que signifie l'intégrité de l'information ?",
      hint: "Exacte, complète, non altérée.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Elle est stockée uniquement sur papier",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Elle reste exacte, complète et protégée contre les modifications non maîtrisées",
          isCorrect: true,
        },
        { id: "c", text: "Elle est accessible à tous", isCorrect: false },
        {
          id: "d",
          text: "Elle est supprimée après chaque utilisation",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_culture_4",
      text: "Qu'est-ce qu'un SMSI ?",
      hint: "Ce n'est pas un logiciel : c'est une organisation.",
      type: "single",
      options: [
        { id: "a", text: "Un logiciel de cybersécurité", isCorrect: false },
        {
          id: "b",
          text: "Un ensemble organisé de responsabilités, règles et contrôles pour piloter la sécurité de l'information",
          isCorrect: true,
        },
        { id: "c", text: "Un antivirus", isCorrect: false },
        { id: "d", text: "Un registre de mots de passe", isCorrect: false },
      ],
    },
    {
      id: "q_culture_5",
      text: "Quel comportement contribue à l'amélioration continue de la sécurité ?",
      hint: "Appliquer, signaler, partager.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Cacher les erreurs pour éviter les remarques",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Appliquer les règles, signaler les problèmes et partager les bons réflexes",
          isCorrect: true,
        },
        { id: "c", text: "Attendre uniquement les audits", isCorrect: false },
        {
          id: "d",
          text: "Laisser la sécurité aux seules équipes IT",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_phishing: [
    {
      id: "q_phishing_1",
      text: "Qu'est-ce que le phishing ?",
      hint: "Ce n'est pas un problème technique : ça vise la personne.",
      type: "single",
      options: [
        { id: "a", text: "Un problème de connexion réseau", isCorrect: false },
        {
          id: "b",
          text: "Une tentative frauduleuse destinée à pousser une personne à cliquer, répondre, payer ou révéler une information",
          isCorrect: true,
        },
        { id: "c", text: "Une mise à jour système", isCorrect: false },
        { id: "d", text: "Un outil de sauvegarde", isCorrect: false },
      ],
    },
    {
      id: "q_phishing_2",
      text: "Quels leviers sont souvent utilisés en ingénierie sociale ?",
      hint: "Pense aux émotions qui poussent à agir vite.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Urgence, autorité, curiosité, peur ou routine",
          isCorrect: true,
        },
        {
          id: "b",
          text: "Uniquement des erreurs techniques",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Uniquement des pièces jointes PDF",
          isCorrect: false,
        },
        { id: "d", text: "La météo et la localisation", isCorrect: false },
      ],
    },
    {
      id: "q_phishing_3",
      text: "Vous recevez un e-mail urgent semblant venir d'un dirigeant et demandant un virement inhabituel. Que faites-vous ?",
      hint: "Vérifie toujours par un canal que tu maîtrises.",
      type: "single",
      options: [
        {
          id: "a",
          text: "J'exécute rapidement pour respecter l'urgence",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Je vérifie la demande par un canal fiable avant toute action",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Je réponds en demandant les coordonnées bancaires",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Je transfère le message à un fournisseur",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_phishing_4",
      text: "Que recherchent fréquemment les fraudeurs dans une attaque de phishing ?",
      hint: "Tout ce qui donne accès ou de l'argent.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Identifiants, mots de passe, codes MFA, données sensibles ou paiements",
          isCorrect: true,
        },
        {
          id: "b",
          text: "Uniquement les horaires de travail",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Uniquement des photos de chantier",
          isCorrect: false,
        },
        { id: "d", text: "Les mises à jour logicielles", isCorrect: false },
      ],
    },
    {
      id: "q_phishing_5",
      text: "Vous avez cliqué sur un lien suspect avant de vous rendre compte du risque. Que devez-vous faire ?",
      hint: "Signaler vite limite l'impact.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Ne rien dire si rien ne semble se passer",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Signaler immédiatement ce qui s'est passé et suivre les consignes",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Supprimer l'historique du navigateur",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Envoyer le lien à un collègue pour test",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_mdp_mfa: [
    {
      id: "q_mdp_mfa_1",
      text: "Quel mot de passe offre la meilleure protection ?",
      hint: "Long, unique, difficile à deviner.",
      type: "single",
      options: [
        { id: "a", text: "SGTM2026", isCorrect: false },
        { id: "b", text: "Yasmina123", isCorrect: false },
        {
          id: "c",
          text: "Une phrase de passe longue, unique et difficile à deviner",
          isCorrect: true,
        },
        {
          id: "d",
          text: "Le même mot de passe que sur ses comptes personnels",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_mdp_mfa_2",
      text: "Pourquoi ne faut-il pas réutiliser le même mot de passe sur plusieurs comptes ?",
      hint: "Une fuite, et tout tombe.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Parce qu'il devient plus difficile à mémoriser",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Parce qu'un seul mot de passe compromis peut exposer plusieurs comptes",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Parce que le MFA ne fonctionne plus",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Parce que les mots de passe doivent changer chaque jour",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_mdp_mfa_3",
      text: "Vous recevez une demande de validation MFA alors que vous n'êtes pas en train de vous connecter. Que faites-vous ?",
      hint: "Si ce n'est pas toi, refuse.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Je valide pour faire disparaître la notification",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Je refuse la demande et je signale si nécessaire",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Je communique le code à un collègue",
          isCorrect: false,
        },
        { id: "d", text: "Je désactive le MFA", isCorrect: false },
      ],
    },
    {
      id: "q_mdp_mfa_4",
      text: "À quoi sert un gestionnaire de mots de passe autorisé ?",
      hint: "Stocker et générer, en sécurité.",
      type: "single",
      options: [
        {
          id: "a",
          text: "À partager les mots de passe avec toute l'équipe",
          isCorrect: false,
        },
        {
          id: "b",
          text: "À stocker et générer de manière sécurisée des mots de passe uniques",
          isCorrect: true,
        },
        { id: "c", text: "À supprimer le besoin de MFA", isCorrect: false },
        {
          id: "d",
          text: "À utiliser un seul mot de passe partout",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_mdp_mfa_5",
      text: "Vous pensez que votre mot de passe professionnel a été compromis. Quel est le bon réflexe ?",
      hint: "Changer vite, signaler le doute.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Attendre de voir si le compte est utilisé",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Le modifier rapidement selon la procédure et signaler le doute",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Le communiquer au support par e-mail",
          isCorrect: false,
        },
        { id: "d", text: "Créer un second compte personnel", isCorrect: false },
      ],
    },
  ],

  quiz_proteger: [
    {
      id: "q_proteger_1",
      text: "Avant de partager un document professionnel, que faut-il vérifier ?",
      hint: "Sensibilité, destinataire, besoin, canal.",
      type: "single",
      options: [
        { id: "a", text: "Uniquement son nom de fichier", isCorrect: false },
        {
          id: "b",
          text: "Son niveau de sensibilité, le destinataire, le besoin et le canal utilisé",
          isCorrect: true,
        },
        { id: "c", text: "Uniquement sa taille", isCorrect: false },
        { id: "d", text: "Si un collègue l'a déjà vu", isCorrect: false },
      ],
    },
    {
      id: "q_proteger_2",
      text: "Que faire d'un document sensible imprimé ?",
      hint: "Ne le laisse pas traîner sur l'imprimante.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Le laisser sur l'imprimante jusqu'à la fin de la journée",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Le récupérer rapidement, le ranger et le détruire de façon sécurisée lorsqu'il n'est plus utile",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Le déposer dans une poubelle classique",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Le photographier pour en garder une copie",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_proteger_3",
      text: "En mobilité ou sur chantier, quel comportement protège l'information ?",
      hint: "Garde le contrôle, évite les regards.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Laisser l'écran visible pour faciliter les échanges",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Garder les documents et équipements sous contrôle et éviter les regards indiscrets",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Stocker les fichiers sur une clé USB personnelle",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Envoyer les fichiers sur sa messagerie privée",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_proteger_4",
      text: "Où doit-on stocker les informations professionnelles ?",
      hint: "Uniquement sur les espaces autorisés.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Sur les espaces et outils autorisés par SGTM",
          isCorrect: true,
        },
        { id: "b", text: "Sur n'importe quel cloud gratuit", isCorrect: false },
        { id: "c", text: "Sur une messagerie personnelle", isCorrect: false },
        {
          id: "d",
          text: "Sur un téléphone personnel non maîtrisé",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_proteger_5",
      text: "Vous ne savez pas si une information peut être partagée. Que faites-vous ?",
      hint: "Demander avant, pas après.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Je partage puis je demande ensuite",
          isCorrect: false,
        },
        { id: "b", text: "Je demande avant d'agir", isCorrect: true },
        {
          id: "c",
          text: "Je l'envoie uniquement à moi-même",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Je la publie dans un groupe interne",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_ransomware: [
    {
      id: "q_ransomware_1",
      text: "Quel signe peut indiquer une attaque par ransomware ?",
      hint: "Fichiers illisibles, demande de rançon.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Des fichiers devenus illisibles ou une demande de rançon",
          isCorrect: true,
        },
        { id: "b", text: "Une batterie faible", isCorrect: false },
        { id: "c", text: "Une réunion annulée", isCorrect: false },
        { id: "d", text: "Un e-mail légitime de la DSI", isCorrect: false },
      ],
    },
    {
      id: "q_ransomware_2",
      text: "Face à un comportement évoquant un ransomware, quel est le premier réflexe ?",
      hint: "S'arrêter, limiter, signaler.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Continuer à ouvrir les fichiers pour vérifier",
          isCorrect: false,
        },
        {
          id: "b",
          text: "S'arrêter, limiter la propagation et signaler rapidement",
          isCorrect: true,
        },
        { id: "c", text: "Payer immédiatement", isCorrect: false },
        {
          id: "d",
          text: "Copier tous les fichiers sur une clé USB",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_ransomware_3",
      text: "Pourquoi les sauvegardes sont-elles importantes face au ransomware ?",
      hint: "Elles permettent la reprise, si bien protégées.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Elles empêchent tous les incidents",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Elles peuvent permettre de restaurer l'activité si elles sont correctement réalisées et protégées",
          isCorrect: true,
        },
        { id: "c", text: "Elles remplacent l'antivirus", isCorrect: false },
        {
          id: "d",
          text: "Elles évitent d'avoir à signaler l'incident",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_ransomware_4",
      text: "Que ne faut-il surtout pas faire après avoir découvert un incident ransomware ?",
      hint: "Ne jamais cacher ni bricoler seul.",
      type: "single",
      options: [
        { id: "a", text: "Signaler l'incident", isCorrect: false },
        {
          id: "b",
          text: "Préserver les informations utiles",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Cacher l'incident ou tenter de tout réparer seul",
          isCorrect: true,
        },
        {
          id: "d",
          text: "Suivre les consignes des équipes compétentes",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_ransomware_5",
      text: "Vous avez cliqué sur une pièce jointe puis des fichiers deviennent inaccessibles. Quelle réaction est la plus appropriée ?",
      hint: "Arrêter, isoler si possible, signaler.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Tester d'autres dossiers pour voir si le problème se propage",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Arrêter les manipulations, isoler si cela peut être fait sans risque et signaler immédiatement",
          isCorrect: true,
        },
        { id: "c", text: "Redémarrer plusieurs fois", isCorrect: false },
        {
          id: "d",
          text: "Envoyer le fichier à plusieurs collègues pour avis",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_fovi: [
    {
      id: "q_fovi_1",
      text: "Quel est l'objectif principal d'une fraude au virement (FOVI) ?",
      hint: "Détourner l'argent vers un autre compte.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Détourner un paiement vers le compte d'un escroc",
          isCorrect: true,
        },
        {
          id: "b",
          text: "Bloquer définitivement la messagerie",
          isCorrect: false,
        },
        { id: "c", text: "Ralentir les chantiers", isCorrect: false },
      ],
    },
    {
      id: "q_fovi_2",
      text: "Un fournisseur annonce un nouveau RIB avant une échéance. Que faites-vous ?",
      hint: "Un changement de RIB se confirme toujours à la source.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Je confirme auprès d'un contact fournisseur déjà connu puis je suis la procédure",
          isCorrect: true,
        },
        { id: "b", text: "Je modifie le RIB immédiatement", isCorrect: false },
        {
          id: "c",
          text: "Je fais un petit virement test sans validation",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_fovi_3",
      text: "Un e-mail du « dirigeant » demande un virement urgent et confidentiel. Quel est le bon réflexe ?",
      hint: "Aucun dirigeant n'exige un virement en secret et dans l'urgence.",
      type: "single",
      options: [
        { id: "a", text: "Payer pour éviter un retard", isCorrect: false },
        {
          id: "b",
          text: "Vérifier l'identité par un canal connu et suivre le circuit de validation",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Répondre au même message pour demander confirmation",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_fovi_4",
      text: "Un « conseiller bancaire » vous appelle et réclame un code de validation. Que faites-vous ?",
      hint: "Un code de validation ne se communique jamais.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Je communique le code puisque c'est la banque",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Je refuse et je rappelle la banque via un numéro officiel connu",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Je donne uniquement les deux premiers chiffres",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_fovi_5",
      text: "Quel trio résume les réflexes anti-FOVI ?",
      hint: "Trois gestes simples face à l'urgence.",
      type: "single",
      options: [
        { id: "a", text: "Ralentir, vérifier, signaler", isCorrect: true },
        { id: "b", text: "Payer, supprimer, oublier", isCorrect: false },
        { id: "c", text: "Répondre, cliquer, transmettre", isCorrect: false },
      ],
    },
  ],

  quiz_sous_traitants: [
    {
      id: "q_sous_traitants_1",
      text: "Pourquoi les sous-traitants et tiers font-ils partie du périmètre de sécurité SGTM ?",
      hint: "Ils peuvent accéder à des ressources SGTM.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Parce qu'ils sont toujours employés par SGTM",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Parce qu'ils peuvent accéder à des sites, systèmes, outils, informations ou données SGTM",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Uniquement parce qu'ils travaillent sur les chantiers",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_sous_traitants_2",
      text: "Que signifie le principe du moindre privilège ?",
      hint: "Le strict nécessaire, le temps nécessaire.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Donner un accès large pour éviter les demandes complémentaires",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Donner uniquement les accès strictement nécessaires, pendant la durée utile",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Créer un compte partagé pour toute l'équipe du prestataire",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_sous_traitants_3",
      text: "Un prestataire se présente pour intervenir. Quelle est la bonne première action ?",
      hint: "Vérifier avant d'ouvrir tout accès.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Lui donner un accès pour gagner du temps",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Vérifier son identité, qu'il est attendu, le besoin et le périmètre autorisé",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Lui demander de choisir lui-même les systèmes nécessaires",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_sous_traitants_4",
      text: "Que faut-il faire à la fin d'une mission ?",
      hint: "Clôturer proprement : retirer ce qui n'est plus utile.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Laisser les comptes actifs au cas où le prestataire revienne",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Retirer les comptes, badges, droits et accès devenus inutiles et récupérer les supports prévus",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Changer uniquement le mot de passe du compte prestataire",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_sous_traitants_5",
      text: "Un tiers vous envoie une nouvelle adresse personnelle pour recevoir un fichier confidentiel. Quelle réaction ?",
      hint: "Une adresse personnelle n'est pas un canal maîtrisé.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Utiliser l'adresse personnelle si le tiers la confirme",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Utiliser uniquement un canal professionnel ou approuvé et vérifier le besoin",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Envoyer le fichier puis demander confirmation après coup",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_cndp: [
    {
      id: "q_cndp_1",
      text: "Laquelle est une donnée personnelle ?",
      hint: "Tout ce qui permet d'identifier une personne.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Le nom et le téléphone d'un collaborateur",
          isCorrect: true,
        },
        { id: "b", text: "La météo du chantier", isCorrect: false },
        { id: "c", text: "Le modèle d'une grue", isCorrect: false },
      ],
    },
    {
      id: "q_cndp_2",
      text: "Que signifie le principe de minimisation ?",
      hint: "Moins de données, mieux protégées.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Ne collecter que ce qui est nécessaire",
          isCorrect: true,
        },
        { id: "b", text: "Réduire la taille du fichier ZIP", isCorrect: false },
        { id: "c", text: "Supprimer les mots de passe", isCorrect: false },
      ],
    },
    {
      id: "q_cndp_3",
      text: "Avant d'envoyer un fichier nominatif, que faut-il vérifier ?",
      hint: "Bon destinataire, bon besoin, bon canal.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Le destinataire, le besoin et le canal",
          isCorrect: true,
        },
        { id: "b", text: "Uniquement l'objet du mail", isCorrect: false },
        { id: "c", text: "Uniquement la taille du fichier", isCorrect: false },
      ],
    },
    {
      id: "q_cndp_4",
      text: "Un salarié demande quelles données SGTM détient sur lui. Quel est le bon réflexe ?",
      hint: "Orienter vers le bon interlocuteur.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Lui répondre immédiatement avec tous les fichiers disponibles",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Orienter la demande vers le DPO ou le canal prévu",
          isCorrect: true,
        },
        { id: "c", text: "Ignorer la demande", isCorrect: false },
      ],
    },
    {
      id: "q_cndp_5",
      text: "Un fichier RH est envoyé au mauvais destinataire. Quelle est la priorité ?",
      hint: "Signaler vite limite l'impact.",
      type: "single",
      options: [
        { id: "a", text: "Signaler immédiatement", isCorrect: true },
        { id: "b", text: "Attendre une semaine", isCorrect: false },
        {
          id: "c",
          text: "Supprimer le dossier Envoyés et ne rien dire",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_classification: [
    {
      id: "q_classification_1",
      text: "Pourquoi classer une information ?",
      hint: "Adapter la protection à la valeur.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Pour rendre tous les documents confidentiels",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Pour adapter sa protection à sa valeur et à son impact",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Pour limiter toute circulation de l'information",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Pour éviter de nommer les fichiers",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_classification_2",
      text: "Quel élément doit être considéré comme particulièrement sensible dans une étude de prix ?",
      hint: "Ce qui révèle la stratégie commerciale.",
      type: "single",
      options: [
        { id: "a", text: "Une brochure publique", isCorrect: false },
        { id: "b", text: "Une photo générale du siège", isCorrect: false },
        {
          id: "c",
          text: "Les hypothèses de coût, prix unitaires et marges",
          isCorrect: true,
        },
        { id: "d", text: "Un communiqué déjà publié", isCorrect: false },
      ],
    },
    {
      id: "q_classification_3",
      text: "Avec qui une étude de prix en cours doit-elle être partagée ?",
      hint: "Le besoin d'en connaître.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Avec toute l'entreprise pour information",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Avec les personnes qui en ont réellement besoin pour travailler",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Avec tout partenaire qui en fait la demande",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Avec les contacts personnels des membres du projet",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_classification_4",
      text: "Avant d'envoyer un BPU ou un DQE, quel contrôle est essentiel ?",
      hint: "Bon document, bonne version, bon destinataire, bon canal.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Vérifier uniquement la taille du fichier",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Vérifier le bon document, la bonne version, le bon destinataire et le bon canal",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Convertir obligatoirement le fichier en image",
          isCorrect: false,
        },
        {
          id: "d",
          text: "Envoyer d'abord sur une messagerie personnelle pour test",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_classification_5",
      text: "Pourquoi la maîtrise des versions est-elle importante dans une étude de prix ?",
      hint: "Une vieille version peut fausser une décision.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Pour réduire la taille des dossiers",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Pour éviter qu'une ancienne version fausse le chiffrage ou la décision",
          isCorrect: true,
        },
        { id: "c", text: "Pour supprimer tout historique", isCorrect: false },
        {
          id: "d",
          text: "Pour rendre tous les fichiers publics",
          isCorrect: false,
        },
      ],
    },
  ],

  quiz_dirigeants: [
    {
      id: "q_dirigeants_1",
      text: "Pourquoi les dirigeants et cadres sont-ils particulièrement ciblés ?",
      hint: "Ils décident, autorisent et accèdent au sensible.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Parce qu'ils utilisent moins d'outils numériques",
          isCorrect: false,
        },
        {
          id: "b",
          text: "Parce qu'ils décident, autorisent et accèdent à des informations ou opérations sensibles",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Parce qu'ils ne reçoivent jamais d'e-mails",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_dirigeants_2",
      text: "Un e-mail cite un chantier réel et un partenaire connu. Est-ce une preuve d'authenticité ?",
      hint: "Ces détails peuvent avoir été récupérés.",
      type: "single",
      options: [
        { id: "a", text: "Oui, toujours", isCorrect: false },
        {
          id: "b",
          text: "Non, ces informations peuvent avoir été récupérées ; je vérifie",
          isCorrect: true,
        },
        { id: "c", text: "Oui, si le ton est professionnel", isCorrect: false },
      ],
    },
    {
      id: "q_dirigeants_3",
      text: "Face à une demande urgente et sensible, quel est le bon réflexe ?",
      hint: "L'urgence ne supprime pas les contrôles.",
      type: "single",
      options: [
        { id: "a", text: "Agir immédiatement", isCorrect: false },
        {
          id: "b",
          text: "Ralentir et vérifier avant toute action",
          isCorrect: true,
        },
        {
          id: "c",
          text: "Transférer la demande à toute l'équipe",
          isCorrect: false,
        },
      ],
    },
    {
      id: "q_dirigeants_4",
      text: "Un collaborateur souhaite vérifier une demande sensible qui semble venir de vous. Quelle attitude adopter ?",
      hint: "La vérification protège aussi contre l'usurpation.",
      type: "single",
      options: [
        { id: "a", text: "L'encourager à vérifier", isCorrect: true },
        {
          id: "b",
          text: "Lui demander d'obéir sans question",
          isCorrect: false,
        },
        { id: "c", text: "Lui interdire tout contrôle", isCorrect: false },
      ],
    },
    {
      id: "q_dirigeants_5",
      text: "Quel message final résume le module ?",
      hint: "Quatre gestes face à une demande sensible.",
      type: "single",
      options: [
        {
          id: "a",
          text: "Face à une demande sensible, je ralentis, je vérifie, je protège, je signale",
          isCorrect: true,
        },
        {
          id: "b",
          text: "Face à une demande sensible, j'agis sans vérifier",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Face à une demande sensible, je partage largement",
          isCorrect: false,
        },
      ],
    },
  ],
};
