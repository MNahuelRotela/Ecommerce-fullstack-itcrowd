const server = require('./src/app.js');
const { sequelize } = require('./src/db.js'); 


sequelize.sync({ alter: true }).then(() => { 
  server.listen(3001, () => {
    console.log('server listening at 3001'); 
  });
});
