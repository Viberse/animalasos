<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header />
<slot />
<Footer />

<!-- Barra verde -->
<div class="bg-[#78a044] h-[44px] w-full" />
