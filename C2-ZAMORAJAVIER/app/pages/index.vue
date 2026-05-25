<script lang="ts">


</script>


<template>

    <div>
        <div>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inicio - Usm Events</title>
            <link rel="shorcut icon" href="~/assets/img/Logo_UTFSM.png" type="image/png">
        </div>

        <div>


            <!---- navbar de logo ---->

            <!-- Links de navegación
            <nav class="sticky top-0 bottom-10">
                <div
                    class="justify-center sm:items-center items-center flex font-sans bg-blue-900 text-white text-sm font-medium sm:text-base ">
                    <a href="./index.html"
                        class="px-3 py-2 hover:bg-blue-800 hover:text-amber-300 rounded transition-colors">Inicio</a>
                    <a href="./eventos.html"
                        class="px-3 py-2 hover:bg-blue-800 hover:text-amber-300 rounded transition-colors">Eventos</a>
                    <a href="./comunidad.vue"
                        class="px-3 py-2 hover:bg-blue-800 hover:text-amber-300 rounded transition-colors">Comunidad</a>
                </div>

            </nav>
-->
            <!-- Hero -->

            <div>


                <div class=" bg-linear-to-b from-blue-900 to-gray-900 text-white py-50 text-center font-light">
                    <img src="~/assets/img/Sede-Vina.webp" class=" size-96 rounded-2xl mx-auto" alt="">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">¡Bienvenido a <span
                            class="text-yellow-200 font-bold">Usm Events</span>!</h1>
                    <p class="text-lg md:text-xl py-5">Descubre los mejores eventos en la <span
                            class="text-blue-200 font-bold">Universidad Técnica Federico Santa María</span></p>

                </div>
            </div>
            <!-- Cards -->

            <div class="max-w-full max-h-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-900">
                <h2 class="text-3xl font-mono text-center text-white mb-12">Opiniones sobre nuestros eventos:
                    <div class=" grid flex-gap gap-5 p-4 justify-center md:flex">

                        <!-- Card 1 Opiniones -->
                        <div class="bg-gray-800 rounded-2xl shadow-md p-8 mb-6 justify-center">

                            <h3 class="text-xl font-semibold mb-2 text-yellow-300">"¡Increíble experiencia!"</h3>
                            <p class="text-gray-300">-Carlitos Vera</p>
                        </div>

                        <!-- Card 2 Opiniones -->
                        <div class="bg-gray-800 rounded-2xl shadow-md p-8 mb-6 justify-center">
                            <h3 class="text-xl font-semibold mb-2 text-yellow-300">"Eventos bien organizados"</h3>
                            <p class="text-gray-300">-María González</p>
                        </div>

                        <!-- Card 3 Opiniones -->
                        <div class="bg-gray-800 rounded-2xl shadow-md p-8 mb-6 justify-center">
                            <h3 class="text-xl font-semibold mb-2 text-yellow-300">"¡Siempre hay algo nuevo!"</h3>
                            <p class="text-gray-300">-Pedro Martínez</p>
                        </div>

                    </div>

                </h2>

                <h2>
                    <div class="text-center mt-10">
                        <a href="./eventos.vue"
                            class="inline-block bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 hover:text-amber-200 transition-colors">Ver
                            Próximos Eventos</a>
                    </div>
                </h2>
            </div>

            <!-- Pie de página -->
            <div>
                <div class="bg-gray-900 text-white text-center py-5 mt-auto">
                    <p>&copy; Javier Zamora, Ing. Informatica, Taller De Lenguaje de Programación.</p>
                    <img class="hidden md:flex items-start justify-center" src="~/assets/img/Logo_UTFSM.png"
                        alt="USM Logo" style="height: 70px; margin-top: 10px;">
                </div>
            </div>

        </div>

    </div>

</template>