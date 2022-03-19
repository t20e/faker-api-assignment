const express = require('express');
const app = express();
//import faker and alsso do in terminal npm install @faker-js/faker --save-dev
const { faker } = require('@faker-js/faker');
const req = require('express/lib/request');
const res = require('express/lib/response');



class User {
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        //  can also add ('male') to get only males back
        this.lastName = faker.name.lastName()
        this.phoneNum = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    };
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address = {
            'street': faker.address.streetAddress(),
            'city': faker.address.city(),
            'state' : faker.address.state(),
            'postalCode' : faker.address.zipCodeByState(),
            'country' : faker.address.country()
        };
    }
}
// let user1 = new User()
// console.log(user1);
// let apple = new Company()
// console.log(apple);

//GENERATE users
let users = [];
for(let i =0; i < 10; i++){
    let user = new User();
    users.push(user);
}
// console.log(users);
//GENERATE companies
let companies = [];
for(let i =0; i < 10; i++){
    let company = new Company();
    companies.push(company);
}
// console.log(companies);




// routes get new user

app.get('/api/users/new', (req,res) =>{
    // new user
    let newUser = new User()
    res.json(newUser);
})

let user101 = new User()
app.get('/api/user101', (req,res) =>{
    //same user
    res.json(user101)
})
//update
app.put('/api/users/update', (req,res) =>{
    const id = req.params.id;
    user101.firstName = 'jonny john jhon'
    res.json(user101)
})
//delete
app.delete('/api/users/delete', (req,res) =>{
    const id = req.params.id;
    user101 = undefined;
    delete(user101);

    res.json(`deleted user`)
})




app.get('/api/companies/new', (req,res) =>{
    let newCompany = new Company()
    res.json(newCompany)
})
app.get('/api/user/company', (req,res) =>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({newCompany, newUser})
})


















const server = app.listen(8000, () =>
    console.log(`server is on port  ${server.address().port} `)
);