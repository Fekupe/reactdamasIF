import React from 'react'
import styles from './Conteudo.module.css'

export default function Conteudo(props) {
  return (
    <div className={styles.conteudo}>
      
      <img className={styles.charmander}src={props.charmander} />
    
    </div>
  )
}

export function OlaMundo(){
    console.log("Ola mundo")
}