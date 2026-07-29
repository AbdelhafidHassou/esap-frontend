
export const chapterProgress = {
  
  ch_it_1_1: "completed",
  ch_it_1_2: "completed",
  ch_it_1_3: "completed",
  ch_it_2_1: "completed",
  ch_it_2_2: "in_progress",
  ch_it_2_3: "locked",
  ch_it_3_1: "locked",
  ch_it_3_2: "locked",
  ch_it_3_3: "locked",
  
  ch_hr_1_1: "not_started",
  ch_hr_1_2: "locked",
  ch_hr_1_3: "locked",
  ch_hr_2_1: "locked",
  ch_hr_2_2: "locked",
  ch_hr_2_3: "locked",
  ch_hr_3_1: "locked",
  ch_hr_3_2: "locked",
  ch_hr_3_3: "locked",
}

export const quizProgress = {
  quiz_it_1: { passed: true, score: 100 },
  quiz_it_2: { passed: false, score: null },
  quiz_it_3: { passed: false, score: null },
  quiz_hr_1: { passed: false, score: null },
  quiz_hr_2: { passed: false, score: null },
  quiz_hr_3: { passed: false, score: null },
}

export const testProgress = {
  test_it: { attemptsToday: 0, lastScore: null, passed: false, status: "locked" },
  test_hr: { attemptsToday: 0, lastScore: null, passed: false, status: "locked" },
}


export const formationStatus = {
  dep_it: "in_progress",     
  dep_hr: "not_started",
}


export const riskScore = {
  value: 62,                 
  tier: "very_good",         
}


export const dashboardStats = {
  departmentsAssigned: 2,
  totalModules: 6,
  modulesValidated: 1,
  modulesInProgress: 1,
}