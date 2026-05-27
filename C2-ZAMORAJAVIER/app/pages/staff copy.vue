<script setup lang="ts">

import type { Evento } from '~/types/eventos'


const { data: eventos, pending, error, refresh } = await useFetch<Evento[]>('/api/eventos')

// console.log('Hola Mundo')
// console.log(eventos.value)





// ref significa variable reactiva.
// cuando cambian de valor, VUE actualiza la página
const mostrarFormulario = ref(false)
const guardandoEvento = ref(false)
const errorFormulario = ref('')

const formEvento = reactive({
    titulo: '',
    fecha: '',
    hora: '',
    lugar: '',
    imagen: '',
    valor: 0,
    topePersonas: 0,
    estudiantes: [] as string[]
})

function limpiarFormulario() {
    formEvento.titulo = ''
    formEvento.fecha = ''
    formEvento.hora = ''
    formEvento.lugar = ''
    formEvento.imagen = ''
    formEvento.valor = 0
    formEvento.topePersonas = 0
    formEvento.estudiantes = []
    errorFormulario.value = ''
}

function cerrarFormulario() {
    mostrarFormulario.value = false
    limpiarFormulario()
}

async function guardarEvento() {
    errorFormulario.value = ''
    guardandoEvento.value = true

    try {
        await $fetch('/api/eventos', {
            method: 'POST',
            body: {
                titulo: formEvento.titulo,
                fecha: formEvento.fecha,
                hora: formEvento.hora,
                lugar: formEvento.lugar,
                imagen: formEvento.imagen,
                valor: formEvento.valor,
                topePersonas: formEvento.topePersonas,
                estudiantes: formEvento.estudiantes
            }
        })
        cerrarFormulario()
        await refresh()
    } catch (err: any) {
        errorFormulario.value = getApiErrorMessage(err, 'No se pudo guardar el evento.')
    }
    finally {
        guardandoEvento.value = false
    }
}

</script>


<template>
    <div class="mx-auto space-y-6">

        <div class="mb-4 flex items-center justify-between border-b border-course-line-soft pb-4">
            <div>
                <h2 class="text-lg font-semibold text-course-text">Listado de eventos</h2>
                <p class="text-sm text-course-text-muted">Se muestran los eventos.</p>
            </div>

            <!-- botón para mostrar formulario -->
            <UButton @click="mostrarFormulario = true" icon="i-heroicons-plus" color="secondary"
                class="self-start rounded-full px-5 text-course-accent-strong shadow-sm">
                Agregar Evento
            </UButton>


        </div>

        <BaseFormModal :open="mostrarFormulario" @update:open="(val: boolean) => { mostrarFormulario = val }"
            title="Crear Nuevo Evento"
            description="Ingresa los detalles del nuevo evento para publicarlo en la plataforma.">
            <form class="space-y-4" @submit.prevent="guardarEvento">

                <UFormField label="Título del Evento" name="titulo">
                    <UInput v-model="formEvento.titulo" required placeholder="Ej: Workshop de Vue" />
                </UFormField>

                <div class="grid grid-cols-2 gap-4">
                    <UFormField label="Lugar" name="lugar">
                        <UInput v-model="formEvento.lugar" placeholder="Ej: Auditorio Central" />
                    </UFormField>

                    <UFormField label="Fecha del Evento" name="fecha">
                        <UInput v-model="formEvento.fecha" placeholder="Ej: 25 de mayo, 2026" class="w-full" />
                    </UFormField>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <UFormField label="Precio" name="valor">
                        <UInput v-model.number="formEvento.valor" type="number" placeholder="0" />
                    </UFormField>
                    <UFormField label="Cupos Máximos" name="topePersonas">
                        <UInput v-model.number="formEvento.topePersonas" type="number" placeholder="50" required />
                    </UFormField>
                </div>

                <!-- Para insertar una imagen desde la carpeta public -->

                <<UFormField label="Nombre de la imagen" name="imagenURL">
                    <UInput v-model="formEvento.imagen" placeholder="Ej: evento-verano.jpg" />
                    <template #help>
                        <span class="text-xs text-gray-400">
                            Asegúrate de que la imagen esté en la carpeta /public/images/
                        </span>
                    </template>
                    </UFormField>




                    <div class="flex justify-end gap-3 pt-2">
                        <UButton type="button" color="neutral" variant="subtle" @click="mostrarFormulario = false">
                            Cancelar
                        </UButton>
                        <UButton type="submit" color="secondary" icon="i-heroicons-check">
                            Confirmar Inscripción
                        </UButton>
                    </div>
            </form>
        </BaseFormModal>


        <!-- Cargando -->
        <div v-if="pending" class="space-y-4 rounded-3xl border border-course-line bg-course-surface-soft p-6">
            <div class="space-y-1">
                <p class="text-sm font-semibold text-course-header">Cargando eventos...</p>
                <p class="text-sm text-course-text-muted">Estamos actualizando la información de la tabla.</p>
            </div>
            <USkeleton class="h-96 w-full rounded-3xl bg-course-line-soft" />
        </div>

        <!-- Error -->
        <div v-else-if="error" class="space-y-4 rounded-3xl border border-red-300 bg-red-50 p-6">
            <div class="space-y-1">
                <p class="text-sm font-semibold text-red-900">Error al cargar eventos</p>
                <p class="text-sm text-red-700">No se pudo obtener la información de los eventos. Intenta recargar la
                    página.
                </p>
            </div>

        </div>

    </div>

    <!--
    <BaseFormModal v-model:open="mostrarFormulario" @update:open="(val) => {mostrarFormulario = val}" title="Agregar Evento"
            description="Completa los datos para registrar un nuevo evento.">
            <form class="space-y-4" @submit.prevent="guardarEvento">

                <UAlert v-if="errorFormulario" color="error" variant="soft" :title="errorFormulario" class="mb-4" />

                <UFormField label="Título" name="titulo" :ui="modalFormFieldUi">
                    <UInput v-model="formEvento.titulo" color="neutral" variant="outline" :ui="modalInputUi"
                        class="w-full" placeholder="Ej: Concierto de Invierno" required />
                </UFormField>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <UFormField label="Fecha" name="fecha" :ui="modalFormFieldUi">
                        <UInput v-model="formEvento.fecha" type="date" color="neutral" variant="outline"
                            :ui="modalInputUi" class="w-full" required />
                    </UFormField>

                    <UFormField label="Hora" name="hora" :ui="modalFormFieldUi">
                        <UInput v-model="formEvento.hora" type="time" color="neutral" variant="outline"
                            :ui="modalInputUi" class="w-full" required />
                    </UFormField>
                </div>

                <UFormField label="Lugar" name="lugar" :ui="modalFormFieldUi">
                    <UInput v-model="formEvento.lugar" color="neutral" variant="outline" :ui="modalInputUi"
                        class="w-full" placeholder="Ej: Auditorio Principal" />
                </UFormField>

                <UFormField label="URL de la Imagen" name="imagen" :ui="modalFormFieldUi">
                    <UInput v-model="formEvento.imagen" color="neutral" variant="outline" :ui="modalInputUi"
                        class="w-full" placeholder="Ej: https://tusitio.com/imagen.jpg" />
                </UFormField>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <UFormField label="Valor ($)" name="valor" :ui="modalFormFieldUi">
                        <UInput v-model.number="formEvento.valor" type="number" min="0" color="neutral"
                            variant="outline" :ui="modalInputUi" class="w-full" placeholder="Ej: 5000" />
                    </UFormField>

                    <UFormField label="Tope de Personas" name="topePersonas" :ui="modalFormFieldUi">
                        <UInput v-model.number="formEvento.topePersonas" type="number" min="0" color="neutral"
                            variant="outline" :ui="modalInputUi" class="w-full" placeholder="Ej: 100" />
                    </UFormField>
                </div>

                <div class="flex justify-end gap-3 pt-4 border-t border-course-line-soft">
                    <UButton type="button" color="neutral" variant="subtle" @click="cerrarFormulario"
                        :disabled="guardandoEvento">
                        Cancelar
                    </UButton>

                    <UButton type="submit" color="primary" icon="i-heroicons-check" :loading="guardandoEvento">
                        Guardar Evento
                    </UButton>
                </div>
            </form>
        </BaseFormModal> -->



</template>