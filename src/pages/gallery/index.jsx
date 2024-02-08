import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'

const Gallery = () => {
    const { user, setTitle } = useContext(DataContext)
    const { id } = useParams()

      useEffect(() => {
        location.title = 'Gallery'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])


  return (
    <PageAnimator>
    <main className='min-h-screen bg-gray-100'>
        <div className='h-screen flex place-items-center justify-center'>
          <h1 className='text-3xl'> Featured Posts {id}</h1>
        </div>
      <section>
        <Footer />
      </section>
    </main>
    </PageAnimator>
  )
}

export default Gallery