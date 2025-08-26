<script lang="ts">
  import { currentRoute } from "./router.js";
  import { get } from "svelte/store";

  let { to, className}: { to: string, className: string} = $props()

  function navigate(e: Event) {
    e.preventDefault();
    window.history.pushState({}, "", to);
    currentRoute.set(to);
  }
</script>

<a
  href={to}
  onclick={navigate}
  class="{className}">
  <slot />
</a>
