const _EXTERNAL_URL = 'https://swapi.dev/api/';
const translate = require('translate');
const https = require('https');
const fetch = require('node-fetch');

function routeHelper(callback){
  return async(req,res) => {
    try{
      await callback(req, res);
    }
    catch (error){
      res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  };
}

exports.test = (req,res) => {
  res.status(200).json({});
}

exports.main = routeHelper(async(req,res) => {
  const data = await this.consumerapi(_EXTERNAL_URL);
  const trad = await this.traductorjson(data);
  res.status(200).send(trad);
});

exports.consumerapi = async(url) => {
  const resp = await fetch(_EXTERNAL_URL);
  const data = await resp.json();
  return data;
};

exports.traductorjson = async(objson) => {
  const keyjson =  Object.keys(objson);
  for (const key of keyjson){
    const newkey = await this.traductor(key);
    if(newkey.localeCompare(key)==0)
      continue;
    objson[newkey] = objson[key];
    delete objson[key];
  }
  return objson;
};

exports.traductor = async(letter) => {
  //try{
  const lettrt = await translate(letter.toString(), {to: 'es',  engine: 'google', key: 'AIzaSyC-bJNKF7N9k8q4jyws-c3wr_db0R6zxfs'});
  
  return lettrt;
  //}
  //catch(error){
    //res.status(400).json({
      //status: 'error',
      //message: error.message,
    //});
  //}
};
