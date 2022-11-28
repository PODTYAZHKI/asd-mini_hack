// import { getUserList } from "./user.js"
// const userList = getUserList()
// console.log(userList)

const users  = [
  {
    id: 1,
    isPublic: true,
    name: 'user1',
    companies: ['com1', 'com2', 'com3'],
    books: [
      {
        name: 'book1',
        amount: 1,
      },
      {
        name: 'book2',
        amount: 200,
      }
          ]
  },
  {
    id: 2,
    isPublic: true,
    name: 'KK',
    companies: ['com1', 'com2', 'com3'],
    books: [
    {
    name: 'kk1',
    amount: 1,
    },
    {
    name: 'kk2',
    amount: 200,
    }
    ]
    }
    
]


const express = require('express')
const app = express();
app.get('/users', (req, res) => {
  return res.status(200).send({ 
    success: 'true',
    message: 'users',
    users: users
  })
});
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});