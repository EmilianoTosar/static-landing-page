import React, { useState } from 'react'
import './Input.css'
import Button from './Button'
 
const Input = () => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!inputValue) {
      setError('Email cannot be empty')
    } else if (!/\S+@\S+\.\S+/.test(inputValue)) {
      setError('Please provide a valid email address')
    }
  }

  return (
    <div className="form-body">
      <form action="" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <div className="div-input">
            <label htmlFor="email"></label>
            <input 
              className={error ? 'warning' : '' }
              value={inputValue}
              type="email" 
              name="email" 
              id="email" 
              placeholder="Your email adress..." 
              onChange={handleChange}
            />
            {error && <p>{error}</p>}
          </div>
          <Button />
        </div>
      </form>
    </div>
  )
}

export default Input
