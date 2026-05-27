export default defineEventHandler(async (event) => {
    // obtener el body desde el request recibido
    const body = await readBody(event)

    // extraer los datos del body
    const {run, nombres, apellidos, email, eventoId} = body

    const nombresNormalizados = typeof nombres === 'string' ? nombres.trim() : ''
    const apellidosNormalizados = typeof apellidos === 'string' ? apellidos.trim() : ''
    const emailNormalizado = typeof email === 'string' ? email.trim() : ''
    const eventoIdNormalizado = typeof eventoId === 'number' ? eventoId : 0

    // insertar en BD
    const nuevoEstudiante = await prisma.estudiante.create({
        data: {
            run: run || '',
            nombres: nombresNormalizados,
            apellidos: apellidosNormalizados,
            email: emailNormalizado,
            eventoId: eventoIdNormalizado
        }
    })

    // enviar respuesta al cliente
    return {
        ok: true,
        estudiante: nuevoEstudiante
    }
})