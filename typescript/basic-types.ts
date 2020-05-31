// Boolean
const isDone: boolean = false;
const isDone2: boolean = false;

// String
const nickname: string = "amendoa";

// Number
const age: number = 10;

// Arrays
const numbers: string[] = ["1", "2", "2"];
const anotherNumbers: Array<string> = ["1", "2", "2"];

// Any
let typescriptButJavascripthu3: any = "";
typescriptButJavascripthu3 = 1;
typescriptButJavascripthu3 = "";
typescriptButJavascripthu3 = false;

// Enum
enum Colors {
  Green,
  Red,
  Yellow,
  Blue,
}

// Tuple
let someTuple: [number, string];
someTuple = [10, "teste"];

// Void
function someVoidFunction(): void {}

// Never
function error(messsage: string): never {
  throw new Error("");
}

// Object
const user: object = {};

// Type assertions
let someValue: any = "something";
let strValue: number = (<string>someValue).length;
let strValueAsSyntax: number = (someValue as string).length;
