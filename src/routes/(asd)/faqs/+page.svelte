<script lang="ts">
    import interrogacion from "$lib/assets/interrogacion.png"
    import lupa from "$lib/assets/lupa.png"

    const questions = [
        "¿Qué organizaciones benéficas están relacionadas a este proyecto?",
        "¿Como es el método de pago?",
        "¿Qué hacen con el dinero recaudado?",
        "¿Cuales son los beneficios de este proyecto?"
    ]
</script>


<main class="flex flex-col items-center container">
    <div class="max-w-[1024px]">
        <section class="flex justify-center">
            <img src={interrogacion} alt="Signos de interogacion">
        </section>
        <section class="space-y-4">
            <h1 class="font-bold uppercase text-center text-[2.5rem] pb-4">Preguntas frecuentes</h1>
            <p class="section-body">
                Al realizar la compra de uno de nuestros NFT's Animalasos te brinda la oportunidad de poder colaborar 
                al mismo tiempo con diferentes ONG's enfocadas en la conservación de especies animales en peligro de extinción
            </p>
            <p class="section-body">Dentro de este espacio te respondemos las preguntas que se te puedan llegar a presentar</p>
        </section>
        <section
            id="preguntas"
            class="mt-12 space-y-6"
        >
            {#each questions as q}
                <div class="flex justify-between items-center bg-[#333333] rounded-lg">
                    <p class="pl-8 pr-2 py-2">{q}</p>
                    <div class="bg-verde rounded-lg px-4 py-2">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img src={lupa}>
                    </div>
                </div>
            {/each}
        </section>
    </div>
</main>