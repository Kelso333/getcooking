var User = require('../models/user');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;


module.exports = {
  
  signup: (req, res) => {
    console.log('hello', req.body);
    var user = new User(req.body);
    user.session_token = jwt.sign(
      {user},
      SECRET,
      {expiresIn: '24h'}
    )
    user.save()
      .then(user => {
      // TODO: Send back a JWT instead of the user
        res.json(user)
      })
      // User data invalid (prob duplicate email)
      .catch(err => res.status(400).json(err));
  },


  login: (req, res) => {
    User.findOne({email: req.body.email}).exec().then(user => {
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          var token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    }).catch(err => res.status(401).json(err));
  }

}
