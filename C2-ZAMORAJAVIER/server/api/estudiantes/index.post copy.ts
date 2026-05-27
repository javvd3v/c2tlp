export default defineEventHandler(async (event) => {
    // obtener el body desde el request recibido
    const body = await readBody(event)

    // extraer los datos del body
    const {run, nombre, apellido, email, fechaNac, eventoId, evento} = body

    //run String @id @db.VarChar(10)
    //nombres String @db.VarChar(100)
    //apellidos String @db.VarChar(100)
    //email String? @db.VarChar(150)
    //fechaNac DateTime?
    //eventoId Int
    //evento Evento @relation(fields: [eventoId],references: [id])
    //@@index([eventoId])

    // formatear los datos para inserción

    const runNormalizado = typeof run === 'string' ? run.trim() : ''
    const nombreNormalizado = typeof nombre === 'string' ? nombre.trim() : ''
    const apellidoNormalizado = typeof apellido === 'string' ? apellido.trim() : ''
    const emailNormalizado = typeof email === 'string' ? email.trim() : ''
    const fechaNacNormalizada = typeof fechaNac === 'string' ? fechaNac.trim() : ''
    const eventoIdNormalizado = typeof eventoId === 'number' ? eventoId : 0
    const eventoNormalizado = typeof evento === 'object' ? evento : null

    // insertar en BD
    const estudiantes = await prisma.estudiante.create({
        data: {
            run: runNormalizado,
            nombres: nombreNormalizado,
            apellidos: apellidoNormalizado,
            email: emailNormalizado,
            fechaNac: new Date(fechaNacNormalizada),
            eventoId: eventoIdNormalizado,
            evento: eventoNormalizado
        }
    })

    // enviar respuesta al cliente
    return {
        ok: true,
        estudiantes
    }
})