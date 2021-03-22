const fs = require("fs");
const path = require("path");

const User = {

    getAll: () => JSON.parse(fs.readFileSync(path.join(__dirname, './users.json'),{encoding:"utf-8"})),

    findByField: (field, text) => {
        // console.log("Parametro ingresados : " + field + " " + text);

        console.log(this);
        let allUsers = User.getAll();
        // console.log(allUsers);
        console.log(text);
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        console.log(allUsers[0])
        return userFound;
    },

    generateId: () => {
        let allUsers = User.getAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1
    },

    create: (userData) => {
        let allUsers = User.getAll();
        let newUser = {
            id:User.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(allUsers, null, 2));
        return newUser;
    },

    delete: function(id) {
        let allUsers = User.getAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(finalUsers, null, ''));
        return true;
    }
}

module.exports = User;