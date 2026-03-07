// src/mocks/tutorSessions.mock.ts

import { studentsMock } from "./students.mock";
import { subjectsMock } from "./subjects.mock";

export const tutorSessionsMock = [
  {
    title: `${studentsMock[0].name} — ${subjectsMock[1]}`, // Álgebra
    start: new Date(2026, 2, 5, 10, 0),
    end: new Date(2026, 2, 5, 11, 0),
  },
  {
    title: `${studentsMock[1].name} — ${subjectsMock[4]}`, // Física
    start: new Date(2026, 2, 6, 12, 0),
    end: new Date(2026, 2, 6, 13, 0),
  },
  {
    title: `${studentsMock[2].name} — ${subjectsMock[6]}`, // Química
    start: new Date(2026, 2, 7, 9, 0),
    end: new Date(2026, 2, 7, 10, 0),
  },
  {
    title: `${studentsMock[3].name} — ${subjectsMock[8]}`, // Desarrollo de software
    start: new Date(2026, 2, 8, 16, 0),
    end: new Date(2026, 2, 8, 17, 30),
  },
];