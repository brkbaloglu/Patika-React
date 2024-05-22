// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000)


// setInterval(() => {
//     console.log("1 sn");
// },1000)
// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello");
// })

import fetch from "node-fetch"
import axios from "axios"

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
//     console.log("Users: ", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())
//     .then((post) => {
//         console.log("Post 1:", post)
//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json())
//         .then((post) => console.log("Post 2:", post))
//     })
// })


// async function getData(){
//     const users = (await fetch("https://jsonplaceholder.typicode.com/users")).json()
//     const post1 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const post2 = (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

//     console.log("Users: ", users);
//     console.log("Post 1: ", post1);
//     console.log("Post 2: ", post2);
// }

// getData()

// (async() => {
//     const users = (await fetch("https://jsonplaceholder.typicode.com/users")).json()
//     const post1 = (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const post2 = (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()

//     console.log("Users: ", users);
//     console.log("Post 1: ", post1);
//     console.log("Post 2: ", post2);
// })

(async() => {
    const users = (await axios("https://jsonplaceholder.typicode.com/users"))
    const { data } = (await axios("https://jsonplaceholder.typicode.com/users"))
    const { data: post1 } = (await axios("https://jsonplaceholder.typicode.com/posts/1"))
    const post2 = (await axios("https://jsonplaceholder.typicode.com/posts/2"))

    console.log("Users: ", users);
    console.log("Users: ", data);
    console.log("Post 1: ", post1);
    console.log("Post 2: ", post2);
})


// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//        if (number === 1) {
//         resolve({text: "Selam"})
//        }
//        reject("Bir problem oluştu")
//     })
// }

// getComments(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const { data } = (await axios("https://jsonplaceholder.typicode.com/users"))
        resolve(data)
    })
}



const getPost = (postId) => {
    return new Promise(async(resolve, reject) => {
        const { data } = (await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`))
        resolve(data)
    })
}
// (async() => {

//     try {
//         const users = await getUsers()
//         const post1 = await getPost(1)
        

//         // await getPosts(1)
//         //     .then((data) => console.log(data))
//         //     .catch((e) => console.log(e))

//         console.log(users);
//         console.log(post1);
//     } catch (error) {
//         console.log(error);
//     }
    
// })

Promise.all([
    getUsers(),
    getPost(1)
])
.then(console.log(data))
.catch(console.log(data))