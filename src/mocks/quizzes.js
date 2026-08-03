export const quizzes = {
  quiz_it_2: [
    {
      id: "q_it_2_1",
      text: "Quelle est la longueur minimale recommandée pour un mot de passe robuste ?",
      hint: "Plus c'est long, plus c'est difficile à casser.",
      type: "single",
      options: [
        { id: "a", text: "6 caractères", isCorrect: false },
        { id: "b", text: "8 caractères", isCorrect: false },
        { id: "c", text: "12 caractères ou plus", isCorrect: true },
        { id: "d", text: "4 caractères", isCorrect: false },
      ],
    },
    {
      id: "q_it_2_2",
      text: "Que combine l'authentification multifacteur (MFA) ?",
      hint: "Elle exige plusieurs preuves d'identité distinctes.",
      type: "single",
      options: [
        { id: "a", text: "Plusieurs mots de passe différents", isCorrect: false },
        { id: "b", text: "Plusieurs preuves d'identité distinctes (mot de passe + code, etc.)", isCorrect: true },
        { id: "c", text: "Un changement de mot de passe mensuel", isCorrect: false },
        { id: "d", text: "Un mot de passe très long", isCorrect: false },
      ],
    },
    {
      id: "q_it_2_3",
      text: "Parmi ces pratiques, lesquelles sont sûres ? (plusieurs réponses)",
      hint: "Pensez unicité et confidentialité.",
      type: "multiple",
      options: [
        { id: "a", text: "Utiliser un gestionnaire de mots de passe", isCorrect: true },
        { id: "b", text: "Réutiliser le même mot de passe partout", isCorrect: false },
        { id: "c", text: "Activer la MFA quand c'est possible", isCorrect: true },
        { id: "d", text: "Noter ses mots de passe sur un post-it au bureau", isCorrect: false },
      ],
    },
    {
      id: "q_it_2_4",
      text: "Un collègue vous demande votre mot de passe par e-mail pour « dépanner ». Que faites-vous ?",
      hint: "Un mot de passe ne se partage jamais.",
      type: "single",
      options: [
        { id: "a", text: "Je l'envoie, c'est un collègue de confiance", isCorrect: false },
        { id: "b", text: "Je refuse et je signale la demande", isCorrect: true },
        { id: "c", text: "Je l'envoie puis je le change après", isCorrect: false },
        { id: "d", text: "Je le communique par téléphone à la place", isCorrect: false },
      ],
    },
    {
      id: "q_it_2_5",
      text: "Qu'est-ce qu'une phrase de passe (passphrase) ?",
      hint: "C'est long mais mémorisable.",
      type: "single",
      options: [
        { id: "a", text: "Une suite de mots formant une phrase longue et mémorisable", isCorrect: true },
        { id: "b", text: "Un code à 4 chiffres", isCorrect: false },
        { id: "c", text: "Le nom de votre animal de compagnie", isCorrect: false },
        { id: "d", text: "Un code reçu par SMS", isCorrect: false },
      ],
    },
  ],
};