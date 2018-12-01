var User = require('../models/user');

function createSet(req, res) {
    User.findById(req.user._id).then(user => {
        user.studySets.push(req.body);
        user.save()
            .then(() => res.json(user));
    });
}

module.exports = {
    createSet
};