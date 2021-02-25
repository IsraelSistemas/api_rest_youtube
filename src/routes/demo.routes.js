const { Router } = require('express');
const router = Router();
const demoController = require('../controllers/demo.controller');
const { middleware } = require('../middlewares/demo.middleware');

router.get('/', (req, res) => {
    return res.send('El API se esta ejecutando!!!');    
});

router.get('/getAll', middleware, demoController.getAll);

router.get('/getById/:id?', demoController.getById);

router.post('/addItem', demoController.addItem);

router.put('/updateItem/:id', demoController.updateItem);

router.delete('/deleteItem/:id', demoController.deleteItem);

module.exports = router;
