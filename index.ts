const name = "jinow9595",
    age = 28,
    gender = "male";

// ? => optional
const hello = (name: string, age?: number, gender?: string): string => {
    return `hello ${name}`;
};

hello(name);

export {};