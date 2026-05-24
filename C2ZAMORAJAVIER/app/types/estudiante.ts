import type { Evento } from "~/types/evento"
export interface Estudiante{
    nombre: string
    email: string | null
    carrera: string
    evento: Evento | null
}