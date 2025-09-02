<script lang="ts">
  import { marked } from "marked";

  let value = $state("# title");
</script>

<div class="container">
  <div>
    <textarea bind:value rows="20" cols="80"></textarea>
  </div>

  <div>
    {@html marked(value)}
  </div>
</div>

<style>
  .container {
    max-width: 60rem;
    margin: auto;
    padding: 1rem;
  }
</style>
