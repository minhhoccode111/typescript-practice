<script lang="ts">
  let { increment, decrement } = $props();
</script>

<button onclick={increment}>increment</button>
<button onclick={decrement}>decrement</button>
