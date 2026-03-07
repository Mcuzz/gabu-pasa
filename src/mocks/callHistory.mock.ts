export interface CallHistory {
  id: string;
  studentName: string;
  duration: string;
  observations: string;
  status: "finished" | "missed" | "ongoing";
}

export const callHistoryMock: CallHistory[] = [
  {
    id: "c1",
    studentName: "Natalia Urias",
    duration: "01:12:34",
    observations: "Buen progreso en álgebra, reforzar factorización.",
    status: "finished",
  },
  {
    id: "c2",
    studentName: "Diego Fernández",
    duration: "00:45:10",
    observations: "Comprendió mejor las leyes de Newton.",
    status: "ongoing",
  },
  {
    id: "c3",
    studentName: "Sofía Martínez",
    duration: "00:20:05",
    observations: "Necesita mejorar organización de estudio.",
    status: "missed",
  },
];