<script lang="ts">
    import bar from "$lib/assets/bar.png"
    import aguila from "$lib/assets/aguila.png"
    import candado from "$lib/assets/candado.png"
    import binoculares from "$lib/assets/binoculares.png"
    import megafono from "$lib/assets/megafono.png"
    import corazon from "$lib/assets/corazon.png"
    import fondoBtn from "$lib/assets/fondo-btn.png"
    import mapa from "$lib/assets/mapa.png"
    import jaguar from "$lib/assets/jaguar.png"
    import mico from "$lib/assets/mico.png"
    import caiman from "$lib/assets/caiman.png"
    import cardenalito from "$lib/assets/cardenalito.png"
    import instagram from "$lib/assets/instagram.svg"
    import discord from "$lib/assets/discord.svg"
    import X from "$lib/assets/X.svg"

    const benefits = [
        {
            icon: binoculares,
            title: "Safaris virtuales",
            body: "Observa diferentes ambientes en los que viven estas especies en peligro de extincion."
        },
        {
            icon: megafono,
            title: "Conferencias invitadas",
            body: "De conservacionestas de renombre."
        },
        {
            icon: corazon,
            title: "Participar y apoyar",
            body: "Oportunidades para participar en proyectos de conservación con nuestros alidados."
        },
    ]

    const benefitsProgress = [
        {step: 10, body:`Una vez que alcancemos nuestra primera activación, el 10% de los fondos
        generados por la venta de NFT se donarán a una organización de conservación
        acreditada que trabaja para proteger especies en peligro de extinción. Los
        miembros de nuestro club tendrán la oportunidad de votar qué organización
        recibirá la donación.`},
        {step: 20, body: `Al 20%, lanzaremos una serie NFT de edición limitada que solo estará
        disponible para los miembros de nuestro club. La serie presentará animales en
        peligro de extinción que han sido reintroducidos con éxito en sus hábitats
        naturales gracias al apoyo de los esfuerzos de conservación.`},
        {step: 40, body: `Una vez que alcancemos el 40%, lanzaremos una experiencia interactiva de
        realidad virtual que permitirá a los miembros de nuestro club sumergirse en
        los hábitats de las especies en peligro de extinción y conocer los desafíos que
        enfrenta.`},
        {step: 60, body:`Al 60%, organizaremos un viaje exclusivo a una reserva de vida salvaje para un
        grupo de socios de nuestro club. Este viaje brindará una oportunidad única
        para experimentar la belleza de los animales en peligro de extinción en sus
        hábitats naturalres miemtras aprenden de primera mano sobre los esfuerzon
        de conservación.`},
        {step: 80, body: `Cuando alcancemos el 80%, nos asociaremos con una organización de
        conservación líder para lanzar un nuevo proyecto de conservación que
        beneficiará directamente a una especie en peligro de extinción. Los miembors
        del club tendrán la oportunidad de participar en este proyecto y hacer una
        con tribución significativa a los esfuerzos de conservaci+on en de animales
        en peligro de extinción en sus hábitats naturales mientras aprenden de primera mano sobre
        los esfuerzos de conservación.`},
        {step: 100, body: `Finalmente, cuando alcancemos el 100%, donaremos el 50% de los fondos 
        generados por la venta de NFT a organizaciones conservacionestas que
        trabajan para proteger especies en peligro de extinción. El 50% restante se
        utilizará para continuar con nuestros esfuerzos de sensibilización y apoyo a
        los esfuerzos de conservación.`}
    ]

    const team = [
        {
            img: jaguar,
            title: ["El", "Jefe"],
            body: "Adicto a los videojuegos y a las pizzas."
        },
        {
            img: mico,
            title: ["Lola", "Mento"],
            body: "A veces es muy sentimental."
        },
        {
            img: caiman,
            title: ["", "Jeff"],
            body: "No habla mucho,\n solo es Jeff."
        },
        {
            img: cardenalito,
            title: ["Princesa", "Brillo Rosa"],
            body: "(Ella dice que no, pero es la\n sifrina del grupo.)"
        },
    ]
</script>
<main class="flex flex-col items-center container">
    <div class="max-w-[1024px]">
        <section
        id="banner"
        class="flex justify-center">
            <span class="relative">
                <img src={bar} alt="bar"/>
                <div class="absolute bottom-12 w-full">
                    <div class="flex gap-24 justify-center items-center">
                        {#each [discord, X, instagram] as brand}
                            <div class="bg-[#40342e] p-2 rounded-lg">
                                <img src={brand} alt={brand} class="h-[30px]"/>
                            </div> 
                        {/each}
                    </div>
                </div>
            </span>
        </section>
        <section
        >
            <article
                class="flex justify-between items-center relative"
            >
                <div class="max-w-[500px] space-y-4">
                    <h1 class="section-title">¿Qué es animalasos?</h1>
                    <p class="section-body">
                        Primero que nada, bienvenido a nuestro sitio web, aquí nos
                        dedicamos a la venta de <span class="text-verde">NFT enfocados a la conservacíon
                        de animales en peligro de extincíon.</span>
                    </p>
                    <p class="section-body">
                        Nuestra misión es crear conciencia y generar fondos para
                        apoyar la protección y preservacion de especies que se
                        encuentran en peligro de extinción actualmente en Venzuela.
                    </p>
                </div>
                <img src={aguila} alt="" class="aguila"/>
            </article>
            <article
            class="flex justify-between items-center">
                <div class="max-w-[500px] space-y-4">
                    <h1 class="section-title">Especificaciones</h1>
                    <p class="section-body">
                        Nuestros NFT sin activos digitales únicos y altamente
                        coleccionables. Cada uno presenta una obra de arte original
                        creada por artistas talentosos que representan animales en 
                        peligro de extinción en sus hábitats naturales.
                    </p>
                </div>
                <img src={aguila} alt="candado"/>
            </article>

        </section>
        <section class="" style="box-shadow: 0px 0px 62px -20px rgba(115, 154, 65, 0.55);">
            <h1 class="section-title !text-lg !font-medium text-center my-14 p-4">
                Nuestros NFT se acuñan en la cadena de bloques de Polygon, 
                lo que garantiza su autenticidad y escazes
            </h1>
        </section>
        <section
        >
            <article class="space-y-4">
                <h1 class="section-title">Bienvenido a nuestra tribu</h1>
                <p class="section-body">
                    Al comprar unos de nuestros NFT, 
                    te conviertes en miembro del club de conservacíon de animales. 
                    Como miembro tendrá accesso a contenido exclusivo y eventos 
                    exclusivos tales como:
                </p>
            </article>
            <article class="flex justify-evenly my-14">
                {#each benefits as {icon, title, body}}
                    <article class="w-72 text-center rounded-lg border-verde border-4 p-4 space-y-4">
                        <div class="w-full bg-[#414342] flex flex-col items-center rounded-xl py-3">
                            <img src={icon} alt={icon}>
                        </div>
                        <h3 class="section-title !text-xl">{title}</h3>
                        <p class="font-semibold ">{body}</p>
                    </article>
                {/each}
            </article>

            <article class="flex justify-center mb-8">
                <span class="relative">
                    <img src={fondoBtn} alt="fondoBtn">
                    <div class="absolute uppercase top-0 px-12 py-4">
                        <h6 class="text-2xl">Toca aquí para</h6>
                        <h1 class="text-5xl font-bold">Comprar.</h1>
                    </div>
                </span>
            </article>
        </section>

        <section class="space-y-4">
            <h1 class="section-title">Actividades de la hoja de ruta</h1>
            <p class="font-semibold text-lg">Actividades divertidas y geniales de la hoja de ruta</p>
            <div class="flex justify-center">
                <img class="my-6" src={mapa} alt="mapa">
            </div>
            <p class="section-body">
                Nuestra hoja de ruta de activación esta diseñada para involucrar 
                y recompensar a los miembros de nuestra comunidad a medida 
                que alcanzamos objetivos específicos. Esto es lo que puede esperar en cada paso:
            </p>
        </section>

        <section class="my-14 space-y-6 flex flex-col justify-center items-center">
            {#each benefitsProgress as {step, body}}
                <article class="flex items-center space-x-16">
                    <div class="bg-verde text-4xl font-bold rounded-xl py-3 px-8">{step}%</div>
                    <p class="section-body w-[684px]">{body}</p>
                </article>
            {/each}
        </section>
        <section class="space-y-4">
            <h1 class="section-title">Nuestro equipo</h1>
            <p class="section-body">
                Nuestro equipo de trabajo está conformado por un grupo de personas que buscan poner su granito de arena en la
                conservación del ambiente y de las especies en peligro de extinción a través de diferentes proyectos creativos.
            </p>
        </section>
    </div>
    <section class="flex flex-wrap justify-center gap-10 my-14">
        {#each team as {img, title, body}}
            <article class="w-[538px] h-[225px] bg-verde flex items-end rounded-xl mt-8 pr-1">
                <img class="h-[290px] float-left" src={img} alt={img}>
                <div class="pb-4 pl-2">
                    <p class="text-2xl">{title[0]}</p>
                    <h1 class="font-bold text-6xl">{title[1]}</h1>
                    <div class="whitespace-pre-line">{body}</div>
                </div>
            </article>
        {/each}
    </section>
    <div class="max-w-[1024px]">
        <section class="space-y-4">
            <h1 class="section-title">Únete a nosotros hoy</h1>
            <p class="section-body">
                Te invitamos a navegar por nuestra colección de NFT y elegir el que más le llame la atención. Al unirse a nuestro
                club de conservación de animales, no solo tendrá un activo digital único y valioso, sino también la satisfacción de
                saber que está contribuyendo a una causa justa y maravillosa. Gracias por tu apoyo.
            </p>
        </section>
    </div>

</main>