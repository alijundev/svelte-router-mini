<script>
  import { activeComponent } from "./router.js"
  // let Component = activeComponent;
  let Component = $derived($activeComponent)
  
</script>

<Component/>