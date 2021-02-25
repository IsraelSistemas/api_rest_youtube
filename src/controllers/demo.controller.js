const json = require('../../jsonDummy.json');

const getAll = (req, res) => {
    return res.send(json);
};

const getById = (req, res) => {
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
};

const addItem = (req, res) => {
    const body = req.body;

    json.push(body);

    return res.send(json);
};

const updateItem = (req, res) => {
    const id = req.params.id;
    const body = req.body;

    json.filter(element => {
        if (element.id == id) {
            element.age = body.age;
            element.name = body.name;
        }
    });

    return res.send(json);
};

const deleteItem = (req, res) => {
    const id = req.params.id;

    json.filter((element, index) => {
        if (element.id == id) {
            json.splice(index, 1);
        }
    });

    return res.send(json);
};

module.exports = {
    getAll,
    getById,
    addItem,
    updateItem,
    deleteItem
};