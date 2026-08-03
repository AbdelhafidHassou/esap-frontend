import {
  departments,
  quizProgress,
  readChapters,
  ssiAccepted,
  ssiDocuments,
  ssiOpened,
  testProgress,
  employee,
  clientBranding,
  platform,
  riskScore,
  dashboardStats,
  progressOverTime,
} from "@/mocks";

const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));

const readSet = new Set(readChapters);

function deriveChapterStatuses(chapters, moduleUnlocked) {
  if (!moduleUnlocked) {
    return chapters.map((ch) => ({
      ...ch,
      status: "locked",
    }));
  }

  let prevCompleted = true;
  return chapters.map((ch) => {
    let status;
    if (readSet.has(ch.id)) {
      status = "completed";
    } else if (prevCompleted) {
      status = "in_progress";
      prevCompleted = false;
    } else {
      status = "locked";
    }
    return { ...ch, status };
  });
}

function deriveModuleStatus(chapterWithStatus, quizPassed) {
  const allDone = chapterWithStatus.every((c) => c.status === "completed");
  const anyTouched = chapterWithStatus.some((c) => c.status !== "locked");

  if (allDone && quizPassed) return "completed";
  if (anyTouched) return "in_progress";
  return "locked";
}

function deriveFormationStatus({
  modulesAllDone,
  testPassed,
  ssiOk,
  nothingStarted,
}) {
  if (nothingStarted) return "not_started";
  if (ssiOk) return "validated";
  if (testPassed) return "awaiting_ssi";
  if (modulesAllDone) return "awaiting_final_test";
  return "in_progress";
}

function buildModules(dep) {
  let prevModuleComp = true;

  return dep.modules.map((mod) => {
    const moduleUnlocked = prevModuleComp;
    const chapters = deriveChapterStatuses(mod.chapters, moduleUnlocked);
    const quizPassed = quizProgress[mod.quiz.id]?.passed ?? false;
    const moduleStatus = deriveModuleStatus(chapters, quizPassed);

    const allChaptersRead = chapters.every((c) => c.status === "completed");
    const quiz = {
      ...mod.quiz,
      status: quizPassed
        ? "completed"
        : allChaptersRead
          ? "unlocked"
          : "locked",
    };

    prevModuleComp = moduleStatus === "completed";
    return { ...mod, status: moduleStatus, chapters, quiz };
  });
}

export async function getFormationDetails(deptId) {
  await delay();

  const dep = departments.find((d) => d.id === deptId);
  if (!dep) return null;

  const modules = buildModules(dep);

  const allQuizzesPassed = modules.every((m) => m.quiz.status === "completed");
  const tp = testProgress[deptId] ?? {
    attemptsToday: 0,
    lastScore: null,
    passed: false,
  };
  const testUnlocked = allQuizzesPassed;
  const test = {
    id: `test_${deptId.replace("dep_", "")}`,
    status: tp.passed ? "completed" : testUnlocked ? "unlocked" : "locked",
    attemptsToday: tp.attemptsToday,
    maxAttemptsPerDay: 3,
    lastScore: tp.lastScore,
    passed: tp.passed,
  };

  const openList = ssiOpened[deptId] ?? [];
  const openSet = new Set(openList);
  const accepted = ssiAccepted[deptId] ?? false;
  const ssi = {
    status: accepted ? "completed" : test.passed ? "unlocked" : "locked",
    documents: ssiDocuments.map((d) => ({ ...d, opened: openSet.has(d.id) })),
    accepted,
  };

  const validation = {
    status: accepted ? "completed" : accepted ? "unlocked" : "locked",
  };

  const modulesAllDone = modules.every((m) => m.status === "completed");
  const nothingStarted =
    modules.every((m) => m.status === "locked") && !tp.passed;
  const status = deriveFormationStatus({
    modulesAllDone,
    testPassed: test.passed,
    ssiOk: accepted,
    nothingStarted,
  });

  return {
    department: { id: dep.id, name: dep.name, status },
    modules,
    test,
    ssi,
    validation,
  };
}

export function getFormationsView() {
  return departments.map((dep) => {
    const modules = buildModules(dep);
    return {
      department: { id: dep.id, name: dep.name },
      modules: modules.map((mod) => ({
        id: mod.id,
        departmentId: dep.id,
        title: mod.title,
        description: mod.description,
        chapterCount: mod.chapters.length,
        durationMinutes: Math.ceil(
          mod.chapters.reduce((sum, ch) => sum + ch.durationSeconds, 0) / 60,
        ),
        status: mod.status,
        progressPercent: computeProgressPercent(mod),
      })),
    };
  });
}

function computeProgressPercent(mod) {
  const total = mod.chapters.length;
  const done = mod.chapters.filter((c) => c.status === "completed").length;
  return Math.round((done / total) * 100);
}

export async function getEmployee() {
  await delay();
  return employee;
}

export async function getBranding() {
  await delay();
  return clientBranding;
}

export async function getDashboard() {
  await delay();

  const formationStatus = {};
  for (const dep of departments) {
    const detail = await getFormationDetailSync(dep.id);
    formationStatus[dep.id] = detail.department.status;
  }
  return {
    stats: dashboardStats,
    riskScore,
    formationStatus,
    departments: departments.map((d) => ({ id: d.id, name: d.name })),
    formations: departments.map((d) => ({
      departmentId: d.id,
      departmentName: d.name,
      type: "Sensibilisation SSI",
      status: formationStatus[d.id],
      dueDate: "2026-12-31",
    })),
    progressOverTime,
  };
}

function getFormationDetailSync(deptId) {
  const dep = departments.find((d) => d.id === deptId);
  if (!dep) return null;
  const modules = buildModules(dep);
  const tp = testProgress[deptId] ?? { passed: false };
  const accepted = ssiAccepted[deptId] ?? false;
  const modulesAllDone = modules.every((m) => m.status === "completed");
  const nothingStarted =
    modules.every((m) => m.status === "locked") && !tp.passed;
  const status = deriveFormationStatus({
    modulesAllDone,
    testPassed: tp.passed,
    ssiOk: accepted,
    nothingStarted,
  });
  return { department: { id: dep.id, name: dep.name, status } };
}

export async function getDepartments() {
  await delay();
  return departments;
}

export async function getDepartment(departmentId) {
  await delay();
  return departments.find((d) => d.id === departmentId) ?? null;
}

export async function getSsiDocuments() {
  await delay();
  return ssiDocuments;
}

export async function getPlatform() {
  await delay();
  return platform;
}

export async function requestOtp(email) {
  await delay();
  return { success: true };
}

export async function verifyOtp(email, code) {
  await delay();
  if (code === "123456") {
    return { success: true, token: "mock-token" };
  }
  return { success: false };
}
