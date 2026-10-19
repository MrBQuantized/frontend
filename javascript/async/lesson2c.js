// Asynchronous Programming
// Without Promise
const ShowMessage = (callback) => {
    console.log(callback)
};

const firstMessage = (callback) => {
    setTimeout(() => {
        ShowMessage('Hello');
        callback();
    }, 2000);
};

const secondMessage = () => {
    ShowMessage(('World!'))
}

// firstMessage(secondMessage)

// Creating A Promise
const promise = new Promise((resolve, reject) => {
    // promise can accept anything
    // const allGood = true;
    
    // //do something...
    // if (allGood) {
    //     resolve('Execution successful!')
    // } else {j
    //     reject("Oops! Something went wrong!")
    // };

    //Another example
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if(randomNumber < 4) {
            resolve('Well Done! You guessed right!')
        } else {
            reject("Oops! You guessed wrong! Try again!")
        }
    }, 2000)
});

// Then and catch methods
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
})

// More examples
const promiseOne = new Promise((resolve, reject) => {
    resolve('✅ Well Done! One is Resolved')
})
const promiseTwo = new Promise((resolve, reject) => {
    resolve('✅ Well Done! One is Resolved')
})
const promiseThree = new Promise((resolve, reject) => {
    reject('❌Sorry! Three is rejected. Try again!')
})


promiseOne
.then((value) => {
    console.log(value)
    return promiseTwo
})
.then((value) => {
    console.log(value)
    return promiseThree
})
.catch((error) => {
    console.log(error)
});

//