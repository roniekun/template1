import React from 'react'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'

const Contact = () => {
    const { user, setTitle } = useContext(DataContext)

      useEffect(() => {
        location.title = 'Info'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])

  return (
    <main className='min-h-screen'>
      <div className='h-screen'></div>
    <section>
      <Footer />
    </section>
    </main>
  )
}

export default Contact