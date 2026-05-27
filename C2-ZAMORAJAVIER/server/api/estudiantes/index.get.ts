export default defineEventHandler(async () => {
    // await new Promise(resolve=>setTimeout(resolve,3000))

    return await prisma.estudiante.findMany({
        include: {
            evento: true
        },
        orderBy:[{run:'desc'}, {evento:{fecha:'desc'}}]
    })
})