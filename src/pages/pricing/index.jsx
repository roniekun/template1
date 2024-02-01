import React from 'react'
import styles from './index.module.css'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Pricing = () => {
  const { user, setTitle } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Pricing'
    setTitle(`${location.title} - ${user.title}`)
  }, [location.pathname])

  return (
    <main className={styles.container}>
        Pricing
    </main>
  )
}

export default Pricing