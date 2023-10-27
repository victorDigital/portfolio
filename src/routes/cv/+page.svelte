<script>
    import { onMount } from 'svelte';
    
    function getCV() {
        console.log('getCV');
        window.open('/CV.pdf', '_blank');
    }
</script>

<div class="container mx-auto">
    <div class="flex flex-col items-center justify-center mt-20">
        <h1 class="font-space font-black text-4xl">
            Download mit CV
        </h1>
        <div class="shadow-2xl mt-20 max-w-md rounded-2xl overflow-hidden drop-shadow-2xl m-10">
            <img src="/CV-1.png" alt="cv">
        </div>
        <button class="bg-primary text-white border-secondary border-2 drop-shadow-md p-3 px-8 hover:px-12 hover:drop-shadow-xl hover:-translate-y-0.5 transition-all text duration-500 bouncy rounded-xl font-space font-black" on:click={getCV}>
            Download PDF
        </button>
    </div>
</div>

<style>
    .text-white {
        color: white;
    }

    .bouncy {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
</style>