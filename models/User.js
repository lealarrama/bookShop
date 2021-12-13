const fs = require('fs');
const User = {
    fileName:'./data/users.json',

    // Lee el archivo Json
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
    },
    
    // genera un id
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUSer.id + 1;
        }
        return 1;
    },

// trae el archivo Json
    findAll:function(){
        return this.getData();
    },

    // Busca por Id
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    
    
    // Busca por campo que le pasemos
    findByField: function (field,text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    // Crea un usuario
    create: function (userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    // Borra un usuario
    delete: function (id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
        },

       





 }

 module.exports = User;