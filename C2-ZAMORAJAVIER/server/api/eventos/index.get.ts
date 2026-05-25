export default defineEventHandler(async () => {
    // await new Promise(resolve=>setTimeout(resolve,3000))

    return await prisma.evento.findMany({
        orderBy:[{nombre:'asc'}, {estudiantes:{nombres:'asc'}}]
    })
})