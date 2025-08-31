<script lang="ts">
  import SpreadPropsChild from "./SpreadPropsChild.svelte";
  let mhc = {
    name: "minhhoccode111",
    role: "software engineer",
  };
</script>

<SpreadPropsChild {...mhc} />
