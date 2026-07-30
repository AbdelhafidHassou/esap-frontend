import { employee, clientBranding } from "@/mocks/employee";
import { departments, ssiDocuments } from "@/mocks/departments";
import {
  chapterProgress,
  quizProgress,
  testProgress,
  formationStatus,
  riskScore,
  dashboardStats,
  progressOverTime,
} from "@/mocks/progress";
import { platform } from "@/mocks/platform";

const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));

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

export async function getDepartments() {
  await delay();
  return departments;
}

export async function getDepartment(departmentId) {
  await delay();
  return departments.map((d) => d.id === departmentId) ?? null;
}

export async function getProgress() {
  await delay();
  return {
    chapterProgress,
    quizProgress,
    testProgress,
    formationStatus,
  };
}

export async function getSsiDocuments() {
  await delay();
  return ssiDocuments;
}

export async function getPlatform() {
  await delay();
  return platform;
}
