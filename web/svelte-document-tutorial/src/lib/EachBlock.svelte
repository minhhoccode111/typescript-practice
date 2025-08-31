<script lang="ts">
  const colors = [
    //
    "red",
    "orange",
    "yellow",
    "blue",
    "green",
    "indigo",
    "violet",
    "pink",
  ];

  let selected = $state(colors[0]);
</script>

<h1 style="color: {selected};">color picker</h1>

<p>
  {#each colors as color, i}
    <button
      style="background-color: {color};"
      aria-label={color}
      aria-current={selected === color}
      onclick={() => {
        selected = color;
      }}
    >
      index: {i}
    </button>
  {/each}
</p>

<style>
  button {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: translate(-2px, -2px);
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
    transition: all 0.1s;
    color: black;
    font-weight: 700;
    font-size: 2rem;
  }

  button[aria-current="true"] {
    transform: none;
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
  }
</style>
