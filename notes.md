======================================
Lec 8 : Auth Service  
======================================

# Configuration
1. created project - npm init -y
2. npm i all respective pavkage
3. created folder structure and start the server
4. npx sequelize init -> create migrations and seeder


# DB Creation
npx sequelize db:create

# Model creation
npx sequelize model:generate --name User --attributes email:string,password:string

# ---

# Validation in sequelize
Ex. isEmail:true

# 
npx sequelize db:migrate

### commit #################################

#
user-repository : 
user-service :
user-controller :
routes :
check


# enrypt password ->bycrypt

sequelize hooks => model => beforeCreate

jwt token

### Commit #################################

