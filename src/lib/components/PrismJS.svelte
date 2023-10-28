<!-- thanks to https://svelte.dev/repl/3fef33867c47431b8f4edc99275640e8?version=3.12.1 -->
<script defer>
  import { onMount } from "svelte";

  export let language;
  export let code;

  onMount(() => {
    let langJS = false;
    let lang_script;
    let lang_module;

    if (langJS == true) {
      lang_script = document.createElement("script");
      lang_script.src = lang_module;
      lang_script.async = true;
      document.head.append(lang_script);

      lang_script.onload = () => {
        Prism.highlightAll();
      };
    } else {
      Prism.highlightAll();
    }
  });
</script>

<div class="w3-container z-0">
  <pre><code class="language-{language}">{code}</code></pre>
</div>