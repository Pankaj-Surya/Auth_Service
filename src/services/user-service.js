const UserRepository = require('../repository/user-repository')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config/serverConfig')
const bcrypt = require('bcrypt');
class UserService {

    constructor() {
        this.userRepository = new UserRepository();

    }

    async create(data) {
        try {
            console.log("service : ", data)
            const user = await this.userRepository.create(data)
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1d' })
            return result
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    async verifyToken(token) {
      try {
        const reponse = jwt.verify(token,JWT_KEY)
        return reponse
      } catch (error) {
        console.log("Something went wrong in token validation", error);
        throw error;
      }
    }
  
    async checkPassword(userInputPlainPassword, encryptedPassword){
      try {
        const response = bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        console.log("checkPassword : ", response);
        return response
      } catch (error) {
        console.log("Something went wrong in password comparison");
        throw error;
      }
    }

    async signIn(email,plainPassword){
        try {
         // step 1: fetch the user using the email
         const user = await this.userRepository.getByEmail(email);
         console.log("signIn : ", user)
         if(user===null){
            console.log("User Does not exist");
            throw {error: 'User Does not exist'};
         }
         // step 2: compare incoming plainPasword and stored encryted password
         
         const passwordMatch =await this.checkPassword(plainPassword,user.password);
         if(passwordMatch===false) {
            console.log("Password doesn't match");
            throw {error: 'Incorrect password'};
        }
         // step 3: if password match then create token and send it to user 
         if(passwordMatch===true){
             const newJWT =await this.createToken({email: user.email, id: user.id});
             return newJWT;
         }

        } catch (error) {
            console.log("Something went wrong in the sign in process");
            throw error;
        }
    }

    async isAuthenticated(token){
      try {
        const response = this.verifyToken(token);
        if(!response) {
            throw {error: 'Invalid token'}
        }
        const user = this.userRepository.getById(response.id);
        if(!user) {
            throw {error: 'No user with the corresponding token exists'};
        }
        return user.id;
    } catch (error) {
        console.log("Something went wrong in the auth process");
        throw error;
    }
    }
}

module.exports = UserService