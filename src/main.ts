const getFullName = (name:string, surname:string) => {
    return name + " " + surname;
}

console.log(getFullName("Suncerie", "Daye"));

interface User {
    name: string;
    age?: number;
    getMessage(): string;
}
const user:User = {
    name: 'Sunny',
    age: 22,
    getMessage() {
        return "Hello" + name;
    }
}

const user2: User = {
    name: 'Jack',
    getMessage() {
        return "Hello" + name;
    }
}

console.log(user.name);


let username: string = 'Alex';

let pageName: string | number = "1";

let errorMessage: string | null = null;

// Types
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;
interface UserInterface {
    id: ID;
    name:string;
    surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];
const dragonTag : MaybePopularTag = null;

const doSomething = (): void => {} //a function that does not return anything
let foo: any = 'foo'; //just js. Can use any type which is bad

const doSomethingTwo = (): never => {// a function that never ends
    throw "never";
}

let vUnknown: unknown = 10; //works like any except you cannot assign the variable to a known type unless you use 'as' keyword

//let s1: string = vUnknown;  causes error

let s1: string = vUnknown as string;