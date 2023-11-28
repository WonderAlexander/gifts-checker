// подключение express
const express = require("express");
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();

const fs = require('fs');

// определяем обработчик для маршрута "/"

app.get("/", function(request, response){
    // отправляем ответ
    response.send('Hello');
});

app.get("/data", function(request, response){
    // отправляем ответ
    response.sendFile(__dirname + "/data/data.json");
});

app.post('/data', bodyParser.json(), (req, res) => {
    let data = req.body;
    // res.send('Data Received: ' + JSON.stringify(data));
    console.log('Data Received: ' + JSON.stringify(data))
    fs.writeFile("./data/data.json", JSON.stringify(data), (err) => err && console.error(err));
})

// начинаем прослушивать подключения на 3000 порту
app.listen(3001);
