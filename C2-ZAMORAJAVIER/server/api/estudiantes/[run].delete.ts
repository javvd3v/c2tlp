export default defineEventHandler(async (event) => {
    const run = event.context.params?.run as string
    
    
    const estudiante = await prisma.estudiante.delete({
        where: { run }
    })
    
    return {
        ok: true,
        message: 'Estudiante eliminado correctamente',
        estudiante
    }
})