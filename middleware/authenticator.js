
let authenticator = (req, res, next) => {
    if (req.method != "GET") {
        console.log('get');
    }
    next();
};

module.exports = authenticator;