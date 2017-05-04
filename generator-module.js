function *process(){
    let result = yield;
    console.log(`result ius ${result}`);
}

export {process}