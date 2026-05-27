<script setup lang="ts">
const open = defineModel<boolean>('open', { default: false })

defineProps<{
    title: string
    description?: string
}>()

const close = () => {
    open.value = false
}
</script>


<template>
    <Teleport to="body">

        <!-- Modal: contenido flotante -->
        <div v-if="open" class="fixed inset-0 z-9999 flex items-center justify-center p-4" @click.stop>
            <UCard class="w-full max-w-lg rounded-2xl shadow-2xl bg-white">
                <template #header>
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">{{ title }}</h3>
                            <p v-if="description" class="text-sm text-gray-500 mt-1">{{ description }}</p>
                        </div>
                        <UButton color="neutral" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="rounded-full"
                            @click="close" />
                    </div>
                </template>
                <slot />
            </UCard>
        </div>

        <!-- Modal: fondo oscuro x detrás  -->
        <div v-if="open" class="fixed inset-0 z-9998 bg-black/50 backdrop-blur-sm" @click="close" />

    </Teleport>
</template>
