import axios from "axios"

const getData = async(userId) => {
  
  const {data : userData} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const {data : userPost} = await axios(`https://jsonplaceholder.typicode.com/posts/${userId}`)

  console.log("User: ", userData)
  console.log("User Post: ", userPost)
}

export default getData