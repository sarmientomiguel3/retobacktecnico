const db = require('../models');

const Item = db.items;

exports.itemselectall = (req,res) => {
  Item.findAll()
    .then(response => {
      if(!response){
        return res.status(404).aend({message: "not found"});
      }
      res.status(200).send(response);
    }).catch(err => {
      res.status(500).send({message: err.message});
    });
};

exports.itemadd = (req,res) => {
  Item.create({
    ItemCode: req.body.ItemCode,
    ItemName: req.body.ItemName,
    ItemDescription: req.body.ItemDescription
  }).then(response => {
    if(!response){
      return res.status(404).send({message: "not found"});
    }
    res.send({message: "actualizado"});
  }).catch(err => {
    res.status(500).send({message: err.message});
  });
};
