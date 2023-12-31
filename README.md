# Приложение выдачи подарков
Веб-приложение разработано для упрощения отслеживания статусов по выдаче новогодних подарков детям сотрудников компании. 


## Стек
- [Vue3](https://v3.ru.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue-xlsx](https://www.npmjs.com/package/vue-xlsx)
- [Axios](https://axios-http.com/ru/docs/intro)
- [Express.js](https://expressjs.com/ru/)


## Функционал 
Предполагается, что у пользователя имеется excel-таблица определенной структуры, которая загружается на сервер через интерфейс приложения, после чего данные попадают в store (Pinia).
Пользователь находит сотрудника по поиску id и изменяет ему статус выдачи подарка, после этого можно экспортировать таблицу с новыми статусами. Обработка таблиц происходит с использованием библиотеки vue-xlsx, изменение статуса выдачи подарков происходит на express.


## Использование

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm install
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run dev
```
### Запуск Express сервера
Чтобы запустить express сервер перейдите в папку server и выполните команду:
```sh
npm run start
```


## Команда проекта
Александр Болдин — Front-End
