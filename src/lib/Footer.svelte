<script lang="ts">
    import flecha from "$lib/assets/flecha.png"
    import instagram from "$lib/assets/instagram.svg"
    import discord from "$lib/assets/discord.svg"
    import X from "$lib/assets/X.svg"
    import logoBlanco from "$lib/assets/logo-blaco.png"
</script>

<footer class="flex justify-center">
    <div class="flex justify-between items-center py-4 pb-28 mt-20 w-[1024px] max-w-[1024px]">
        <div>
            <img src={logoBlanco} alt="logo">
        </div>
        <div class="rounded-lg border-[#1f2e17] border-4 p-4 space-y-4">
            <h1 class="uppercase font-bold text-xl">Entra a la lista</h1>
            <div class="flex">
                <input class="w-[250px] rounded-l bg-[#1f1d1d] py-1 px-4 text-sm" placeholder="tucorreo@email.com"/>
                <button class="bg-verde px-4 rounded">
                    <img src={flecha} alt="flecha" />
                </button>
            </div>
        </div>
        <div class="text-right space-y-3 text-sm">
            <div class="flex justify-end gap-6 p-4">
                {#each [discord, X, instagram] as brand}
                    <div class="bg-[#414544] p-2 rounded-lg">
                        <img src={brand} alt={brand} class="h-[30px]"/>
                    </div> 
                {/each}
            </div>
            <p class="font-medium">Betesda Inversiones 3000</p>
            <p class="text-verde">Animalasos, Términos y condiciones</p>
        </div>
    </div>
</footer>