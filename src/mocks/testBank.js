const FOVI = [
  {
    id: "tf_fovi_1",
    text: "Une demande de virement est urgente, confidentielle et contourne la procédure. Quel est le bon réflexe ?",
    type: "single",
    options: [
      { id: "a", text: "Exécuter puis informer", isCorrect: false },
      {
        id: "b",
        text: "Vérifier par un canal connu et suivre le circuit normal",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Répondre au même mail pour obtenir un 'oui'",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_2",
    text: "Un fournisseur annonce un nouveau RIB. Que faites-vous ?",
    type: "single",
    options: [
      { id: "a", text: "Je remplace le RIB immédiatement", isCorrect: false },
      {
        id: "b",
        text: "Je confirme auprès d'un contact déjà connu puis je suis la procédure",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je fais un petit virement test sans validation",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_3",
    text: "Un 'conseiller bancaire' demande un code pour annuler un virement suspect. Que faites-vous ?",
    type: "single",
    options: [
      { id: "a", text: "Je donne le code", isCorrect: false },
      {
        id: "b",
        text: "Je raccroche et rappelle via un numéro officiel connu",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je lui demande son nom puis je donne le code",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_4",
    text: "Quel cumul est particulièrement suspect ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Urgence + confidentialité + nouveau compte",
        isCorrect: true,
      },
      { id: "b", text: "Réunion + devis + facture", isCorrect: false },
      { id: "c", text: "Validation + rappel + contrôle", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_5",
    text: "Quel canal utiliser pour confirmer une demande suspecte ?",
    type: "single",
    options: [
      { id: "a", text: "Le canal fourni dans le message", isCorrect: false },
      { id: "b", text: "Un canal connu et indépendant", isCorrect: true },
      { id: "c", text: "Uniquement la réponse e-mail", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_6",
    text: "Pourquoi la double validation est-elle importante ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Elle évite qu'une seule personne puisse être piégée",
        isCorrect: true,
      },
      { id: "b", text: "Elle remplace la banque", isCorrect: false },
      {
        id: "c",
        text: "Elle garantit qu'aucune fraude n'existe",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_7",
    text: "Une demande insiste pour contourner le circuit 'juste cette fois'. Que faire ?",
    type: "single",
    options: [
      { id: "a", text: "Accepter l'exception", isCorrect: false },
      {
        id: "b",
        text: "Considérer cela comme un signal et respecter la procédure",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Valider seul si le montant semble raisonnable",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_8",
    text: "Quand signaler une demande de paiement suspecte ?",
    type: "single",
    options: [
      { id: "a", text: "Seulement si je suis certain", isCorrect: false },
      {
        id: "b",
        text: "Dès qu'elle paraît inhabituelle ou incohérente",
        isCorrect: true,
      },
      { id: "c", text: "Après le virement", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_9",
    text: "Un virement frauduleux vient de partir. Quelle priorité ?",
    type: "single",
    options: [
      { id: "a", text: "Attendre le lendemain", isCorrect: false },
      {
        id: "b",
        text: "Prévenir immédiatement et contacter la banque au plus vite",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Supprimer les messages compromettants",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_10",
    text: "Que faut-il faire des preuves après un incident ?",
    type: "single",
    options: [
      { id: "a", text: "Les supprimer", isCorrect: false },
      { id: "b", text: "Les conserver", isCorrect: true },
      {
        id: "c",
        text: "Les transférer à l'expéditeur suspect",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_fovi_11",
    text: "La FOVI vise principalement :",
    type: "single",
    options: [
      { id: "a", text: "L'erreur humaine et la manipulation", isCorrect: true },
      { id: "b", text: "La panne du réseau électrique", isCorrect: false },
      { id: "c", text: "Le stockage des sauvegardes", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_12",
    text: "Quel scénario correspond à une fraude au président ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Un faux dirigeant demande un virement urgent et secret",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Un fournisseur confirme son RIB par téléphone connu",
        isCorrect: false,
      },
      { id: "c", text: "Une double validation de paiement", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_13",
    text: "Face à un nouveau bénéficiaire bancaire inattendu, que faire ?",
    type: "single",
    options: [
      { id: "a", text: "Vérifier avant tout paiement", isCorrect: true },
      { id: "b", text: "Payer plus vite pour tester", isCorrect: false },
      { id: "c", text: "Ignorer le changement", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_14",
    text: "Quel comportement résume le mieux la prévention FOVI ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Ralentir, vérifier, respecter le circuit et signaler",
        isCorrect: true,
      },
      { id: "b", text: "Répondre, payer et archiver", isCorrect: false },
      { id: "c", text: "Faire confiance au ton autoritaire", isCorrect: false },
    ],
  },
  {
    id: "tf_fovi_15",
    text: "Quel est le message final du module FOVI ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Face à un virement, je ralentis, je vérifie, je signale",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Face à un virement, j'agis vite sans vérifier",
        isCorrect: false,
      },
      { id: "c", text: "Face à un virement, le mail suffit", isCorrect: false },
    ],
  },
];

const SOUS_TRAITANTS = [
  {
    id: "tf_st_1",
    text: "Pourquoi les sous-traitants et tiers font-ils partie du périmètre de sécurité SGTM ?",
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
    id: "tf_st_2",
    text: "Quel exemple correspond à un risque tiers ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Un compte prestataire partagé et laissé actif sans contrôle",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Un compte nominatif temporaire limité à la mission",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Un accès supprimé à la fin de la mission",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_st_3",
    text: "Que faut-il définir avant une intervention sensible ?",
    type: "single",
    options: [
      { id: "a", text: "Uniquement la date de début", isCorrect: false },
      {
        id: "b",
        text: "Les rôles, accès, responsabilités, règles de confidentialité et modalités d'échange",
        isCorrect: true,
      },
      { id: "c", text: "Seulement le nom du prestataire", isCorrect: false },
    ],
  },
  {
    id: "tf_st_4",
    text: "Un prestataire se présente pour intervenir. Quelle est la bonne première action ?",
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
    id: "tf_st_5",
    text: "Que signifie le principe du moindre privilège ?",
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
    id: "tf_st_6",
    text: "Comment partager un document sensible avec un tiers ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Par une messagerie personnelle si elle est plus rapide",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Via un canal approuvé, au bon destinataire et uniquement si le document est nécessaire",
        isCorrect: true,
      },
      {
        id: "c",
        text: "En copie à toute l'équipe pour être sûr que quelqu'un le voie",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_st_7",
    text: "Un prestataire habituel travaille depuis longtemps avec SGTM. Faut-il encore revoir ses accès ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Oui, l'habitude ne remplace pas le contrôle",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Non, les contrôles ne sont utiles que la première année",
        isCorrect: false,
      },
      { id: "c", text: "Seulement s'il le demande", isCorrect: false },
    ],
  },
  {
    id: "tf_st_8",
    text: "Quel événement doit être signalé sans attendre ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "La perte d'un ordinateur contenant des informations SGTM",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Une intervention terminée sans incident",
        isCorrect: false,
      },
      { id: "c", text: "Un changement d'horaire validé", isCorrect: false },
    ],
  },
  {
    id: "tf_st_9",
    text: "Que faut-il faire à la fin d'une mission ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Laisser les comptes actifs au cas où le prestataire revienne",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Retirer les comptes, badges, droits et accès inutiles et récupérer les supports prévus",
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
    id: "tf_st_10",
    text: "Quel est le meilleur résumé du module ?",
    type: "single",
    options: [
      { id: "a", text: "Faire confiance aux tiers connus", isCorrect: false },
      {
        id: "b",
        text: "Vérifier, encadrer, limiter, partager prudemment, surveiller et clôturer",
        isCorrect: true,
      },
      { id: "c", text: "Tout interdire aux prestataires", isCorrect: false },
    ],
  },
  {
    id: "tf_st_11",
    text: "Un prestataire demande un accès administrateur pour une tâche qui marche avec un compte standard. Que faire ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Accorder l'administrateur pour éviter un blocage",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Refuser l'accès administrateur et accorder le niveau minimum nécessaire",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Partager le compte administrateur d'un collaborateur",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_st_12",
    text: "Un prestataire change d'équipe en cours de mission. Que faut-il faire ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Transférer automatiquement les anciens droits",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Réévaluer les personnes autorisées et ajuster les accès",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Ne rien changer tant que le contrat est valide",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_st_13",
    text: "Un tiers vous envoie une adresse personnelle pour recevoir un fichier confidentiel. Quelle réaction ?",
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
  {
    id: "tf_st_14",
    text: "Pourquoi conserver les preuves lors d'un incident tiers ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Pour faciliter l'analyse, le confinement et le traitement de l'incident",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Pour les envoyer à tous les collaborateurs",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Pour éviter de prévenir les responsables",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_st_15",
    text: "Quelle pratique protège le mieux SGTM dans la durée ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Contrôler uniquement au démarrage de la mission",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Suivre les accès et pratiques pendant toute la relation et corriger les écarts",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Conserver les mêmes accès pour simplifier les interventions futures",
        isCorrect: false,
      },
    ],
  },
];

const CNDP = [
  {
    id: "tf_cndp_1",
    text: "Une liste nominative avec téléphones et affectations est :",
    type: "single",
    options: [
      { id: "a", text: "Un fichier de données personnelles", isCorrect: true },
      { id: "b", text: "Un document sans risque", isCorrect: false },
      { id: "c", text: "Une donnée uniquement technique", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_2",
    text: "Avant de collecter une information, je vérifie :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Qu'elle est nécessaire à une finalité claire",
        isCorrect: true,
      },
      { id: "b", text: "Qu'elle pourrait servir un jour", isCorrect: false },
      { id: "c", text: "Qu'elle est facile à demander", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_3",
    text: "Avant d'envoyer un fichier nominatif, je contrôle :",
    type: "single",
    options: [
      { id: "a", text: "Destinataire, besoin et canal", isCorrect: true },
      { id: "b", text: "Uniquement le nom du fichier", isCorrect: false },
      { id: "c", text: "Uniquement l'heure", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_4",
    text: "Une donnée de santé est :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Une donnée nécessitant une vigilance renforcée",
        isCorrect: true,
      },
      { id: "b", text: "Une donnée banale", isCorrect: false },
      { id: "c", text: "Une donnée publique par défaut", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_5",
    text: "Une personne peut demander la rectification de ses données :",
    type: "single",
    options: [
      { id: "a", text: "Oui", isCorrect: true },
      { id: "b", text: "Non", isCorrect: false },
      { id: "c", text: "Seulement une fois", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_6",
    text: "La CNDP :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Contrôle la protection des données personnelles au Maroc",
        isCorrect: true,
      },
      { id: "b", text: "Gère les mots de passe SGTM", isCorrect: false },
      { id: "c", text: "Valide les factures", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_7",
    text: "Un nouveau traitement utilisant la CIN peut nécessiter :",
    type: "single",
    options: [
      { id: "a", text: "Une formalité spécifique", isCorrect: true },
      { id: "b", text: "Aucune vérification", isCorrect: false },
      { id: "c", text: "Un simple accord oral", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_8",
    text: "Une mesure de sécurité adaptée est :",
    type: "single",
    options: [
      { id: "a", text: "Limiter les droits d'accès", isCorrect: true },
      { id: "b", text: "Partager les comptes", isCorrect: false },
      {
        id: "c",
        text: "Laisser les documents sur l'imprimante",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_cndp_9",
    text: "Un prestataire doit recevoir :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Uniquement les données nécessaires à sa mission",
        isCorrect: true,
      },
      { id: "b", text: "Toute la base disponible", isCorrect: false },
      { id: "c", text: "Les mots de passe des utilisateurs", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_10",
    text: "Un service cloud hébergé à l'étranger :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Doit faire l'objet d'une vérification de conformité et du transfert",
        isCorrect: true,
      },
      { id: "b", text: "Est conforme automatiquement", isCorrect: false },
      { id: "c", text: "N'est pas concerné par la loi", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_11",
    text: "Un fichier RH est envoyé à la mauvaise adresse. Priorité :",
    type: "single",
    options: [
      { id: "a", text: "Signaler immédiatement", isCorrect: true },
      {
        id: "b",
        text: "Attendre la réponse du destinataire",
        isCorrect: false,
      },
      { id: "c", text: "Supprimer les traces", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_12",
    text: "Un champ de formulaire sans justification :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Doit être questionné et éventuellement supprimé",
        isCorrect: true,
      },
      { id: "b", text: "Doit toujours être obligatoire", isCorrect: false },
      { id: "c", text: "Doit contenir une donnée fictive", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_13",
    text: "Le besoin d'en connaître signifie :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Accès limité aux personnes qui en ont besoin pour leur mission",
        isCorrect: true,
      },
      { id: "b", text: "Accès à tous les salariés", isCorrect: false },
      { id: "c", text: "Accès public", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_14",
    text: "Quel trio résume le mieux les réflexes ?",
    type: "single",
    options: [
      { id: "a", text: "Nécessaire, autorisé, sécurisé", isCorrect: true },
      { id: "b", text: "Collecter, copier, diffuser", isCorrect: false },
      { id: "c", text: "Télécharger, imprimer, transférer", isCorrect: false },
    ],
  },
  {
    id: "tf_cndp_15",
    text: "En cas de doute sur un traitement ou un partage :",
    type: "single",
    options: [
      {
        id: "a",
        text: "Je m'arrête et je demande aux référents compétents",
        isCorrect: true,
      },
      { id: "b", text: "Je poursuis pour gagner du temps", isCorrect: false },
      {
        id: "c",
        text: "Je transfère sur mon compte personnel",
        isCorrect: false,
      },
    ],
  },
];

const DIRIGEANTS = [
  {
    id: "tf_dir_1",
    text: "Une demande urgente et confidentielle semble venir d'un dirigeant. Quel est le bon réflexe ?",
    type: "single",
    options: [
      { id: "a", text: "Exécuter immédiatement", isCorrect: false },
      {
        id: "b",
        text: "Ralentir et vérifier par un canal connu",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Répondre uniquement au même message",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_2",
    text: "Un e-mail cite un chantier réel et un partenaire connu. Que conclure ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Le message est forcément authentique",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Ces détails ne prouvent pas l'authenticité ; je vérifie",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je peux agir sans contrôle si la signature est correcte",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_3",
    text: "Quelle information publique peut aider un attaquant ?",
    type: "single",
    options: [
      { id: "a", text: "Un déplacement ou un organigramme", isCorrect: true },
      {
        id: "b",
        text: "Uniquement une donnée déjà chiffrée",
        isCorrect: false,
      },
      { id: "c", text: "Aucune information publique", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_4",
    text: "Avant de partager un document stratégique, que faut-il appliquer ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Le besoin d'en connaître et un canal adapté",
        isCorrect: true,
      },
      { id: "b", text: "Le partage à toute l'équipe", isCorrect: false },
      {
        id: "c",
        text: "L'envoi via une messagerie personnelle",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_5",
    text: "Un collaborateur veut vérifier une demande sensible qui semble venir de vous. Que faire ?",
    type: "single",
    options: [
      { id: "a", text: "L'encourager à vérifier", isCorrect: true },
      { id: "b", text: "Lui demander d'obéir sans question", isCorrect: false },
      { id: "c", text: "Lui interdire tout contrôle", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_6",
    text: "Quel canal privilégier pour un échange professionnel confidentiel ?",
    type: "single",
    options: [
      { id: "a", text: "Un outil SGTM validé", isCorrect: true },
      { id: "b", text: "Une messagerie personnelle", isCorrect: false },
      { id: "c", text: "Un groupe public", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_7",
    text: "En déplacement, quelle pratique est la plus sûre ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Utiliser une connexion maîtrisée et verrouiller ses appareils",
        isCorrect: true,
      },
      { id: "b", text: "Laisser son ordinateur ouvert", isCorrect: false },
      {
        id: "c",
        text: "Utiliser n'importe quel Wi-Fi sans précaution",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_8",
    text: "Une notification MFA apparaît alors que vous ne vous connectez pas. Que faire ?",
    type: "single",
    options: [
      { id: "a", text: "L'approuver", isCorrect: false },
      { id: "b", text: "La refuser et signaler l'anomalie", isCorrect: true },
      {
        id: "c",
        text: "Communiquer le code à un interlocuteur",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_9",
    text: "Quel principe s'applique aux codes d'authentification ?",
    type: "single",
    options: [
      { id: "a", text: "Ils ne se partagent jamais", isCorrect: true },
      {
        id: "b",
        text: "Ils peuvent être partagés avec un appelant pressant",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Ils peuvent être envoyés par e-mail",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_10",
    text: "Quand faut-il signaler un message ciblé suspect ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Dès le doute, sans attendre une certitude totale",
        isCorrect: true,
      },
      { id: "b", text: "Après avoir cliqué sur le lien", isCorrect: false },
      {
        id: "c",
        text: "Seulement si d'autres personnes sont touchées",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_dir_11",
    text: "Que faut-il faire des messages et éléments utiles après un incident ?",
    type: "single",
    options: [
      { id: "a", text: "Les conserver", isCorrect: true },
      { id: "b", text: "Les supprimer immédiatement", isCorrect: false },
      { id: "c", text: "Les publier", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_12",
    text: "Quel comportement augmente le risque ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Contourner une procédure sous prétexte d'urgence",
        isCorrect: true,
      },
      { id: "b", text: "Vérifier un destinataire", isCorrect: false },
      { id: "c", text: "Réviser ses accès", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_13",
    text: "Pourquoi revoir régulièrement les accès et délégations ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Pour supprimer ou corriger les droits devenus inutiles",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Pour partager davantage les comptes",
        isCorrect: false,
      },
      { id: "c", text: "Pour désactiver le MFA", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_14",
    text: "Quel comportement résume le mieux l'exemplarité cyber d'un dirigeant ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Respecter les règles, accepter la vérification et encourager le signalement",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Contourner les contrôles pour gagner du temps",
        isCorrect: false,
      },
      { id: "c", text: "Gérer seul les incidents", isCorrect: false },
    ],
  },
  {
    id: "tf_dir_15",
    text: "Quel est le message final du module Dirigeants ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Face à une demande sensible, je ralentis, je vérifie, je protège, je signale",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Face à une demande sensible, j'agis sans contrôle",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Face à une demande sensible, je partage le plus vite possible",
        isCorrect: false,
      },
    ],
  },
];

const CLASSIFICATION = [
  {
    id: "tf_cla_1",
    text: "Pourquoi classer une information ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Pour adapter sa protection à sa valeur et à son impact",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Pour rendre tous les documents confidentiels",
        isCorrect: false,
      },
      { id: "c", text: "Pour éviter de nommer les fichiers", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_2",
    text: "Qu'est-ce qu'une étude de prix sensible contient typiquement ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Des hypothèses de coût, des prix unitaires et des marges",
        isCorrect: true,
      },
      { id: "b", text: "Une brochure publique", isCorrect: false },
      { id: "c", text: "Un communiqué déjà diffusé", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_3",
    text: "Selon quel principe partager une étude de prix en cours ?",
    type: "single",
    options: [
      { id: "a", text: "Le besoin d'en connaître", isCorrect: true },
      { id: "b", text: "Le plus largement possible", isCorrect: false },
      { id: "c", text: "À tout partenaire qui le demande", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_4",
    text: "Avant d'envoyer un BPU ou un DQE, quel contrôle est essentiel ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Bon document, bonne version, bon destinataire et bon canal",
        isCorrect: true,
      },
      { id: "b", text: "Uniquement la taille du fichier", isCorrect: false },
      { id: "c", text: "Le convertir en image", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_5",
    text: "Pourquoi maîtriser les versions d'un chiffrage ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Pour éviter qu'une ancienne version fausse la décision",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Pour réduire la taille des dossiers",
        isCorrect: false,
      },
      { id: "c", text: "Pour rendre les fichiers publics", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_6",
    text: "Comment doit-on marquer un document sensible ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Le nommer, le marquer et le ranger correctement selon sa classification",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Sans aucune indication pour ne pas attirer l'attention",
        isCorrect: false,
      },
      { id: "c", text: "Uniquement avec la date", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_7",
    text: "Que faire des documents sensibles lors d'une réunion ou d'une impression ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Les récupérer, ne pas les laisser traîner et les détruire si inutiles",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Les laisser sur la table pour les participants suivants",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Les jeter dans une poubelle classique",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_cla_8",
    text: "Comment partager une information sensible avec l'extérieur ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Avec prudence, via un canal autorisé et le bon destinataire",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Par la messagerie personnelle si c'est plus rapide",
        isCorrect: false,
      },
      {
        id: "c",
        text: "En copie à tout le monde pour sécurité",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_cla_9",
    text: "Avant d'envoyer un document, comment vérifier le destinataire ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Contrôler l'adresse exacte et qu'elle correspond bien au besoin",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Se fier à l'autocomplétion sans regarder",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Envoyer et corriger ensuite si erreur",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_cla_10",
    text: "Où stocker les documents d'étude de prix ?",
    type: "single",
    options: [
      { id: "a", text: "Dans les espaces autorisés par SGTM", isCorrect: true },
      { id: "b", text: "Sur un cloud personnel gratuit", isCorrect: false },
      { id: "c", text: "Sur une clé USB personnelle", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_11",
    text: "Comment protéger une information sensible en mobilité ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Garder le contrôle des documents et éviter les regards indiscrets",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Travailler l'écran ouvert dans les transports",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Envoyer les fichiers sur sa messagerie privée",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_cla_12",
    text: "Quelle erreur faut-il éviter avec un document classifié ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Le diffuser au-delà des personnes qui en ont besoin",
        isCorrect: true,
      },
      { id: "b", text: "Le ranger dans un espace autorisé", isCorrect: false },
      { id: "c", text: "Vérifier sa version avant envoi", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_13",
    text: "Que faire en cas de doute sur la sensibilité d'un document ?",
    type: "single",
    options: [
      { id: "a", text: "Demander avant d'agir", isCorrect: true },
      { id: "b", text: "Le diffuser puis vérifier", isCorrect: false },
      {
        id: "c",
        text: "Le considérer comme public par défaut",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_cla_14",
    text: "Si une erreur de diffusion arrive, quel est le bon réflexe ?",
    type: "single",
    options: [
      { id: "a", text: "Signaler vite pour limiter l'impact", isCorrect: true },
      {
        id: "b",
        text: "Ne rien dire si personne ne le remarque",
        isCorrect: false,
      },
      { id: "c", text: "Supprimer discrètement les traces", isCorrect: false },
    ],
  },
  {
    id: "tf_cla_15",
    text: "Quel réflexe essentiel résume la classification ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Classer, protéger et partager seulement selon le besoin",
        isCorrect: true,
      },
      {
        id: "b",
        text: "Diffuser largement pour informer tout le monde",
        isCorrect: false,
      },
      {
        id: "c",
        text: "Garder tout secret sans jamais partager",
        isCorrect: false,
      },
    ],
  },
];

const SOCLE = [
  {
    id: "tf_gen_1",
    text: "Vous recevez une notification MFA alors que vous ne tentez aucune connexion. Quel est le meilleur réflexe ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Valider pour faire disparaître la notification",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Refuser la demande et signaler si nécessaire",
        isCorrect: true,
      },
      { id: "c", text: "Communiquer le code à un collègue", isCorrect: false },
      { id: "d", text: "Désactiver temporairement le MFA", isCorrect: false },
    ],
  },
  {
    id: "tf_gen_2",
    text: "Un partenaire externe vous demande une étude de prix via une messagerie personnelle. Que faites-vous ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Je l'envoie si le partenaire est connu",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Je vérifie le besoin, le destinataire, la sensibilité et j'utilise uniquement un canal autorisé",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je retire uniquement le mot 'confidentiel' du fichier",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Je l'envoie à partir de mon téléphone personnel",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_3",
    text: "Un e-mail semblant provenir d'un dirigeant vous demande un paiement urgent et inhabituel. Quelle action est prioritaire ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Réaliser le paiement pour respecter l'urgence",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Vérifier la demande par un canal fiable et indépendant",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Répondre au mail en demandant confirmation",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Transférer le mail à un fournisseur",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_4",
    text: "Plusieurs fichiers deviennent soudainement illisibles et un message de rançon apparaît. Que faites-vous ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Je continue à travailler sur d'autres dossiers",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Je m'arrête, limite la propagation et signale immédiatement",
        isCorrect: true,
      },
      { id: "c", text: "Je paie la rançon", isCorrect: false },
      { id: "d", text: "Je supprime le message", isCorrect: false },
    ],
  },
  {
    id: "tf_gen_5",
    text: "Vous envoyez par erreur une liste de salariés au mauvais destinataire. Quel comportement est attendu ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Supprimer le mail envoyé et ne rien dire",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Signaler immédiatement l'erreur afin de limiter l'impact",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Demander au destinataire de garder le document",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Attendre une éventuelle réclamation",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_6",
    text: "Vous trouvez un bordereau de prix sensible oublié sur l'imprimante. Que faites-vous ?",
    type: "single",
    options: [
      { id: "a", text: "Je le laisse sur place", isCorrect: false },
      {
        id: "b",
        text: "Je le sécurise et l'oriente vers la personne ou le processus approprié",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je le photographie pour savoir à qui il appartient",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Je le jette dans une poubelle classique",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_7",
    text: "Deux versions d'un même fichier de chiffrage existent. Laquelle faut-il utiliser ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Celle qui contient le plus de données",
        isCorrect: false,
      },
      { id: "b", text: "La version validée et à jour", isCorrect: true },
      { id: "c", text: "La première reçue", isCorrect: false },
      {
        id: "d",
        text: "Celle qui se trouve sur un poste personnel",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_8",
    text: "Un nouvel arrivant veut installer un logiciel non référencé pour traiter plus vite un fichier. Quelle réponse est correcte ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Il peut l'installer s'il est gratuit",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Il doit utiliser uniquement les outils autorisés",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Il peut le tester sur son poste puis le supprimer",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Il peut l'installer avec le compte d'un collègue",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_9",
    text: "Quelle affirmation décrit le mieux le rôle des sauvegardes face à un ransomware ?",
    type: "single",
    options: [
      { id: "a", text: "Elles empêchent toute infection", isCorrect: false },
      {
        id: "b",
        text: "Elles contribuent à la reprise si elles sont correctement réalisées et protégées",
        isCorrect: true,
      },
      { id: "c", text: "Elles remplacent le signalement", isCorrect: false },
      { id: "d", text: "Elles rendent le MFA inutile", isCorrect: false },
    ],
  },
  {
    id: "tf_gen_10",
    text: "Un interlocuteur au téléphone se présente comme le support et réclame votre code MFA pour débloquer votre compte. Que faites-vous ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Je donne le code si l'appel semble crédible",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Je refuse de communiquer le code et je vérifie l'identité via le canal officiel",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je donne uniquement les deux premiers chiffres",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Je demande à un collègue de fournir son code",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_11",
    text: "Un document contient des hypothèses de marge et des prix unitaires. Quelle approche est la plus adaptée ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Le publier sur l'espace le plus accessible",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Le considérer comme une information sensible et limiter sa diffusion",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Le transmettre à tous les collaborateurs",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Le stocker sur un service cloud personnel",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_12",
    text: "Un candidat demande quelles données personnelles SGTM détient sur lui. Que faites-vous ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Je lui envoie tous les dossiers trouvés",
        isCorrect: false,
      },
      {
        id: "b",
        text: "J'oriente la demande vers le DPO ou le canal prévu",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Je lui réponds qu'aucune demande n'est possible",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Je demande à un collègue de répondre sans vérification",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_13",
    text: "Pourquoi l'utilisation du même mot de passe sur plusieurs services est-elle dangereuse ?",
    type: "single",
    options: [
      { id: "a", text: "Elle ralentit les connexions", isCorrect: false },
      {
        id: "b",
        text: "La compromission d'un service peut exposer les autres comptes",
        isCorrect: true,
      },
      { id: "c", text: "Elle empêche les mises à jour", isCorrect: false },
      {
        id: "d",
        text: "Elle rend les mots de passe plus longs",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_14",
    text: "Vous constatez un événement inhabituel mais vous n'êtes pas certain qu'il s'agisse d'un incident. Quel principe s'applique ?",
    type: "single",
    options: [
      {
        id: "a",
        text: "Ne signaler que lorsqu'on a une preuve absolue",
        isCorrect: false,
      },
      {
        id: "b",
        text: "Signaler ou demander rapidement en cas de doute",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Attendre que plusieurs collègues rencontrent le même problème",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Supprimer les éléments suspects avant d'en parler",
        isCorrect: false,
      },
    ],
  },
  {
    id: "tf_gen_15",
    text: "Avant tout partage d'une information sensible, quel enchaînement résume le mieux les bons réflexes ?",
    type: "single",
    options: [
      { id: "a", text: "Envoyer vite, vérifier ensuite", isCorrect: false },
      {
        id: "b",
        text: "Classer, vérifier le besoin et le destinataire, contrôler la version, utiliser le bon canal et signaler en cas de doute",
        isCorrect: true,
      },
      {
        id: "c",
        text: "Copier le document sur plusieurs supports avant l'envoi",
        isCorrect: false,
      },
      {
        id: "d",
        text: "Demander à un collègue de transmettre à sa place",
        isCorrect: false,
      },
    ],
  },
];

export const testBank = {
  test_general: { "Évaluation finale": SOCLE },
  test_finance: { FOVI: FOVI },
  test_achats: { FOVI: FOVI, "Sous-traitants": SOUS_TRAITANTS },
  test_conducteurs: { "Sous-traitants": SOUS_TRAITANTS },
  test_rh: { CNDP: CNDP },
  test_admin: { CNDP: CNDP },
  test_be: { Classification: CLASSIFICATION },
  test_commerce: { Classification: CLASSIFICATION },
  test_direction: { Dirigeants: DIRIGEANTS },
};
