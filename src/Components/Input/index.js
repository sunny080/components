import React from 'react'
import styles from './Input.module.scss'
const Input = ({placeholder,Name,className}) => {
  return (
    <div className={[styles.conatiner, className].join('') }>
        <label htmlFor="">{Name}</label>
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input