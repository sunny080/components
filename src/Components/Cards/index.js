import React from 'react'
import styles from './Cards.module.scss'
import { Layer1 } from '../../assets/index'
const Cards = ({img,text,info}) => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
           <img src={img}  />
           <h2>{text}</h2>
           <p>{info}</p>
        </div>
    </div>
  )
}

export default Cards