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