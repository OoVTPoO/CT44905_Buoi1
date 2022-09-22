exports.create = (req, res) => {
    res.send({ message: "create handler"});
};

exports.findAll = (req, res) => {
    res.send({ meassage: "findAll handler"});
};

exports.findOne = (req, res) => {
    res.send({ meassage: "findOne handler"});
};

exports.update = (req, res) => {
    res.send({ message: "update handler"});
};

exports.delete = (req, res) => {
    res.send({ meassage: "detele handler"});
};

exports.deleteAll = (req, res) => {
    res.send({ meassage: "deteleALL handler"});
};

exports.findAllFavorite = (req, res) => {
    res.send({ meassage: 'findAllFavorite handler'});
};
