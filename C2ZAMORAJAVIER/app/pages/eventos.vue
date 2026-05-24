<template>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eventos - Usm Events</title>

        <link rel="shorcut icon" href="~/assets/img/Logo_UTFSM.png" type="image/png">
    </head>

    <body>
        <nav class="bg-linear-to-b from-blue-950 to-blue-900 text-white p-4 sticky">

            <!-- Hero -->
            <header>
                <p class="flex justify-center text-md font-medium text-center bg-blue-900 text-white px-5 py-5">
                    Acá se encuentran los eventos más recientes dentro de la universidad, haciendo énfasis a las
                    actividades culturales y académicas.
                </p>

            </header>

            <!-- Cards -->

            <section
                class=" max-w-8xl mx-auto px-8 text-center font-sans text-5xl bg-linear-to-b from-blue-900 to-gray-900 py-20">
                <!-- cards de eventos -->
                <h2 class="text-3xl font-light text-center text-white mb-15">
                    Próximos eventos:

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 justify-items-center">

                        <!-- Card 1 Eventos -->
                        <div class="flex flex-col  bg-gray-800 rounded-xl shadow-lg p-6 mb-6 ">
                            <img src="https://www.valparaisonoticias.cl/wp-content/uploads/2023/04/occh-teatro-aula-magna-3.jpg"
                                alt="Evento 1" class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Concierto de Ópera - 21
                                de Abril, 18:00 hrs</h3>
                            <p class="text-sm text-gray-300">Música - $2000</p>
                        </div>

                        <!-- Card 2 Eventos -->
                        <div class="flex flex-col bg-gray-800 rounded-xl shadow-md p-6 mb-6 ">
                            <img src="https://www.valparaisonoticias.cl/wp-content/uploads/2023/04/occh-teatro-aula-magna-3.jpg"
                                alt="Evento 2" class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Concierto de Ópera - 25
                                de Abril, 19:00 hrs</h3>
                            <p class="text-sm text-gray-300">Música - $2500</p>
                        </div>

                        <!-- Card 3 Eventos -->

                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/03/Redes-23ABRIL.jpg" alt="Evento 3"
                                class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Charla sobre Sansanos al
                                Extranjero - 23 de Abril, 12:15 hrs</h3>
                            <p class="text-sm text-gray-300">Charla - Gratuito</p>
                        </div>
                        <!-- Card 4 Eventos -->

                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/03/573797-Candlelight_MEDIAKIT_GENERIC_2023_05_19_Masonic-Memorial-Centre-Freemasons-Queensland_BRISBANE_AU_09-d3947a-original-1737994890.jpg"
                                alt="Evento 4" class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Tributo a Bob Dylan
                                - 3 de Mayo, 19:00 hrs</h3>
                            <p class="text-sm text-gray-300">Música - $3000</p>
                        </div>

                        <!-- Card 5 Eventos -->
                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/03/Redes-23ABRIL.jpg" alt="Evento 5"
                                class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Charla sobre
                                Sansanos al Extranjero - 28 de Abril, 12:15 hrs</h3>
                            <p class="text-sm text-gray-300">Charla - Gratuito</p>
                        </div>

                        <!-- Card 6 Eventos -->

                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/03/Rodolfo-con-Astillero-1024x683.png"
                                alt="Evento 6" class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Noche de
                                Tango - 25 de Abril, 19:00 hrs</h3>
                            <p class="text-sm text-gray-300">Música - $2000</p>
                        </div>


                        <!-- Card 7 Eventos -->
                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/04/Mes-del-libro-2026.png" alt="Evento 7"
                                class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">Mes del
                                Libro - 6 al 30 de Abril, Todo el día</h3>
                            <p class="text-sm text-gray-300">Actividades - Gratuito</p>
                        </div>

                        <!-- Card 8 Eventos -->

                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/04/taller-empleabilidad-2026-1.png"
                                alt="Evento 8" class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">
                                Taller de Empleabilidad - 29 de Abril, 18:15 hrs</h3>
                            <p class="text-sm text-gray-300">Talleres - Gratuito</p>
                        </div>

                        <!-- Card 9 Eventos -->
                        <div class="bg-gray-800 rounded-xl shadow-md p-6 mb-6 flex flex-col">
                            <img src="https://usm.cl/wp-content/uploads/2026/03/Sin-titulo-1882-e1773423177426.jpg"
                                alt="Evento 9" class="object-cover w-full h-48 rounded xl items-center">
                            <h3 class="text-md font-semibold mb-2 text-yellow-300 ">
                                Orquesta Sinfónica - 30 de Abril, 18:15 hrs</h3>
                            <p class="text-sm text-gray-300">Conciertos - $5000</p>
                        </div>

                    </div>

                </h2>
            </section>
        </nav>

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