let greetings = function(str){
    console.log(`hello ${str}!`);
}

let calculator = function(var1, var2){
    console.log(`sum is: ${var1 + var2}!`);
}

class MyObject{
    constructor(){
        this.myVariable = 'default';
        console.log(`constructing...`);
    }
    show(str){
        console.log(str);
    }
    static myStaticMethod(){
        console.log('my static method has been called from a not static class!');
    }
}

let myObjectInstance = new MyObject();

export { greetings, calculator, MyObject, myObjectInstance }
