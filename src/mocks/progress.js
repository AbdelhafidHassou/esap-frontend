export const readChapters = [
  "ch_gen_1_1", "ch_gen_1_2", "ch_gen_1_3", "ch_gen_1_4", "ch_gen_1_5",
  "ch_gen_1_6", "ch_gen_1_7", "ch_gen_1_8", "ch_gen_1_9", "ch_gen_1_10",
  "ch_gen_1_11", "ch_gen_1_12", "ch_gen_1_13", "ch_gen_1_14", "ch_gen_1_15",
  "ch_gen_1_16", "ch_gen_1_17",
  "ch_hr_1_1",
];

export const quizProgress = {
  quiz_gen_1: { passed: false, score: 0 },
};

export const testProgress = {
  dep_general: {
    attemptsToday: 0,
    lastScore: null,
    passed: false,
  },
};

export const formationStatus = {
  dep_general: "awaiting_final_test",
  dep_hr: "in_progress",
};

export const riskScore = {
  value: 62,
  tier: "very_good",
};

export const dashboardStats = {
  departmentsAssigned: 2,
  totalModules: 7,
  modulesValidated: 1,
  modulesInProgress: 1,
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
  dep_general: [],
  dep_hr: [],
};

export const ssiAccepted = {
  dep_general: false,
  dep_hr: false,
};