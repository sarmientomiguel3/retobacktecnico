const _BASE_URL = 'https://swapi.dev/api/';
const translate = require('translate');
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
  const addset = (req.params.set == null)? '': req.params.set+'/' 
  const addid = (req.params.id == null)? addset+'': addset+req.params.id+'/' 
  const trad = await this.apitranslate(_BASE_URL+addid);
  res.status(200).send(trad);
});

exports.apitranslate = async(url)=> {
  const data = await this.consumerapi(url);
  const trad = await this.traductorjson(data);
  return trad;
};

exports.consumerapi = async(url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

exports.traductorjson = async(objson) => {
  const keyjson =  Object.keys(objson);
  for (const key of keyjson){
    const newkey = await this.traductor(key);
    const temp = objson[key];
    delete objson[key];
    objson[newkey] = temp;
  }
  return objson;
};

exports.traductor = async(letter) => {
  const lettrt = await translate(letter.toString(), {to: 'es',  engine: 'google', key: 'AIzaSyC-bJNKF7N9k8q4jyws-c3wr_db0R6zxfs'});

  return lettrt;
};
