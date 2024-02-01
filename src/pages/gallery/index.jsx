import React from 'react'
import styles from './index.module.css'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'

const Gallery = () => {
    const { user, setTitle } = useContext(DataContext)

      useEffect(() => {
        location.title = 'Gallery'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])


  return (
    <main className={styles.container}>
      Gallery
    </main>
  )
}

export default Gallery