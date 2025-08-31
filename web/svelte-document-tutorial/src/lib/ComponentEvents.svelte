<script lang="ts">
  import ComponentEventsStepper from "./ComponentEventsStepper.svelte";
  let count = $state(0);
  function increment() {
    count += 1;
  }
  function decrement() {
    count -= 1;
  }
</script>

<div>current count is: {count}</div>

<ComponentEventsStepper {increment} {decrement} />
