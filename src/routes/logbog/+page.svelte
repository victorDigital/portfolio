<script>
    import SvelteMarkdown from 'svelte-markdown'
    import CodeComponent from '../../lib/components/codeComponent.svelte';
    export let data;

    const source = data.logbog;
</script>

<div class="container mx-auto">
    <div class="flex flex-col items-center justify-center my-20">
        <h1 class="font-space font-black text-4xl">
            Logbog
        </h1>
        <div class="prose">
            <SvelteMarkdown {source} renderers={{code: CodeComponent}} />
        </div>
    </div>
</div>