<script lang="ts">
  import { counter } from "./../shared/counter.svelte";

  function increment() {
    counter.count = counter.count + 1;
  }
</script>

<button onclick={increment}>
  count is {counter.count}
</button>

<style>
</style>
