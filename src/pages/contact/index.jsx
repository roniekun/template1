import React from 'react'
import styles from './index.module.css'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Contact = () => {
    const { user, setTitle } = useContext(DataContext)

      useEffect(() => {
        location.title = 'Info'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])

  return (
    <main className={styles.container}>
      Contact
    </main>
  )
}

export default Contact