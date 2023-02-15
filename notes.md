💛💛💛💛💛💛💛💛💛❤️❤️😍😍😍😍🙈🙈🙈🚗🚗🚗📘📘📘📗📗📗📔📕😍😍😍👉👉👉👈👈👈🎈🎈🎆⚽⚽🍔🍔🍿🍿🍟🔴🔴🟠🟠🟡🟡🟢🟢🔵🔵🟣🟣🟤🟤⚫⚫⚪⚪🟥🟥🟧🟧🟨🟨🟩🟩🟦🟦🟦🟪🟪🔶🔶🔷🔷🔲🔲🕑

# Lec 8 : Auth Service  


🔴 **Configuration**


1. created project - npm init -y
2. npm i all respective pavkage
3. created folder structure and start the server
4. npx sequelize init -> create migrations and seeder

 🔴 **DB Creation**
  
  `npx sequelize db:create`

🔴 **Model creation**

`npx sequelize model:generate --name User --attributes email:string,password:string`



🔴 **Validation in sequelize**

Ex. isEmail:true

🔴 **DB Migration** 

`npx sequelize db:migrate`

</br>
</br>

## 🟢  **SETUP** 
---

1. user-repository : 
2. user-service :
3. user-controller :
4. routes :
5. check

</br>

- **Encrypt password**
   - Using bycrypt

- **sequelize hooks** 
   - model => beforeCreate

- **jwt token**


</br>

***

# Lecture 10 : Authrization 


### Authorization : providing a roles 


🟨 **Model** 
1. User
2. Role

**We dont have Role model so create Role model**

` npx sequelize model:generate  --name Role --attributes name:string`

###  **User and Role Has Many-Many association**

## **USER**

| Id | Email | Password |
| :---- | :----: | ----: |
| Pankaj | Pankaj@gmail.com | 123 |
| Sam | Sam@gmail.com |  123 |

## **Role**

| Id | Name 
| :---- | :----: |
| 1 | Admin
| 2 | User 