<script setup lang="ts">
import type { Evento } from '~/types/eventos'

// constantes para estudiantes

const mostrarFormularioEstudiante = ref(false)
const guardandoEstudiante = ref(false)
const errorFormularioEstudiante = ref('')

const nuevoEstudiante = reactive({
    run: '',
    nombres: '',
    apellidos: '',
    email: ''
})

const eventoSeleccionado = ref<Evento | null>(null)

const { data: eventos, pending, error, refresh } = await useFetch<Evento[]>('/api/eventos')


const cuposDisponibles = (evento: Evento) => {
    const inscritos = evento.estudiantes?.length || 0
    return evento.topePersonas - inscritos
}


const formatearPrecio = (valor: number) => {
    if (valor === 0) return 'Gratis'
    return `$${valor.toLocaleString('es-CL')}`
}


const eliminarEstudiante = async (id: number) => {
    try {
        await $fetch(`/api/estudiantes/${id}`, { method: 'DELETE' })
        await refresh()
    } catch (err) {
        console.error('Error al eliminar estudiante:', err)
    }
}

const cerrarFormularioEstudiante = () => {
    mostrarFormularioEstudiante.value = false
    limpiarFormularioEstudiante()
}

const limpiarFormularioEstudiante = () => {
    nuevoEstudiante.nombres = ''
    nuevoEstudiante.apellidos = ''
    nuevoEstudiante.email = ''
    errorFormularioEstudiante.value = ''
}


async function agregarEstudiante(id: number) {
    errorFormularioEstudiante.value = ''
    guardandoEstudiante.value = true

    try {
        await $fetch('/api/estudiantes', {
            method: 'POST',
            body: {
                run: nuevoEstudiante.run,
                nombres: nuevoEstudiante.nombres,
                apellidos: nuevoEstudiante.apellidos,
                email: nuevoEstudiante.email,
                eventoId: eventoSeleccionado.value?.id || id
            }
        })

        cerrarFormularioEstudiante()
        await refresh()
    } catch (err: any) {
        // si existe helper para extraer mensaje, usarlo; si no, usar mensaje por defecto
        try {
            errorFormularioEstudiante.value = getApiErrorMessage(err, 'No se pudo guardar el estudiante.')
        } catch {
            errorFormularioEstudiante.value = 'No se pudo guardar el estudiante.'
        }
    } finally {
        guardandoEstudiante.value = false
    }
}

</script>

<template>
    <div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-10">
                <h1 class="text-4xl font-bold text-blue-900 mb-2">Eventos USM</h1>
                <p class="text-lg text-gray-600">Regístrate en el evento que más te interese dentro de las opciones
                    disponibles:</p>
            </div>

            <UButton icon="i-heroicons-arrow-path" color="primary" variant="soft" :loading="pending"
                @click="() => refresh()" class="self-start rounded-full px-5 text-course-accent-strong shadow-sm mb-6">
                Actualizar
            </UButton>

            <!-- Estado de carga -->
            <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="i in 3" :key="i" class="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <USkeleton class="h-48 w-full" />
                    <div class="p-6 space-y-3">
                        <USkeleton class="h-6 w-3/4" />
                        <USkeleton class="h-4 w-full" />
                        <USkeleton class="h-4 w-full" />
                        <USkeleton class="h-10 w-full mt-4" />
                    </div>
                </div>
            </div>

            <!-- Error -->
            <UAlert v-if="error" color="error" variant="soft" class="rounded-2xl mb-6"
                :title="error.statusMessage || 'Error al cargar los eventos'" icon="i-heroicons-exclamation-triangle" />

            <!-- Grid de tarjetas de eventos -->
            <div v-else-if="eventos && eventos.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div v-for="evento in eventos" :key="evento.id"
                    class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                    <!-- Imagen del evento -->
                    <div class="relative h-48 overflow-hidden bg-linear-to-br from-blue-500 to-blue-800">
                        <img v-if="evento.imagen" :src="evento.imagen" :alt="evento.titulo"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div v-else class="w-full h-full flex items-center justify-center">
                            <UIcon name="i-heroicons-calendar" class="w-16 h-16 text-white/50" />
                        </div>
                    </div>

                    <!-- Contenido de la tarjeta -->
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                            {{ evento.titulo }}
                        </h3>

                        <div class="space-y-2 text-sm text-gray-600">
                            <div class="flex items-center gap-2">
                                <UIcon name="i-heroicons-calendar-days" class="w-4 h-4" />
                                <span>{{ evento.fecha }}</span>
                            </div>

                            <div class="flex items-center gap-2">
                                <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
                                <span>{{ evento.lugar || 'Lugar por definir' }}</span>
                            </div>

                            <div class="flex items-center gap-2">
                                <UIcon name="i-heroicons-users" class="w-4 h-4" />
                                <span>{{ cuposDisponibles(evento) }} cupos disponibles de {{ evento.topePersonas
                                }}</span>
                            </div>
                        </div>

                        <!-- Precio y botón -->
                        <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span class="text-2xl font-bold text-blue-800">
                                {{ formatearPrecio(evento.valor) }}
                            </span>

                            <UButton :disabled="cuposDisponibles(evento) === 0" color="secondary" variant="solid"
                                size="sm" @click="mostrarFormularioEstudiante = true; eventoSeleccionado = evento"
                                class="rounded-full px-5">
                                {{ cuposDisponibles(evento) === 0 ? 'Completo' : 'Inscribirse' }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mensaje sin eventos -->
            <div v-else-if="!error && !pending && (!eventos || eventos.length === 0)"
                class="text-center py-12 bg-white rounded-2xl shadow-sm">
                <UIcon name="i-heroicons-calendar" class="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p class="text-gray-500 text-lg">No hay eventos actualmente</p>
            </div>
        </div>
    </div>

    <!-- Modal para inscribirse en un evento -->
    <BaseFormModal v-model:open="mostrarFormularioEstudiante" title="Inscribirse a Evento"
        description="Ingresa los detalles para inscribirte en el evento.">
        <form class="space-y-5" @submit.prevent="agregarEstudiante(eventoSeleccionado?.id ?? 0)">
            <UAlert v-if="errorFormularioEstudiante" color="error" variant="soft" :title="errorFormularioEstudiante"
                icon="i-heroicons-exclamation-triangle" class="mb-4" />

            <UFormField label="RUN del estudiante" required name="run">
                <UInput v-model="nuevoEstudiante.run" placeholder="Ej: 12345678-9" required />
                <template #help>
                    <span class="text-xs text-gray-400">Formato: XXXXXXXX-X</span>
                </template>
            </UFormField>

            <UFormField label="Nombre/Nombres del estudiante" required name="nombres">
                <UInput v-model="nuevoEstudiante.nombres" placeholder="Ej: Juan" required />
            </UFormField>

            <UFormField label="Apellido/Apellidos del estudiante" required name="apellidos">
                <UInput v-model="nuevoEstudiante.apellidos" placeholder="Ej: Pérez" required />
            </UFormField>


            <UFormField label="Correo electrónico del estudiante" name="email">
                <UInput v-model="nuevoEstudiante.email" type="email" placeholder="Ej: juan.perez@ejemplo.com" />
            </UFormField>

            <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <UButton type="button" color="neutral" variant="subtle" @click="cerrarFormularioEstudiante">
                    Cancelar
                </UButton>
                <UButton type="submit" color="primary" icon="i-heroicons-check" :loading="guardandoEstudiante"
                    @click="agregarEstudiante(eventoSeleccionado!.id)">
                    Inscribirse
                </UButton>
            </div>
        </form>
    </BaseFormModal>
</template>