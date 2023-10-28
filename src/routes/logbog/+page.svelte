<script>
    import SvelteMarkdown from 'svelte-markdown'
    import CodeComponent from '../../lib/components/codeComponent.svelte';
    export let data;

    const source = data.logbog;
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" type="text/css">  
  <link rel="stylesheet" href="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism_okaidia.css">   
  <script src="https://prismjs.com/components/prism-processing.js" async=""></script>
   <script src="https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js"></script>
</svelte:head>

<div class="px-2">
    <div class="flex flex-col w-full items-center justify-center my-20">
        <h1 class="font-space font-black text-4xl">
            Logbog
        </h1>
        <div class="prose max-w-full  md:max-w-2xl prose-h1:font-space prose-h2:font-space">
            <SvelteMarkdown {source} renderers={{code: CodeComponent}} />
        </div>
    </div>
</div>