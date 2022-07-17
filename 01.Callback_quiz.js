const print = (max) => {
    for(i = 0; i <= max; i++)
    {
        console.log(i);
    }
}

const print_mul = (max) => {
    for(i = 0; i <= max; i++)
    {
        console.log(i*2);
    }
}

function iterate(max, action) {
    let result = action(max);
    console.log(result);
    return result;
}

iterate(5, print_mul);

function iterate2(max, action) {
    for(let i = 0; i < 0; i++){
        action(i);
    }
}

function log(num) {
    console.log(num);
}

function doubleAndlog(num) {
    console.log(num*2);
}

iterate2(3, log);
iterate2(3, doubleAndlog);