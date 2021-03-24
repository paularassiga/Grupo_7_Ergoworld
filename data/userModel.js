const fs = require("fs");
const path = require("path");
const bcryptjs = require('bcryptjs');

const User = {

    getAll: () => JSON.parse(fs.readFileSync(path.join(__dirname, './users.json'), {
        encoding: "utf-8"
    })),

    findByField: function (field, text) {
        const allUsers = this.getAll();
        const userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound;
    },

    generateId: function () {
        let allUsers = this.getAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1
    },

    create: function (userData) {
        let allUsers = this.getAll();

        bcryptjs.hash(userData['password'], 10, (err, palabraSecretaEncriptada) => {
            if (err) {
                console.log("Error hasheando:", err);
            } else {
                console.log("Y hasheada es: " + palabraSecretaEncriptada);
                userData['password'] = palabraSecretaEncriptada;
                let newUser = {
                    id: this.generateId(),
                    ...userData
                }

                allUsers.push(newUser);
                fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(allUsers, null, 2));
                return newUser;
            }
        });
    },

    delete: function (id) {
        let allUsers = this.getAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(path.join(__dirname, './users.json'), JSON.stringify(finalUsers, null, ''));
        return true;
    }
};

module.exports = User;