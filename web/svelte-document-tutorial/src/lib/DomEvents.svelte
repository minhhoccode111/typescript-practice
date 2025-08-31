<script lang="ts">
  let position = $state({ x: 0, y: 0 });

  function onpointermove(event: PointerEvent) {
    position.x = event.clientX;
    position.y = event.clientY;
  }
</script>

<!-- {onpointermove} -->
<div
  onpointermove={(event: PointerEvent) => {
    position.x = event.clientX;
    position.y = event.clientY;
  }}
>
  current position: {Math.floor(position.x)}, {Math.floor(position.y)}
</div>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
    height: 100%;
  }
</style>
