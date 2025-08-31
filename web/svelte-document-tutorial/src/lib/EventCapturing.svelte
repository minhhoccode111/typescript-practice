<script lang="ts">
</script>

<div
  onkeydowncapture={(e) => {
    alert(`<div> ${e.key}`);
  }}
  role="presentation"
>
  <input
    onkeydowncapture={(e) => {
      alert(`<input> ${e.key}`);
    }}
    type="text"
  />
</div>
