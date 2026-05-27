export default defineEventHandler(async () => {
    // await new Promise(resolve=>setTimeout(resolve,3000))

    return await prisma.evento.findMany({
        include: {
            estudiantes: true
        },
        orderBy:{fecha:'desc'}})
    })