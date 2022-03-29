// only working at ts not js
interface Human {
    name: string;
    age: number;
    gender: string;
}

class Human implements Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const test_people = new Human("jinow", 28, "female");

// ? => optional
const hello = (name: string, age?: number, gender?: string): string => {
    return `hello ${name}`;
};

console.log(hello(test_people.name));

export {};