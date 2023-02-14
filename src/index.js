const bodyParser = require('body-parser');
const express = require('express')

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository')
const UserService = require('./services/user-service');
const { response } = require('express');

const setupAndStartServer = async() =>{
 const app = express();

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 app.use('/api', apiRoutes);

 app.listen(PORT,async ()=>{
    console.log(`Server start at ${PORT}`);
    const repo  = new UserRepository();
    const result=await repo.get(1);
    console.log("result : ",result)
       // const incomingpassword = '123456';
        // const user = await User.findByPk(3);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
      const service = new UserService();
      const newToken =await service.createToken({email:"sam@gmail.com",id:1})
      console.log("newToken : ",newToken)
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjcxNjM1MTgxLCJleHAiOjE2NzE2MzUyMTF9.vuo6QmYm6TmL2P2rBXoNDbPi1st5ZVrK4Yf2Jz-Dpzs';
      //const reponse = await service.verifyToken(newToken);
      const reponse = await service.verifyToken(token);
      console.log("verify : ",reponse)

   })

}

setupAndStartServer()
