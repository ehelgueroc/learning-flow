// @flow

// VARIABLES
let name: string = 'John Doe';
let age: number = 40;
let something: any = [1,2,3];
let users: string[] = ['John', 'Sara'];
let ids: number[] = [1,2,3];

let person: Person;

person = {
	name: 'John',
	age: 30,
	hasKid: false
}

interface Person {
	name: string;
	age: number;
	hasKids?: boolean;
}