export default defineEventHandler(async () => {
    // await new Promise(resolve=>setTimeout(resolve,3000))

    return await prisma.estudiante.findMany({
        orderBy:[{nombres:'asc'}, {evento:{nombre:'asc'}}]
    })
})