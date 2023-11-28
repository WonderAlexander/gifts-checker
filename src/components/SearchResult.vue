<script setup>
    import { useGiftsrStore } from '../stores/gifts';
    const store = useGiftsrStore();
</script>

<template>
    <div class="search__result" v-for="item in store.searchResult">
        <h2>Результаты поиска</h2>
        <div class="result__wrapper">

        <div class="result__image">
            <img src="../assets/user.png" alt="" class="result__icon">
        </div>
        <div class="result__data">
            <div class="result__item">
                <p><span style="color: #ff0000; font-weight: 600;">ID:</span> {{ item.id }}</p>
            </div>
            <div class="result__item">
                <p><span style="color: #ff0000; font-weight: 600;">ФИО:</span> {{ item.fio}} {{ item.lastname }}</p>
            </div>
            <div class="result__item">
                <p><span style="color: #ff0000; font-weight: 600;">Кол-во детей:</span> {{ item.children }}</p>
                <p> {{ item.child1 }} ( {{ item.age1 }})</p>
                <p v-if="item.child2">{{ item.child2 }} ({{ item.age2 }})</p>
                <p v-if="item.child3">{{ item.child3 }} ({{ item.age3 }})</p>
                <p v-if="item.child4">{{ item.child4 }} ({{ item.age4 }})</p>
                <p v-if="item.child5">{{ item.child5 }} ({{ item.age5 }})</p>
            </div>
            <div class="result__item">
                <p><span style="color: #ff0000; font-weight: 600;">Cтатус:</span> {{ item.status }}</p>
            </div>
        </div>
    </div>
    <form @submit="store.editStatus(item)">
    <button class="result__btn" type="submit">Изменить статус</button>
</form>


    </div>
</template>


<style scoped>
    h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px;
        font-weight: 600;
        line-height: 42px;
        letter-spacing: -.4px;
        color: #000;
        margin: 0;
    }
    
    .search__result {
        width: 100%;
        max-width: 760px;
        padding: 20px;
        background-color: #fff;
        border-radius: 12px;
        -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .result__wrapper {
        display: flex;
        align-items: center;
        position: relative;
    }

    .result__image {
        width: 20%;
    }

    .result__icon {
        width: 120px;
        height: 120px;
    }

    .result__data {
        width: 80%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .result__item {
        width: 50%;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .result__btn {
        display: inline-block;
        cursor: pointer;
        padding: 12px 24px;
        background-color: transparent;
        color: #ff0000;
        font-size: 16px;
        border: 1px solid #ff0000;
        border-radius: 12px;
    }
</style>