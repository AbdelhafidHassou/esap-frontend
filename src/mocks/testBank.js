export const testBank = {
  test_general: {
    "Évaluation finale": [
      {
        id: "t_gen_1", text: "Vous recevez une notification MFA alors que vous ne tentez aucune connexion. Quel est le meilleur réflexe ?", type: "single",
        options: [
          { id: "a", text: "Valider pour faire disparaître la notification", isCorrect: false },
          { id: "b", text: "Refuser la demande et signaler si nécessaire", isCorrect: true },
          { id: "c", text: "Communiquer le code à un collègue", isCorrect: false },
          { id: "d", text: "Désactiver temporairement le MFA", isCorrect: false },
        ]
      },
      {
        id: "t_gen_2", text: "Un partenaire externe vous demande une étude de prix via une messagerie personnelle. Que faites-vous ?", type: "single",
        options: [
          { id: "a", text: "Je l'envoie si le partenaire est connu", isCorrect: false },
          { id: "b", text: "Je vérifie le besoin, le destinataire, la sensibilité et j'utilise uniquement un canal autorisé", isCorrect: true },
          { id: "c", text: "Je retire uniquement le mot 'confidentiel' du fichier", isCorrect: false },
          { id: "d", text: "Je l'envoie à partir de mon téléphone personnel", isCorrect: false },
        ]
      },
      {
        id: "t_gen_3", text: "Un e-mail semblant provenir d'un dirigeant vous demande un paiement urgent et inhabituel. Quelle action est prioritaire ?", type: "single",
        options: [
          { id: "a", text: "Réaliser le paiement pour respecter l'urgence", isCorrect: false },
          { id: "b", text: "Vérifier la demande par un canal fiable et indépendant", isCorrect: true },
          { id: "c", text: "Répondre au mail en demandant confirmation", isCorrect: false },
          { id: "d", text: "Transférer le mail à un fournisseur", isCorrect: false },
        ]
      },
      {
        id: "t_gen_4", text: "Plusieurs fichiers deviennent soudainement illisibles et un message de rançon apparaît. Que faites-vous ?", type: "single",
        options: [
          { id: "a", text: "Je continue à travailler sur d'autres dossiers", isCorrect: false },
          { id: "b", text: "Je m'arrête, limite la propagation et signale immédiatement", isCorrect: true },
          { id: "c", text: "Je paie la rançon", isCorrect: false },
          { id: "d", text: "Je supprime le message", isCorrect: false },
        ]
      },
      {
        id: "t_gen_5", text: "Vous envoyez par erreur une liste de salariés au mauvais destinataire. Quel comportement est attendu ?", type: "single",
        options: [
          { id: "a", text: "Supprimer le mail envoyé et ne rien dire", isCorrect: false },
          { id: "b", text: "Signaler immédiatement l'erreur afin de limiter l'impact", isCorrect: true },
          { id: "c", text: "Demander au destinataire de garder le document", isCorrect: false },
          { id: "d", text: "Attendre une éventuelle réclamation", isCorrect: false },
        ]
      },
      {
        id: "t_gen_6", text: "Vous trouvez un bordereau de prix sensible oublié sur l'imprimante. Que faites-vous ?", type: "single",
        options: [
          { id: "a", text: "Je le laisse sur place", isCorrect: false },
          { id: "b", text: "Je le sécurise et l'oriente vers la personne ou le processus approprié", isCorrect: true },
          { id: "c", text: "Je le photographie pour savoir à qui il appartient", isCorrect: false },
          { id: "d", text: "Je le jette dans une poubelle classique", isCorrect: false },
        ]
      },
      {
        id: "t_gen_7", text: "Deux versions d'un même fichier de chiffrage existent. Laquelle faut-il utiliser ?", type: "single",
        options: [
          { id: "a", text: "Celle qui contient le plus de données", isCorrect: false },
          { id: "b", text: "La version validée et à jour", isCorrect: true },
          { id: "c", text: "La première reçue", isCorrect: false },
          { id: "d", text: "Celle qui se trouve sur un poste personnel", isCorrect: false },
        ]
      },
      {
        id: "t_gen_8", text: "Un nouvel arrivant veut installer un logiciel non référencé pour traiter plus vite un fichier. Quelle réponse est correcte ?", type: "single",
        options: [
          { id: "a", text: "Il peut l'installer s'il est gratuit", isCorrect: false },
          { id: "b", text: "Il doit utiliser uniquement les outils autorisés", isCorrect: true },
          { id: "c", text: "Il peut le tester sur son poste puis le supprimer", isCorrect: false },
          { id: "d", text: "Il peut l'installer avec le compte d'un collègue", isCorrect: false },
        ]
      },
      {
        id: "t_gen_9", text: "Quelle affirmation décrit le mieux le rôle des sauvegardes face à un ransomware ?", type: "single",
        options: [
          { id: "a", text: "Elles empêchent toute infection", isCorrect: false },
          { id: "b", text: "Elles contribuent à la reprise si elles sont correctement réalisées et protégées", isCorrect: true },
          { id: "c", text: "Elles remplacent le signalement", isCorrect: false },
          { id: "d", text: "Elles rendent le MFA inutile", isCorrect: false },
        ]
      },
      {
        id: "t_gen_10", text: "Un interlocuteur au téléphone se présente comme le support et réclame votre code MFA pour débloquer votre compte. Que faites-vous ?", type: "single",
        options: [
          { id: "a", text: "Je donne le code si l'appel semble crédible", isCorrect: false },
          { id: "b", text: "Je refuse de communiquer le code et je vérifie l'identité via le canal officiel", isCorrect: true },
          { id: "c", text: "Je donne uniquement les deux premiers chiffres", isCorrect: false },
          { id: "d", text: "Je demande à un collègue de fournir son code", isCorrect: false },
        ]
      },
      {
        id: "t_gen_11", text: "Un document contient des hypothèses de marge et des prix unitaires. Quelle approche est la plus adaptée ?", type: "single",
        options: [
          { id: "a", text: "Le publier sur l'espace le plus accessible", isCorrect: false },
          { id: "b", text: "Le considérer comme une information sensible et limiter sa diffusion", isCorrect: true },
          { id: "c", text: "Le transmettre à tous les collaborateurs", isCorrect: false },
          { id: "d", text: "Le stocker sur un service cloud personnel", isCorrect: false },
        ]
      },
      {
        id: "t_gen_12", text: "Un candidat demande quelles données personnelles SGTM détient sur lui. Que faites-vous ?", type: "single",
        options: [
          { id: "a", text: "Je lui envoie tous les dossiers trouvés", isCorrect: false },
          { id: "b", text: "J'oriente la demande vers le DPO ou le canal prévu", isCorrect: true },
          { id: "c", text: "Je lui réponds qu'aucune demande n'est possible", isCorrect: false },
          { id: "d", text: "Je demande à un collègue de répondre sans vérification", isCorrect: false },
        ]
      },
      {
        id: "t_gen_13", text: "Pourquoi l'utilisation du même mot de passe sur plusieurs services est-elle dangereuse ?", type: "single",
        options: [
          { id: "a", text: "Elle ralentit les connexions", isCorrect: false },
          { id: "b", text: "La compromission d'un service peut exposer les autres comptes", isCorrect: true },
          { id: "c", text: "Elle empêche les mises à jour", isCorrect: false },
          { id: "d", text: "Elle rend les mots de passe plus longs", isCorrect: false },
        ]
      },
      {
        id: "t_gen_14", text: "Vous constatez un événement inhabituel mais vous n'êtes pas certain qu'il s'agisse d'un incident. Quel principe s'applique ?", type: "single",
        options: [
          { id: "a", text: "Ne signaler que lorsqu'on a une preuve absolue", isCorrect: false },
          { id: "b", text: "Signaler ou demander rapidement en cas de doute", isCorrect: true },
          { id: "c", text: "Attendre que plusieurs collègues rencontrent le même problème", isCorrect: false },
          { id: "d", text: "Supprimer les éléments suspects avant d'en parler", isCorrect: false },
        ]
      },
      {
        id: "t_gen_15", text: "Avant tout partage d'une information sensible, quel enchaînement résume le mieux les bons réflexes ?", type: "single",
        options: [
          { id: "a", text: "Envoyer vite, vérifier ensuite", isCorrect: false },
          { id: "b", text: "Classer, vérifier le besoin et le destinataire, contrôler la version, utiliser le bon canal et signaler en cas de doute", isCorrect: true },
          { id: "c", text: "Copier le document sur plusieurs supports avant l'envoi", isCorrect: false },
          { id: "d", text: "Demander à un collègue de transmettre à sa place", isCorrect: false },
        ]
      },
    ],
  },
};