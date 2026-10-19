# Synchronous vs  Asynchronous Programming in JS

>## Synchronous Programming:
>
>In this synchronous demonstration below using the `setTimeout()` function. This function schedules a **callback** function to run later.
>
>Think of it as :
>
>    "Wait at least this long, then run this function"
>
>```js
>function task1(callback) {
>    setTimeout(() => {
>        console.log("1. Wake up.🛌🥱");
>        callback();
>    }, 2000);;
>
>} 
>```
>
>- Here:
>```
>    - setTimeout —→ schedules something for later
>    - () => { ... } —→ the callback function
>    - 2000 —→ wait 1000 milliseconds = 2 seconds
>```
> A **callback** is simply a function that you give to another function so that it can call it later.
>
>- See more examples at [sync.js](./sync.js).
>
>>## Asynchronous Programming:
>### Promises
>
>A **Promise** in JS is basiclly an object representiing a result that >isn't available yet, but will be available later;
>
>If `setTimeout()` teaches you "**do this later**", Promises teach you >"**this operation will eventually give me a result.**"
>
>A Promise has three states;
>
>```
>        pending 
>            ↓
>        fulfilled ✅
>
>        or
>
>        pending 
>            ↓
>        rejected  ❌
>```
>
>**Creating Promise**:
>
>```js
>
>const promise = new Promise((resolve, reject) => {
>
>    const randomNumber = Math.floor(Math.random() * 10);
>
>    setTimeout(() => {
>        if(randomNumber < 4) {
>            resolve('Well Done! You guessed right!')
>        } else {
>            reject("Oops! You guessed wrong! Try again!")
>        }
>    }, 2000)
>});
>```
>Here:
>- `resolve()` means: **_The guess was correct. Here's the result_.**
>- `reject()` means: **_The guess was wrong. Here is the error_**
>
>**Getting the result and Handling failure**:
>
>```js
>promise.then((result) => {
>    console.log(result);
>}).catch((error) => {
>    console.log(error)
>})
>```
>- `.then(callback)`says that when Rromise eventually resolves(successfully finishes), call the function with the result.:
>
>In essence:
>```
>.then()   —→    success
>.catch()  —→    failure
>
>``
>
>[asyn.js](./async.js)

