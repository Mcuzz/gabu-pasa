// src/types/personal_data.ts
// Este archivo define la interfaz para los estudiantes en el sistema. 
// La interfaz Student incluye información básica como id, nombre, nivel educativo,
// necesidades de aprendizaje, intereses y una calificación opcional.

export interface PersonalData {
  
  id: string;
  correo: string;
  telefono: string;
  semestre: string;
  carrera: string;
}