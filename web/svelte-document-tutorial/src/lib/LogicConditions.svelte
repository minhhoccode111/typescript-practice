<script lang="ts">
  let count = $state(0);

  const increment = () => {
    count = count + 1;
  };
</script>

<button onclick={increment}>{count} {count > 1 ? "times" : "time"}</button>
{#if count > 10}
  <p>count is greater than 10</p>
{:else if count < 5}
  <p>count is less than 5</p>
{:else}
  <p>count is between 5 and 10</p>
{/if}
