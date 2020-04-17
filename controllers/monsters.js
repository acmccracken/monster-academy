const Monster = require('../models/monster');

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne,
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
    req.body.owner = req.user._id;
    req.body.ownerName = req.user.name;  
    const monster = await Monster.create(req.body);
    res.status(201).json(monster);
  
}

async function show(req, res) {
  const monster = await Monster.findById(req.params.id);
  res.status(200).json(monster);
}

async function update(req, res) {
  const updatedMonster = await Monster.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedMonster);
}

async function deleteOne(req, res) {
  const deletedMonster = await Monster.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMonster);
}
