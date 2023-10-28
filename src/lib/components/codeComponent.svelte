<script>
    import Prism from "./PrismJS.svelte";
    // string code, string infostring, boolean escaped
    export let text;
    export let lang;
    export let raw;

    //make a random id for the canvas
    let id = Math.random().toString(36).substring(7);

    let codeIsRunning = false;

    //if the word "void" or "size" is in the code, it can be run
    let canBeRun = text.includes("void");
    if (!canBeRun) canBeRun = text.includes("size");

    let RuntimeError = undefined;

    let programStopped = false;

    function run() {
        console.log("run");
        codeIsRunning = true;
        console.log("onMount");
        let script = document.createElement("script");
        script.type = "text/processing";
        script.dataset.processingTarget = "processing-canvas" + id;
        script.innerHTML = text;
        //append the script to the head
        document.head.append(script);

        var canvas = document.getElementById("processing-canvas" + id);
        if (canvas) {
            try {
                new Processing(canvas, script.text);
            } catch (error) {
                RuntimeError = error;
                console.warn(error);
            }
        }
    }
</script>

<div class="bg-primary p-2 pt-[1px] {canBeRun ? '' : 'pb-[1px]'} rounded-xl">
    <Prism language="processing" code={text} />

    {#if !codeIsRunning && canBeRun && !programStopped}
        <div>
            <button
                class="bg-primary border-secondary border-2 text-white p-1 px-2 rounded-md"
                on:click={run}>KØR KODE</button
            >
        </div>
    {/if}
    {#if canBeRun && !programStopped && !RuntimeError}
        <div class="">
            <canvas
                class="rounded-md"
                id={"processing-canvas" + id}
                width="0"
                height="0"
            />
        </div>
    {/if}
    {#if codeIsRunning && canBeRun && !RuntimeError && !programStopped}
         <!-- stop btn -->
        <div>
            <button
                class="bg-primary mt-2 border-secondary border-2 text-white p-1 px-2 rounded-md"
                on:click={() => {
                    programStopped = true;
                    codeIsRunning = false;
                    canBeRun = false;
                }}
            >
                STOP
            </button>
        </div>
    {/if}
    {#if RuntimeError}
        <div class="bg-red-500/80  mt-2 h-fit text-white p-2 rounded-md">
            <p class="m-0 font-bold font-space">Kode fejl</p>
            <p class="m-0 font-mono">{RuntimeError}</p>
        </div>
    {/if}
</div>
