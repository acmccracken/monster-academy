const Monster = require('../models/monster');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const monsters = await Monster.find({});
      res.status(200).json(monsters);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const monster = await Monster.create(req.body);
    res.status(201).json(monster);
  }
  catch(err){
    res.status(500).json(err);
  }
}
