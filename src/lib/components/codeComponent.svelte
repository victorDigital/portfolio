<script>
    import Prism from "./PrismJS.svelte";
    // string code, string infostring, boolean escaped
    export let text;
    export let lang;
    export let raw;

    //make a random id for the canvas
    let id = Math.random().toString(36).substring(7);

    let showCanvas = false;

    function run() {
        console.log("run");
        showCanvas = true;
        console.log("onMount");
        let script = document.createElement("script");
        script.type = "text/processing";
        script.dataset.processingTarget = "processing-canvas" + id;
        script.innerHTML = text;
        //append the script to the head
        document.head.append(script);

        var canvas = document.getElementById("processing-canvas" + id);
        if (canvas) {
            new Processing(canvas, script.text);
        }
    }
</script>

<svelte:head>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.js"
    ></script>
</svelte:head>

<Prism language="processing" code={text} />

{#if !showCanvas}
    <div>
        <button class="bg-primary text-white p-1 px-2 rounded-md" on:click={run}
            >RUN CODE</button
        >
    </div>
{/if}
<div class="m-2">
    <canvas class="" id={"processing-canvas" + id} width="0" height="0" />
</div>

<style>
    .text-white {
        color: white;
    }
</style>
