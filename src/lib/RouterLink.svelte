<script lang="ts">
  import { currentRoute } from "./router.js";
  import { get } from "svelte/store";

  export let to = "/";
  export let className = "";

  function navigate(e: Event) {
    e.preventDefault();
    window.history.pushState({}, "", to);
    currentRoute.set(to);
  }
</script>

<a
  href={to}
  on:click={navigate}
  class="{className} {get(currentRoute) === to ? 'text-blue-500 font-bold' : ''}"
>
  <slot />
</a>
