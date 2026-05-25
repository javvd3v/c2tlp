import type { Estudiantes } from "~/types/estudiante"

export interface Evento{
    titulo: string
    fecha: string
    hora: string
    lugar: string
    imagen: string
    valor: number
    estudiantes: Estudiantes[] | null
}