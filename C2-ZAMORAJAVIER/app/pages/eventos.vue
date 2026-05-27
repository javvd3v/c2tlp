<script setup lang="ts">
import type { Evento } from '~/types/eventos'

// Estado reactivo
const mostrarFormulario = ref(false)
const guardandoEvento = ref(false)
const errorFormulario = ref('')

// Formulario para nuevo evento
const nuevoEvento = reactive({
    titulo: '',
    lugar: '',
    fecha: '',
    hora: '',
    valor: 0,
    topePersonas: 0,
    imagenURL: ''
})

// Obtener eventos desde la API
const { data: eventos, pending, error, refresh } = await useFetch<Evento[]>('/api/eventos')

// Función para formatear cupos disponibles
const cuposDisponibles = (evento: Evento) => {
    const inscritos = evento.estudiantes?.length || 0
    return evento.topePersonas - inscritos
}

// Función para formatear precio
const formatearPrecio = (valor: number) => {
    if (valor === 0) return 'Gratis'
    return `$${valor.toLocaleString('es-CL')}`
}

// Limpiar formulario
const limpiarFormulario = () => {
    nuevoEvento.titulo = ''
    nuevoEvento.lugar = ''
    nuevoEvento.fecha = ''
    nuevoEvento.hora = ''
    nuevoEvento.valor = 0
    nuevoEvento.topePersonas = 0
    nuevoEvento.imagenURL = ''
    errorFormulario.value = ''
}

// Cerrar formulario
const cerrarFormulario = () => {
    mostrarFormulario.value = false
    limpiarFormulario()
}

// Crear evento
async function crearEvento() {
    errorFormulario.value = ''
    guardandoEvento.value = true

    try {
        await $fetch('/api/eventos', {
            method: 'POST',
            body: {
                titulo: nuevoEvento.titulo,
                lugar: nuevoEvento.lugar,
                fecha: nuevoEvento.fecha,
                hora: nuevoEvento.hora,
                imagen: nuevoEvento.imagenURL,
                valor: nuevoEvento.valor,
                topePersonas: nuevoEvento.topePersonas,
                estudiantes: []
            }
        })

        cerrarFormulario()
        await refresh()
    } catch (err: any) {
        errorFormulario.value = getApiErrorMessage(err, 'No se pudo guardar el evento.')
    } finally {
        guardandoEvento.value = false
    }
}

// Inscribirse a un evento
async function inscribirse(eventoId: number) {
    try {
        await $fetch(`/api/eventos/${eventoId}/inscribir`, {
            method: 'POST'
        })
        await refresh()
    } catch (err: any) {
        console.error('Error al inscribirse:', err)
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
                                size="sm" @click="inscribirse(evento.id)" class="rounded-full px-5">
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

    <!-- Modal para crear evento -->
    <BaseFormModal v-model:open="mostrarFormulario" title="Crear Nuevo Evento"
        description="Ingresa los detalles del nuevo evento para publicarlo en la plataforma.">
        <form class="space-y-5" @submit.prevent="crearEvento">
            <UAlert v-if="errorFormulario" color="error" variant="soft" :title="errorFormulario" class="mb-4" />

            <UFormField label="Título del Evento" required name="titulo">
                <UInput v-model="nuevoEvento.titulo" placeholder="Ej: Workshop de Vue" required />
            </UFormField>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UFormField label="Lugar" name="lugar">
                    <UInput v-model="nuevoEvento.lugar" placeholder="Ej: Auditorio Central" />
                </UFormField>

                <UFormField label="Hora" name="hora">
                    <UInput v-model="nuevoEvento.hora" type="time" placeholder="--:--" />
                </UFormField>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UFormField label="Fecha del Evento" required name="fecha">
                    <UInput v-model="nuevoEvento.fecha" type="date" required />
                </UFormField>

                <UFormField label="Cupos Máximos" required name="topePersonas">
                    <UInput v-model.number="nuevoEvento.topePersonas" type="number" min="0" placeholder="0" required />
                </UFormField>
            </div>

            <UFormField label="Valor" name="valor">
                <UInput v-model.number="nuevoEvento.valor" type="number" min="0" placeholder="0" />
                <template #help>
                    <span class="text-xs text-gray-400">Dejar en 0 si es gratuito</span>
                </template>
            </UFormField>

            <UFormField label="URL de la Imagen" name="imagenURL">
                <UInput v-model="nuevoEvento.imagenURL" placeholder="Ej: https://ejemplo.com/imagen.jpg" />
                <template #help>
                    <span class="text-xs text-gray-400">Ingresa la URL completa de la imagen del evento</span>
                </template>
            </UFormField>

            <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <UButton type="button" color="neutral" variant="subtle" @click="cerrarFormulario">
                    Cancelar
                </UButton>
                <UButton type="submit" color="primary" icon="i-heroicons-check" :loading="guardandoEvento">
                    Crear Evento
                </UButton>
            </div>
        </form>
    </BaseFormModal>
</template>