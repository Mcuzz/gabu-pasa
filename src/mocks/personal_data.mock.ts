// src/mocks/personal_data.mock.ts
// Este archivo contiene datos de ejemplo para los estudiantes, 
// que pueden ser utilizados para pruebas y desarrollo antes 
// de integrar con una API real.

import { PersonalData } from "@/types/personal_data";

export const personalDataMocks: PersonalData[] = [
    {
        id: "s1",
        correo: "natalia.urias@ues.mx",
        telefono: "6441234567",
        semestre: "6to semestre",
        carrera: "Ingeniería en Software",
    },
    {
        id: "s2",
        correo: "diego.fernandez@ues.mx",
        telefono: "6449876543",
        semestre: "4to semestre",
        carrera: "Ingeniería Mecatrónica",
    },
    {
        id: "s3",
        correo: "sofia.martinez@ues.mx",
        telefono: "6444567890",
        semestre: "2do semestre",
        carrera: "Ingeniería Química",
    },
    {
        id: "s4",
        correo: "lucas.gomez@ues.mx",
        telefono: "6443217890",
        semestre: "8vo semestre",
        carrera: "Ingeniería en Software",
    },
    {
    id: "t1",
    correo: "laura@universidad.edu",
    telefono: "555-123-4567",
    semestre: "N/A",
    carrera: "Matemáticas",
  }
];