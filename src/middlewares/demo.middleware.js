const middleware = (req, res, next) => {
    console.log('AQUI COMIENZA UN MIDDLEWARE');

    if (!req.body.acceso) {
        return res.json({
            error: true,
            msg: "acceso denegado"
        });
    }

    next();
};

const middleware2 = (req, res, next) => {
    console.log('AQUI COMIENZA EL MIDDLEWARE 2');

    if (!req.body.acceso) {
        return res.json({
            error: true,
            msg: "acceso denegado"
        });
    }

    next();
};

module.exports = {
    middleware,
    middleware2
};
