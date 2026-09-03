export const readChapters = [
  
  "ch_accueil_1", "ch_accueil_2", "ch_accueil_3", "ch_accueil_4", "ch_accueil_5",
  "ch_accueil_6", "ch_accueil_7", "ch_accueil_8", "ch_accueil_9", "ch_accueil_10",
  "ch_accueil_11", "ch_accueil_12", "ch_accueil_13", "ch_accueil_14", "ch_accueil_15",
  "ch_accueil_16", "ch_accueil_17", "ch_accueil_18",
  
  "ch_fovi_1", "ch_fovi_2", "ch_fovi_3", "ch_fovi_4", "ch_fovi_5",
  "ch_fovi_6", "ch_fovi_7", "ch_fovi_8", "ch_fovi_9", "ch_fovi_10",
  "ch_fovi_11", "ch_fovi_12", "ch_fovi_13", "ch_fovi_14",
];

export const quizProgress = {
  quiz_accueil: { passed: true, score: 100 },
  quiz_fovi: { passed: true, score: 100 },
};

export const testProgress = {
  dep_general: { attemptsToday: 0, lastScore: null, passed: false },
  dep_finance: { attemptsToday: 0, lastScore: null, passed: false },
};

export const formationStatus = {
  dep_general: "in_progress",
  dep_finance: "awaiting_final_test",
};

export const riskScore = {
  value: 62,
  tier: "very_good",
};

export const dashboardStats = {
  departmentsAssigned: 9,
  totalModules: 11,
  modulesValidated: 2,
  modulesInProgress: 0,
};

export const progressOverTime = [
  { month: "Jan", score: 10 },
  { month: "Fév", score: 25 },
  { month: "Mar", score: 30 },
  { month: "Avr", score: 45 },
  { month: "Mai", score: 55 },
  { month: "Juin", score: 62 },
];

export const ssiOpened = {
  dep_general: [], dep_finance: [], dep_achats: [], dep_conducteurs: [],
  dep_rh: [], dep_admin: [], dep_be: [], dep_commerce: [], dep_direction: [],
};

export const ssiAccepted = {
  dep_general: false, dep_finance: false, dep_achats: false, dep_conducteurs: false,
  dep_rh: false, dep_admin: false, dep_be: false, dep_commerce: false, dep_direction: false,
};