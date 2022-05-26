"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} and ${this.age} years old.`);
    }
}
const lari = new UserAccount('larissa', 25);
lari.logDetails();
