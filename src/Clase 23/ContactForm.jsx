import React, { useState } from 'react'
import useInput from './useInput'

const ContactForm = () => {

    const name = useInput('text')
    const lastName = useInput('text')
    const email = useInput('email')
    const password = useInput('password')

  return (
    <div>
        <form action="">
            {name.value}
            <input {...name}/>
            {lastName.value}
            <input {...lastName}/>
            {email.value}
            <input {...email}/>
            {password.value}
            <input {...password}/>
        </form>
    </div>
  )
}

export default ContactForm