<script>
  import { onMount } from "svelte";
  let pos = "";
  //if the route is "/" the pos to "self-start" else if the route is "/me" the pos is "self-end" else the pos is "self-center"
  import { page } from "$app/stores";
  $: pos = $page.route.id === "/" ? "self-start" : $page.route.id === "/cv" ? "self-center" : "self-end";

  $: isVisable = $page.route.id === "/" || $page.route.id === "/me" || $page.route.id === "/cv";

  let tooltipChangeIsRunning = false;
  let navTooltipText = "";
  onMount(() => {
    //when the user hovers over a nav item, the tooltip text is set to the text of the nav item
    document.addEventListener("mouseover", (e) => {
      if (e.target.classList.contains("nav-item")) {
        //is the text already the same as the nav item text? if so, don't do anything
        if (navTooltipText === e.target.dataset.tooltiptext) return;
        //return if a interval is already running
        if (tooltipChangeIsRunning) return;

        tooltipChangeIsRunning = true;
        //slowly delete all the text one by one
        const deleteText = setInterval(() => {
          navTooltipText = navTooltipText.slice(0, -1);
          if (navTooltipText.length === 0) {
            clearInterval(deleteText);
            //slowly add all the text one by one
            const addText = setInterval(() => {
              navTooltipText += e.target.dataset.tooltiptext[navTooltipText.length];
              if (navTooltipText.length === e.target.dataset.tooltiptext.length) {
                clearInterval(addText);
                tooltipChangeIsRunning = false;
              }
            }, 20);
          }
        }, 7);
      }
    });
  });
</script>

<div class="fixed view-stay z-50 w-72 bottom-5 left-[calc(50%-18rem/2)] flex flex-col group">
  <div
    class=" duration-300 delay-[50ms] translate-y-3 group-hover:translate-y-0 ease-out bouncy group-hover:h-8 h-0 bg-secondary mb-1 rounded-xl flex group-hover:p-1 w-fit group-hover:px-3 z-40"
  >
    {#key navTooltipText}
      <p class="font-space text-content">{navTooltipText}<span class="animate-pulse">_</span></p>
    {/key}
  </div>
  <div class="bg-primary flex-row flex h-16 bouncy duration-300 hover:h-20 rounded-xl z-50 shadow-2xl peer">
    <a
      class="border-2 border-secondary m-1 {isVisable ? "w-1/3" : "w-[22.222222%]"} rounded-lg justify-center items-center flex font-space text-3xl text-content bouncy duration-500 hover:w-1/2 ease-out hover:text-secondary hover:border-content hover:bg-content select-none nav-item"
      data-tooltiptext="Home / Updates"
      href="/"><span class="material-symbols-outlined">home</span></a
    >
    <a
      class="border-2 border-secondary m-1 {isVisable ? "w-1/3" : "w-[22.222222%]"} rounded-lg justify-center items-center flex font-space text-3xl text-content bouncy duration-500 hover:w-1/2 ease-out hover:text-secondary hover:border-content hover:bg-content select-none nav-item mx-0"
      data-tooltiptext="Curriculum Vitae"
      href="/cv"><span class="material-symbols-outlined">demography</span></a
    >
    <a
      class="border-2 border-secondary m-1 {isVisable ? "w-1/3" : "w-[22.222222%] mr-0"} rounded-lg justify-center items-center flex font-space text-3xl text-content bouncy duration-500 hover:w-1/2 ease-out hover:text-secondary hover:border-content hover:bg-content select-none nav-item"
      data-tooltiptext="About / Contact"
      href="/me"><span class="material-symbols-outlined">account_circle</span></a
    >
    <a
      class="{isVisable ? "w-0 overflow-hidden transition-none" : "w-1/3 border-2 border-secondary m-1 hover:w-1/2"} rounded-lg justify-center items-center flex font-space text-3xl text-content bouncy duration-500 ease-out hover:text-secondary hover:border-content hover:bg-content select-none nav-item"
      data-tooltiptext={$page.route.id}
      href={$page.route.id}><span class="material-symbols-outlined">cards</span></a
    >
  </div>
  <div
    class="bg-secondary view-slide {pos} peer-hover:w-[calc(100%-12px)] rounded-full h-1 w-[calc(33.3333333%-12px)] mt-1 duration-500 mx-2 bouncy"
  />
</div>

<style>
  .view-stay {
    view-transition-name: main-header;
  }

  .view-slide {
    view-transition-name: main-header-slide;
  }

  .bouncy {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
</style>