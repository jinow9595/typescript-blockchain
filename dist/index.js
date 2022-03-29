"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const test_people = new Human("jinow", 28, "female");
// ? => optional
const hello = (name, age, gender) => {
    return `hello ${name}`;
};
console.log(hello(test_people.name));
//# sourceMappingURL=index.js.map