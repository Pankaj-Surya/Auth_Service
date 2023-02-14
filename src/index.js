const bodyParser = require('body-parser');
const express = require('express')

const { PORT } = require('./config/serverConfig')
const apiRoutes = require('./routes/index');
const UserRepository = require('./repository/user-repository')
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
   })

}

setupAndStartServer()
