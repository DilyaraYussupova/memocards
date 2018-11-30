var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      var token = createJWT(user);
      res.json({token});
    })
    // User data invalid (prob duplicate email)
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        res.json({token: createJWT(user)});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
}

function getUser(req, res) {
  User.findById(req.params.id).exec().then(user => {
      console.log(user)
      return res.json(user);
  })
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  signup,
  login,
  getUser
};