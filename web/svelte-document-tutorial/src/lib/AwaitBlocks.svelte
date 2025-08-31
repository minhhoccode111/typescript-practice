<script lang="ts">
  import { rollDice } from "./../shared/roll-dice";

  let promise = $state(rollDice());

  function again() {
    promise = rollDice();
  }
</script>

{#await promise}
  <p>...rolling</p>
{:then n}
  <p>{n}</p>
{:catch e}
  <p style="color: red; opacity: 0.75;">{e.message}</p>
{/await}

<button onclick={again}>again</button>
