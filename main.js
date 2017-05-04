/************************************
 *  1. basic-module examples
 * **********************************
import {MyObject, myObjectInstance} from './basic-module';

publicApi.greetings('stefano');

publicApi.calculator(1, 2);

console.log(typeof MyObject); //function

console.log(typeof myObjectInstance); //object

console.log(myObjectInstance instanceof MyObject); //true

myObjectInstance.show('yep!');

class MyOtherObject extends MyObject{
    constructor(){
        super();
    }
}

let moo = new MyOtherObject();

console.log(moo.myVariable); //default

MyObject.myStaticMethod();
*/

/************************************
 *  2. iterator-module examples
 * **********************************
import {simpleIterator, idMaker} from './iterator-module'

console.log(simpleIterator); //Array Iterator {}

/*
for (let v of simpleIterator){
    console.log(v); //1...3
}
*/
/*
simpleIterator.next() // {value: 1, done: false}
simpleIterator.next() // {value: 2, done: false}
console.log(simpleIterator.next()); // {value: 3, done: false}
console.log(simpleIterator.next()); // {value: undefined, done: true}

for (let v of idMaker){
    console.log(v); //1...10
}
*/

/************************************
 *  2. generator-module examples
 * **********************************/
//import {process} from './generator-module'

function *process(){
    let result = yield;
    console.log(`result ius ${result}`);
}

let generator = process();

console.log(generator);