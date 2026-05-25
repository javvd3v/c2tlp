<script lang="ts">
import type { Evento } from '~/types/evento'

const { data: eventos, pending, error, refresh } = await useFetch<Evento[]>('/api/eventos')


</script>


<template>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Comunidad - Usm Events</title>
        <link rel="shorcut icon" href="~/assets/img/Logo_UTFSM.png" type="image/png">
    </head>

    <body>

        <section
            class="max-w-full max-h-full px-4 sm:px-6 lg:px-8 py-16 bg-linear-to-b from-blue-900 to-gray-900 text-white">
            <h2 class="text-3xl font-mono text-center text-white mb-12">Opiniones sobre nuestros eventos:
                <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    <!-- Card 1 Opiniones -->
                    <div class="bg-gray-800 rounded-3xl shadow-md p-6 mb-6 justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                            alt="Carlitos Vera" class="w-12 h-12 bg-yellow-100 rounded-full">
                        <h3 class="text-sm font-semibold mb-2 text-yellow-300">Carlitos Vera</h3>
                        <p class="text-gray-300">¡Excelentes eventos!</p>
                        <p class="text-gray-400 text-xs text-right">2026-10-15</p>
                    </div>
                </div>
            </h2>

        </section>


        <!-- Pie de página -->
        <footer>
            <div class="bg-gray-900 text-white text-center py-5 mt-auto">
                <p>&copy; Javier Zamora, Ing. Informatica, Taller De Lenguaje de Programación.</p>
                <img class="hidden md:flex items-start justify-center" src="./img/Logo_UTFSM.png" alt="USM Logo"
                    style="height: 70px; margin-top: 10px;">
            </div>
        </footer>
    </body>
</template>