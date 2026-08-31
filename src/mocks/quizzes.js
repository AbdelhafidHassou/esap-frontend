export const quizzes = {
  quiz_gen_1: [
    {
      id: "q_gen_1_1",
      text: "Qu'est-ce que le phishing ?",
      hint: "Ce n'est pas un problème technique : ça vise la personne.",
      type: "single",
      options: [
        { id: "a", text: "Un problème de connexion réseau", isCorrect: false },
        { id: "b", text: "Une tentative frauduleuse destinée à pousser une personne à cliquer, répondre, payer ou révéler une information", isCorrect: true },
        { id: "c", text: "Une mise à jour système", isCorrect: false },
        { id: "d", text: "Un outil de sauvegarde", isCorrect: false },
      ],
    },
    {
      id: "q_gen_1_2",
      text: "Quels leviers sont souvent utilisés en ingénierie sociale ?",
      hint: "Pense aux émotions qui poussent à agir vite.",
      type: "single",
      options: [
        { id: "a", text: "Uniquement des erreurs techniques", isCorrect: false },
        { id: "b", text: "Urgence, autorité, curiosité, peur ou routine", isCorrect: true },
        { id: "c", text: "Uniquement des pièces jointes PDF", isCorrect: false },
        { id: "d", text: "La météo et la localisation", isCorrect: false },
      ],
    },
    {
      id: "q_gen_1_3",
      text: "Vous recevez un e-mail urgent semblant venir d'un dirigeant et demandant un virement inhabituel. Que faites-vous ?",
      hint: "Vérifie toujours par un canal que tu maîtrises.",
      type: "single",
      options: [
        { id: "a", text: "J'exécute rapidement pour respecter l'urgence", isCorrect: false },
        { id: "b", text: "Je vérifie la demande par un canal fiable avant toute action", isCorrect: true },
        { id: "c", text: "Je réponds en demandant les coordonnées bancaires", isCorrect: false },
        { id: "d", text: "Je transfère le message à un fournisseur", isCorrect: false },
      ],
    },
    {
      id: "q_gen_1_4",
      text: "Que recherchent fréquemment les fraudeurs dans une attaque de phishing ?",
      hint: "Tout ce qui donne accès ou de l'argent.",
      type: "single",
      options: [
        { id: "a", text: "Uniquement les horaires de travail", isCorrect: false },
        { id: "b", text: "Identifiants, mots de passe, codes MFA, données sensibles ou paiements", isCorrect: true },
        { id: "c", text: "Uniquement des photos de chantier", isCorrect: false },
        { id: "d", text: "Les mises à jour logicielles", isCorrect: false },
      ],
    },
    {
      id: "q_gen_1_5",
      text: "Vous avez cliqué sur un lien suspect avant de vous rendre compte du risque. Que devez-vous faire ?",
      hint: "Signaler vite limite l'impact.",
      type: "single",
      options: [
        { id: "a", text: "Ne rien dire si rien ne semble se passer", isCorrect: false },
        { id: "b", text: "Signaler immédiatement ce qui s'est passé et suivre les consignes", isCorrect: true },
        { id: "c", text: "Supprimer l'historique du navigateur", isCorrect: false },
        { id: "d", text: "Envoyer le lien à un collègue pour test", isCorrect: false },
      ],
    },
  ],
};