const bodyParser = require('body-parser');
const express = require('express')

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository')
const UserService = require('./services/user-service');
const { response } = require('express');
const {User,Role} = require('./models/index');
const { validateAdminRequest } = require('./middlewares/auth-request-validators');

const setupAndStartServer = async() =>{
 const app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use('/api', apiRoutes);

 
 app.listen(PORT,async ()=>{
    console.log(`Server start at ${PORT}`);
   //  if(process.env.DB_SYNC) {
   //    db.sequelize.sync({alter: true});
   //  }

   // const u1 =await User.findByPk(2);
   // const r1 = await Role.findByPk(3);
   //u1.addRole(r1);
   // all user with roleId =2
   //const response = await r1.getUsers();
   // const response = await u1.getRoles();
   // const response = await u1.hasRoles(r1);
   // console.log(response)
      // all user with roleId =2

   })

}

setupAndStartServer()
