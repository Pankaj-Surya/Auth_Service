const UserRepository = require('../repository/user-repository')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config/serverConfig')

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


}

module.exports = UserService