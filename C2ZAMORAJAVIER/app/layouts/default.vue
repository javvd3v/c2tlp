<script setup lang="ts">
const route = useRoute()
const isActive = (to: String) => route.path === to

const navigationItems = [
    { label: 'Inicio', to: '/' },
    { label: 'Eventos', to: '/eventos' },
    { label: 'Comunidad', to: '/comunidad' },
]


</script>


<template>

    <nav class="bg-linear-to-b from-blue-950 to-blue-900 text-white p-4 sticky">
        <div class="sticky flex flex-col sm:flex-row items-center justify-between w-full p-4 gap-4">
            <!-- Logo y nombre de la marca -->
            <div class="flex flex-col items-center text-center sm:text-left">
                <a>
                    <img src="~/assets/img/Logo_UTFSM.png" alt="USM Logo" style="height: 70px; margin-right: 15px;">
                </a>
                <p class="font-normal text-lg mt-1" style="color: var(--color-orange-yellow-300)">Usm
                    Events
                </p>
            </div>

            <!-- Links -->
            <nav class="flex flex-wrap justify-center sm:justify-end gap-2 w-full sm:w-auto">
                <NuxtLink v-for="item in navigationItems" :key="item.to" :to="item.to"
                    class="rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
                    :class="isActive(item.to) ?
                        'border-course-line-accent bg-course-surface-accent text-course-accent-strong shadow-sm'
                        : 'border-course-line-accent bg-course-surface text-course-text-soft hover:border-course-line-accent hover:text-course-accent-strong'">
                    {{ item.label }}
                </NuxtLink>
            </nav>

        </div>
    </nav>
</template>