const express = require('express');
const app = express();
const json = require('./jsonDummy.json');
const bodyParser = require('body-parser');

app.set('port', 4000);
app.use(bodyParser.json());

/*  METODOS HTTP
    GET
    POST
    PUT
    DELETE
*/

app.get('/', (req, res) => {
    return res.send('El API se esta ejecutando!!!');    
});

app.get('/getAll', (req, res) => {
    return res.send(json);
});

app.get('/getById/:id?', (req, res) => {
    const id = req.params.id;
    let response = null;

    if (id) {
        json.filter(element => {
            if (element.id == id) {
                response = element;
            }
        });

        return res.send(response);
    }

    return res.send(json);
});

app.post('/addItem', (req, res) => {
    const body = req.body;

    json.push(body);

    return res.send(json);
});

app.put('/updateItem/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    json.filter(element => {
        if (element.id == id) {
            element.age = body.age;
            element.name = body.name;
        }
    });

    return res.send(json);
});

app.delete('/deleteItem/:id', (req, res) => {
    const id = req.params.id;

    json.filter((element, index) => {
        if (element.id == id) {
            json.splice(index, 1);
        }
    });

    return res.send(json);
});

app.listen(app.get('port'), () => {
    console.log(`El servidor esta escuchando el puerto: ${app.get('port')}`);
});
