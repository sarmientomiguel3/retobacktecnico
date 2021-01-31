
module.exports = function(app){
  const { router: userTest} = require('./test');
  const { router: userMain} = require('./main');
  const { router: userItem} = require('./item');

  app.use('/test', userTest);
  app.use('/main', userMain);
  app.use('/item', userItem);
};

