// server/api/eventos/index.post.ts
import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Crear el evento
    const nuevoEvento = await prisma.evento.create({
      data: {
        titulo: body.titulo,
        hora: body.hora || '',
        fecha: body.fecha,
        lugar: body.lugar || '',
        imagen: body.imagen || '',
        valor: body.valor || 0,
        topePersonas: body.topePersonas
      }
    })

    return {
      success: true,
      data: nuevoEvento
    }
  }
  finally {
  }

})