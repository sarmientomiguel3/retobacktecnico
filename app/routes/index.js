
module.exports = function(app){
  const { router: userTest} = require('./test');
  const { router: userMain} = require('./main');
  const { router: userItem} = require('./item');
  const { router: userBand} = require('./band');

  app.use('/test', userTest);
  app.use('/api', userMain);
  app.use('/item', userItem);
  app.use('/band', userBand);
};

