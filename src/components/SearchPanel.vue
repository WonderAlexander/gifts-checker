<script setup>
    import { ref } from 'vue';
    import { useGiftsrStore } from '../stores/gifts';
    const store = useGiftsrStore();
    const searchId = ref('');
</script>

<template>
  <form class="search__form" @submit.prevent="store.searchId(searchId)">
    <label for="">Введите ID сотрудника</label>
    <div class="search__input">
        <input type="text" v-model="searchId">
        <button type="submit">Поиск</button>
    </div>
  </form>
</template>

<style scoped>
    .search__form {
        margin-bottom: 40px;
    }

    label {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px;
        font-weight: 600;
        line-height: 42px;
        letter-spacing: -.4px;
        color: #000;
    }

    .search__input {
        padding: 20px;
        background-color: #fff;
        border-radius: 12px;
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    }

    input {
        width: 100%;
        height: 30px;
        max-width: 660px;
        font-size: 16px;
        border: 1px solid rgba(32, 32, 32, 24%);
        background: rgba(32, 32, 32, 5%);;
        padding: 5px 12px;
        border-radius: 8px;
    }

    button {
        height: 42px;
        display: inline-block;
        cursor: pointer;
        border: none;
        background-color: #ff0000;
        color: #fff;
        font-size: 16px;
        padding: 5px 16px;
        border-radius: 8px;
        margin-left: -10px;
    }
</style>