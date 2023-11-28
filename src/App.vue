<script setup>
  import { useGiftsrStore } from './stores/gifts';
  import SearchPanel from './components/SearchPanel.vue';
  import SearchResult from './components/SearchResult.vue';
  import Import from './components/Import.vue'
  import Export from './components/Export.vue'
  const store = useGiftsrStore()
</script>

<template>
  <div class="app__wrapper">
    <div class="buttons">
      <Import/>
      <Export/>
    </div>
    <div class="app__inner">
      <SearchPanel/>
      <SearchResult/>
    </div>
  </div>
</template>

<style>
  body {
    margin: 0 !important;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .app__wrapper {
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #f0f0f0;

    display: flex;
    justify-content: center;
    position: relative;
  }

  .app__inner {
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
  }

  .buttons {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;

    padding: 15px;
    display: flex;
  }
</style>