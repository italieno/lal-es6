
let simpleArray = [1,2,3]
let simpleIterator = simpleArray[Symbol.iterator]()

let idMaker = {
    [Symbol.iterator](){
        let nextId = 1;
        return {
            next(){
                let value = nextId > 10 ? undefined : nextId++;
                let done = !value;
                return {done, value};
            }
        };
    }
}

export { simpleIterator, idMaker }