<script lang="ts">
	import { afterNavigate } from "$app/navigation";
    import logo from "$lib/assets/logo.png"
    const header = [
        {
            title: "TIENDA",
            link: "/",
        },
        {
            title: "MAPA DE RUTAS",
            link: "/",
        },
        {
            title: "EQUIPO",
            link: "/",
        },
        {
            title: "GALERIA",
            link: "/galeria",
        },
        {
            title: "FAQs",
            link: "/faqs",
        }
    ]

    afterNavigate((n) => {
        if (n.to) {
        }
    })
</script>
<header class="flex justify-center">
    <div class="flex justify-between items-center p-4 w-[1024px] max-w-[1024px]">
        <a href="/">
            <img src={logo} alt="Logo de animalasos" class="h-[78px]"/>
        </a>
        <ul class="flex gap-10 list-none">
            {#each header as {title, link}}
                <li>
                    <a href={link}>{title}</a>
                </li>
            {/each}
        </ul>
    </div>
</header>