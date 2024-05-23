import './App.css';
// import Header from './components/Header'
import User from './components/User';
import { useState } from 'react';
import Counter from './components/Counter'
import ExampleInput from './components/ExampleInput'
function App() {

  // const name = "Mehmet"
  const surname = "Seven"
  const isLoggedIn = true

  const [name, setName] = useState("Mehmet")
  const [age, setAge] = useState(29)
  const [friends, setFriends] = useState(["Ahmet", "Murat"])
  const [address, setAddress] = useState({title: "İstanbul", zip:34756})
  return (
    <div>
      {/* <Header></Header>
      <h1>Hello React</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio impedit porro dolor quod ut delectus laudantium ipsa voluptas maxime unde alias non, commodi veritatis accusamus? Velit reiciendis blanditiis eveniet, provident et autem praesentium, omnis accusantium debitis obcaecati, ex quae deserunt.
      </p>
      <label htmlFor="myinput">
        Name
        <input type="text" id="myinput" />
      </label> */}
      {/* {
        isLoggedIn 
        && 
        <h1>{name + " " + surname}</h1>
      }

      {
        !isLoggedIn 
        &&
        <h1>Giriş yapmadınız.</h1>
      } */}

      {
        isLoggedIn ? `İsim soyisim: ${name} ${surname}.` : "Giriş yapmadınız."
      } 
{/*
      <User
      name="Mehmet"
      surname = "Seven"
      isLoggedIn = {true}
      age = {29}
      friends = {{
        title: "Ataşehir/Istanbul",
        zip: 34755
      }} 
      /> */}

      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>
      <hr />
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }

      <button onClick={() => setFriends([...friends, "Ayşe"])}>Click</button>

      <hr /><hr />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>Click</button>

      <hr /><hr /><hr />
      <Counter></Counter>
      <hr /><hr /><hr /><hr />
      <ExampleInput></ExampleInput>
    </div>
  );
}

export default App;
