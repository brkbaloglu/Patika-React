import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'
import './styles.css'
function Contacts() {
  
  const [contacts, setContacts] = useState([{
    fullname: "Mehmet",
    phone_number: "12345"
  },{
    fullname: "Ayşe",
    phone_number: "124567"
  }
])

  useEffect(() => {

  }, [contacts])
  return (
    <div>
        <List contacts={contacts}></List>
        <Form addContact={setContacts}></Form>
    </div>
  )
}

export default Contacts