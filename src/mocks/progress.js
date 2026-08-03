export const readChapters = [
  "ch_it_1_1", "ch_it_1_2", "ch_it_1_3", "ch_it_1_4", "ch_it_1_5",
  "ch_it_2_1",
  "ch_hr_1_1", 
];

export const quizProgress = {
  quiz_it_1: { passed: true, score: 100 },
  quiz_hr_1: { passed: true, score: 100 },
};

export const testProgress = {
  dep_it:    { attemptsToday: 0, lastScore: null, passed: false },
  dep_hr:    { attemptsToday: 0, lastScore: null, passed: false },
  dep_fin:   { attemptsToday: 0, lastScore: null, passed: false },
  dep_sales: { attemptsToday: 0, lastScore: null, passed: false },
};

export const formationStatus = {
  dep_it: "in_progress",
  dep_hr: "in_progress",
  dep_fin: "not_started",
  dep_sales: "not_started",
};

export const riskScore = {
  value: 62,
  tier: "very_good",
};

export const dashboardStats = {
  departmentsAssigned: 4,
  totalModules: 24,
  modulesValidated: 1,
  modulesInProgress: 2,
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
  dep_it: [], dep_hr: [], dep_fin: [], dep_sales: [],
};

export const ssiAccepted = {
  dep_it: false, dep_hr: false, dep_fin: false, dep_sales: false,
};