export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    if (!id) {
        throw createError({
            statusCode: 400,
            message: 'ID is required'
        })
    }

    try {

        return await prisma.evento.delete({
            where: { id: Number(id) }
        })
    }
    catch (error) {
        throw createError({
            statusCode: 500,
            message: 'Error deleting event'
        })
    }
})