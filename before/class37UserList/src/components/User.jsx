import React from 'react'

const User = ({name, key}) => {
  return (
    <li key={key}> {name}</li>
    
  )
}

export default User