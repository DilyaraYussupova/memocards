var User = require('../models/user');

function createSet(req, res) {
    User.findById(req.body.userId).exec().then(user => {
        user.set = { english: req.body.english, russian: req.body.russian };
        user.save();
        return res.json(user);
    })
}

module.exports = {
    createSet
};