<script lang="ts">
  let name = $state("minhhoccode111");

  let a = $state(1);
  let b = $state(2);

  let yes = $state(false);
</script>

<input bind:value={name} type="text" />

<div>Hello, World! From {name}</div>

<!-- automatically convert to number before using -->
<input type="number" bind:value={a} min="0" max="10" />
<input type="range" bind:value={b} min="0" max="10" />

<p>{a} + {b} = {a + b}</p>

<label>
  <input type="checkbox" bind:checked={yes} />
  yes, send me email
</label>
{#if yes}
  <p>thank you</p>
{:else}
  <p>no, you must opt in</p>
{/if}

<button disabled={!yes}>Subcribe</button>
