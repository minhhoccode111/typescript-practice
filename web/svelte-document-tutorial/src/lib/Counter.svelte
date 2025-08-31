<script lang="ts">
  let count: number = $state(0);
  const increment = () => {
    count += 1;
  };
  const decrement = () => {
    if (count > 0) {
      count -= 1;
    }
  };
  const reset = () => {
    count = 0;
  };
</script>

<p>
  count
  {count < 2 ? "is" : "are"}
  {count}
</p>

<div>
  <button onclick={increment}>inc</button>
  <button onclick={reset}>reset</button>
  <button onclick={decrement}>dec</button>
</div>

<style>
  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 4em;
  }
</style>
