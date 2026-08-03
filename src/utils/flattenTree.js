export function flattenTree(formation) {
  const flat = [];
  formation.modules.forEach((mod) => {
    mod.chapters.forEach((ch) => {
      flat.push({ type: "chapter", id: ch.id, node: ch, moduleId: mod.id });
    });
    flat.push({ type: "quiz", id: mod.quiz.id, node: mod.quiz, moduleId: mod.id });
  });
  flat.push({ type: "test", id: formation.test.id, node: formation.test });
  flat.push({ type: "ssi", id: "ssi", node: formation.ssi });
  flat.push({ type: "validation", id: "validation", node: formation.validation });
  return flat;
}

export function computeFormationProgress(formation) {
  const flat = flattenTree(formation);
  const total = flat.length;
  const done = flat.filter((e) => e.node.status === "completed").length;
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}