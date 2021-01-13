<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  .header {
    grid-area: header;
    background: linear-gradient(to right, #1e4694, #49a7c1);
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>