import React from 'react'
import styles from './index.module.css'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Pricing = () => {
  const { pageTitle, setTitle } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Pricing'
    setTitle(`${location.title} - ${pageTitle}`)
  }, [location.pathname])

  return (
    <main className={styles.container}>
        Pricing
    </main>
  )
}

export default Pricing