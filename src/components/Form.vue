<script setup>
    import { ref } from 'vue'
    import { nanoid } from 'nanoid'
    const showBoxberry = ref(false);

    function setPhoneMask(){
        //2. Получить элемент, к которому необходимо добавить маску
        document.querySelector('#phone').mask("9999999999");
    };

    let sampleForm = document.getElementById("gifts__form");
    
</script>

<template>
    <div class="form__wrapper">
        <div class="form__inner">
            <form class="gifts__form" action="https://talent-unnamed.mos.ru/gifts/script.php" method="post">
                <img src="https://avatars.mds.yandex.net/get-forms/6329688/a11199a3a2a84f309e3e6c7bacd6a7a2/1280x" alt="" style="width: 100%; max-width: 800px; margin-bottom: 30px;">

                <!-- ID hidden-->
                <input type="hidden" name="id" :value="nanoid(4)">

                <!-- Status -->
                <input type="hidden" name="status" value="Не выдан">

                <!-- ФИО -->
                <div class="form__item">
                    <label class="form__label">Укажите, пожалуйста, ваши ФИО</label> 
                    <input class="form__input" required type="text" name="fio" value="" placeholder="Иванов Иван Иванович">
                    <p class="form__tip">Обязательно полное написание: Иванов Иван Иванович</p>
                </div>

                <!-- Email -->
                <div class="form__item">
                    <label class="form__label">Укажите вашу рабочую почту для связи</label> 
                    <input class="form__input" required type="text" name="email" value="" placeholder="ivanovii@it.mos.ru">
                    <p class="form__tip">Сейчас супер-важно нигде не ошибиться</p>
                </div>

                <!-- Phone -->
                <div class="form__item">
                    <label class="form__label">Укажите ваш мобильный телефон для связи</label> 
                    <input class="form__input" required pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?" type="tel" name="phone" id="phone" value="" placeholder="9169876543" @change="setPhoneMask()">
                    <p class="form__tip">Вводите номер без кода страны и пробелов. Например: 9169876543</p>
                </div>
             
                <!-- Дети -->
                <div class="form__item">
                    <label class="form__label">Кол-во детей</label> 
                    <input class="form__input" required type="number" name="children" value="" placeholder="1">
                </div>

                <!-- Место получения подарка -->
                <div class="form__item">
                    <label class="form__label">Где бы вы хотели получить подарки для ваших детей?</label> 
                    <select class="form__select" required name="place" @change="showBoxberry === true ? showBoxberry = false : showBoxberry = true">
                        <option class="form__option" value="В офисе" selected>В офисе</option>
                        <option class="form__option" value="В пункте выдачи Boxberry">В пункте выдачи Boxberry</option>
                    </select>
                </div>

                <!-- Информация Boxberry -->
                <div v-if="showBoxberry" class="form__item">
                    <p class="boxberry__text">Перейдите на сайт Boxberry и найдите на карте удобное отделение. Кликните по нему и скопируйте код — он может состоять из разного количества цифр, но всегда заключен между двумя знаками подчеркивания</p>
                    <a class="boxberry__link" href="https://boxberry.ru/find_an_office" target="_blank">https://boxberry.ru/find_an_office</a>
                    <img class="boxberry__img" src="https://pic.mos.ru/srv/images/48f700da7ba0dd88368b9e89417b1735.png" alt=""> 
                    <label class="form__label">Укажите код удобного вам пункта выдачи сервиса Boxberry</label>
                    <input class="form__input" type="text" name="boxberry" value="" placeholder="02368">
                    <p class="form__tip">Обратите внимание, что ввести нужно не адрес, а именно код пункта выдачи. В приведённом выше примере это "02368"</p>
                </div>


                <!-- Офис -->
                <div v-if="!showBoxberry" class="form__item">
                    <label class="form__label">Офис</label> 
                    <select class="form__select" name="office">
                        <option value="Яковоапостольский переулок 12 стр 1" selected>Яковоапостольский переулок 12 стр 1</option>
                        <option value="Земляной вал д 50а">Земляной вал д 50а</option>
                        <option value="Империя, Пресненская набережная д 6">Империя, Пресненская набережная д 6</option>
                        <option value="Око, 1-й Красногвардейский проезд, д 21 стр 1">Око, 1-й Красногвардейский проезд, д 21 стр 1</option>
                        <option value="Арма, Нижний Сусальный 5 стр 4/5">Арма, Нижний Сусальный 5 стр 4/5</option>
                        <option value="Арма, Нижний Сусальный 5 стр 15">Арма, Нижний Сусальный 5 стр 15</option>
                        <option value="Арма, Нижний Сусальный 5 стр 16">Арма, Нижний Сусальный 5 стр 16</option>
                        <option value="Арма, Нижний Сусальный 5 стр 19">Арма, Нижний Сусальный 5 стр 19</option>
                        <option value="Арма, Нижний Сусальный 5 стр 17">Арма, Нижний Сусальный 5 стр 17</option>
                        <option value="1-я Бородинская д 2а">1-я Бородинская д 2а</option>
                        <option value="Кожевническая ул, д14 стр 5">Кожевническая ул, д14 стр 5</option>
                        <option value="ул. Яузская 6 стр4">ул. Яузская 6 стр4</option>
                    </select>
                </div>


                <!--Кнопка-->
                <input class="submit__btn" type="submit" name="submit" value="Отправить">
            </form>
        </div>
    </div>
</template>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    .form__wrapper {
        width: 100%;
        height: auto;
        min-height: 100vh;
        background-color: #f0f0f0;
        
        display: flex;
        justify-content: center;
    }

    .form__inner {
        width: 100%;
        max-width: 600px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 50px 0;
    }

    .gifts__form {
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        background-color: #fff;
        border-radius: 32px;
        font-family: Arial, Helvetica, sans-serif !important;
        overflow: hidden;
    }

    .form__item {
        margin-bottom: 30px;
        padding: 0 30px;
    }

    .form__label {
        display: block;

        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;

        margin-bottom: 10px;
    }

    .form__input {
        width: 100%;
        height: 30px;
        max-width: 660px;
        font-size: 16px;
        border: 1px solid rgba(32, 32, 32, 24%);
        background: rgba(32, 32, 32, 5%);
        padding: 16px 12px;
        border-radius: 5px;
        margin-bottom: 5px;
    }

    .form__tip {
        font-size: 15px;
        color: #808080;
        margin: 0;
    }

     .form__select {
        width: 100%;
        max-width: 660px;
        font-size: 16px;
        border: 1px solid rgba(32, 32, 32, 24%);
        background: rgba(32, 32, 32, 5%);
        padding: 10px 12px;
        border-radius: 5px;
        margin-bottom: 5px;
        color: #000;
    } 

    .boxberry__link {
        color: #ff0000;
        margin-bottom: 15px;
    }

    .boxberry__img {
        width: 100%;
        max-width: 600px;
    }

    .submit__btn {
        display: inline-block;
        background-color: #ff0000;
        color: #fff;
        cursor: pointer;
        border-radius: 24px;
        border: none;
        padding: 12px 24px;
        font-size: 18px;
        margin: 0px 30px 30px;
    }

</style>

