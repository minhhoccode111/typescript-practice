<script lang="ts">
  let numbers = $state<number[]>([1, 2, 3, 4]);
  let isMouseDown = $state(false);
  let interval: ReturnType<typeof setInterval> | null = null;

  let total = $derived(numbers.reduce((current, total) => current + total, 0));

  function start() {
    isMouseDown = true;
  }
  function stop() {
    isMouseDown = false;
  }
  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }
  $effect(() => {
    if (isMouseDown) {
      interval = setInterval(addNumber, 50);
    } else {
      clearInterval(interval!);
      interval = null;
    }
  });
  $inspect(numbers);
</script>

<p class="numbers">
  {numbers.join(" + ")} = {total}
</p>

<button onmousedown={start} onmouseup={stop} onmouseout={stop} onblur={stop}>
  add number
</button>

<style>
  .numbers {
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
</style>
