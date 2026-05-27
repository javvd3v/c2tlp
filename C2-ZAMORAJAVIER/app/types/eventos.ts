import type { Estudiante } from "~/types/estudiantes"

export interface Evento{
    id: number
    titulo: string
    fecha: string
    hora: string
    lugar: string
    imagen: string
    valor: number
    topePersonas: number
    estudiantes: Estudiante[]
}