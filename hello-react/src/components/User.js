import React from 'react'
import PropTypes from "prop-types"

function User({name, surname, age, isLoggedIn, friends, address}) {
    if (!isLoggedIn) {
        return <div>Giriş yapmadınız</div>
    }
  return (
    <div>
        <h1>{`${name} ${surname} (${age})`}</h1>
        <p>{address.title} {address.zip}</p>
        <br />
        {
            friends && friends.map((friend, index) => (
                <div key={index}>{friend.name}</div>
            ))
        }
    </div>
  )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}
User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false
}



export default User