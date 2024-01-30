import React from 'react'
import styles from './index.module.css'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'

const Gallery = () => {
  const { pageTitle, setTitle } = useContext(DataContext)

    useEffect(() => {
      setTitle(`${location.title} - ${pageTitle} `)
      return () =>{
        location.title = 'Gallery'
      }
    }, [location.pathname])

  return (
    <main className={styles.container}>
      Gallery
    </main>
  )
}

export default Gallery