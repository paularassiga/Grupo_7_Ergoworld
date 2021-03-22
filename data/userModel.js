const fs = require("fs");
const path = require("path");

const User = {

    getAll: () => {JSON.parse(fs.readFileSync(path.join(__dirname, './users.json'),{encoding:"utf-8"}))},

    findByField: (field, text) => {
        let allUsers = this.getAll();
        let userFound = allUsers.find(oneUser => oneUser(field) === text);
        return userFound;
    },

    generateId: () => {
        let allUsers = this.getAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1
    },

    create: (userData) => {
        let allUsers = this.getAll();
        let newUser = {
            id:this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFyleSync(path.join(__dirname, './users.json'), JSON.stringify(allUsers, null, ''));
        return newUser;
    },

    delete: function(id) {
        let allUsers = this.getAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(finalUsers, null, ''));
        return true;
    }
}

module.exports = User;