var request = require('request');

const URL = `http://api.yummly.com/v1/api/recipes?_app_id=${process.env.X_Yummly_App_ID}&_app_key=${process.env.X_Yummly_App_Key}&q=`;

function recipe(req, res, next) {
  request(URL, (err, response, body) => {
    if(err) return res.send(err);
    let recipes = body;
    res.send(recipes)
  })

}

module.exports = {
  recipe
};