import { sayHelloProps } from "./types";

export function sayHello({ firstname, lastname, age }: sayHelloProps) {
  console.log(`Hello! ${firstname}${lastname ? " " + lastname + "." : "."}`);
  age && console.log(`You are ${age} years old.`);
}
