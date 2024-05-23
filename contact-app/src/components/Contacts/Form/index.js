import React, { useEffect, useState } from 'react'

const initialFormValues = {fullname: "", phone_number: ""}
function Form({ addContact, contacts }) {
  
  const [form, setForm] = useState(initialFormValues)

  const onChangeInput = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (form.fullname === "" || form.phone_number === "") {
      return false
    }
    addContact([...contacts, form])
  }
  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts])
  return (
    <div>
      <form onSubmit={onSubmit}>
      <div>
        <input placeholder='Full name' onChange={onChangeInput} type="text" name="fullname" id="" value={form.fullname} />
      </div>
      <div>
        <input placeholder='Phone Number' onChange={onChangeInput} type="text" name="phone_number" id="" value={form.phone_number}/>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  </div>
  )
}

export default Form