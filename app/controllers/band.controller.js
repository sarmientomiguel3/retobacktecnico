const db = require('../models');

const Band = db.bands;

exports.bandselectall = (req,res) => {
  Band.findAll()
    .then(response => {
      if(!response){
        return res.status(404).aend({message: "not found"});
      }
      res.status(200).send(response);
    }).catch(err => {
      res.status(500).send({message: err.message});
    });
};

exports.bandadd = (req,res) => {
  Band.create({
    BandName: req.body.BandName,
    BandOrigin: req.body.BandOrigin,
    BandGenere: req.body.BandGenere
  }).then(response => {
    if(!response){
      return res.status(404).send({message: "not found"});
    }
    res.send({message: "actualizado"});
  }).catch(err => {
    res.status(500).send({message: err.message});
  });
};
