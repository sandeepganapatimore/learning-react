// With JavaScript, asynchronous tasks do not block the mainthread.

//Promises with fetch.
// Promises give us a way to make sense out of asynchronous behavior in JavaScript.
// The promise is an object that represents whether the async operation is pending, has been completed, or has failed

// const data=fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
// console.log(res.json())
// );

// The *then* method will invoke the callback function once the promise has resolved

// fetch("https://api.randomuser.me/?nat=US&results=1")
// .then(res => res.json())
// .then(json => json.results)
// .then(console.log)
// .catch(console.error)


//Async/Await :- 
// Another popular approach for handlng promises is to create
// an async function.
// instead of waiting for the results of a promise
// to resolve and handling it with a chain of then functions,
// async functions can be told to wait for the promise
// to resolve before further executing any code found in the function.

const getFakedata = async () => {
    try {
        let res = await fetch('https://api.randomuser.me/?nat=US&results=1');
        let { result } = res.json;
        console.log(result)
    } catch (error) {
        console.log(error)
    }
};

getFakedata();

const getPeople = count =>
    new Promise((resolves, reject) => {
        const api = `https://api.randomuser.me/?nat=US&results=1 ${count}`;
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            request.status === 200 ? resolves(JSON.parse(request.response).results) : reject(Error(request.statusText));
            request.onerror = err => reject(err);
            request.send();
        }
    });

const getpeople = count =>
    new Promise((resolves, reject) => {
        const api = `https://api.randomuser.me/?nat=US&results=1 ${count}`
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            request.status === 200 ? resolves(JSON.parse(request))
        };
    })




