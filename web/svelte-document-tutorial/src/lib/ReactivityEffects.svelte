<script lang="ts">
  let elapsed = $state(0);
  let interval = $state(1000);

  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);
    return () => {
      clearInterval(id);
    };
  });
</script>

<button
  onclick={() => {
    interval /= 2;
  }}>speedup</button
>
<button
  onclick={() => {
    interval *= 2;
  }}>slowdown</button
>

<p>elapsed: {elapsed}</p>

<style>
</style>
