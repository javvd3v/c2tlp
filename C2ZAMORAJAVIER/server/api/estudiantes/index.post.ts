export default defineEventHandler(async (event) => {
    // obtener el body desde el request recibido
    const body = await readBody(event)

    // extraer los datos del body
    const { nombre, nivel, anio } = body

    // formatear los datos para inserción
    const nombreNormalizado = typeof nombre === 'string' ? nombre.trim() : ''
    const nivelNumero = Number(nivel)
    const anioNumero = Number(anio)

    // insertar en BD
    const curso = await prisma.curso.create({
        data: {
            nombre: nombreNormalizado,
            nivel: nivelNumero,
            anio: anioNumero
        }
    })

    // enviar respuesta al cliente
    return {
        ok: true,
        curso
    }
})