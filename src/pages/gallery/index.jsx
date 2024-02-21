import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import Invalid from './assets/Invalid'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'

const Gallery = () => {
    const { user, setTitle } = useContext(DataContext)
    const { id } = useParams()
    const navigate = useNavigate()

    // dynamic title
      useEffect(() => {
        location.title = 'Gallery'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])

      const isValid = Number(id) <= 4 || !id

  return (
    <PageAnimator>
    <main className='min-h-screen bg-gray-100'>
        <div className='flex-col h-screen flex '>
              <div
              className='p-20 bg-zinc-300'>
              <h1 className='text-7xl uppercase'>
               Work
      </h1></div>
         { isValid ?  
         <div className='h-full w-full flex flex-col justify-center items-center'>
          <h1 className='text-3xl'> Featured Posts {id}</h1>
          <p>Display grid of images*</p>
         </div>
          :
          <Invalid/> 
          }
        </div>
      <section>
        <Footer />
      </section>
    </main>
    </PageAnimator>
  )
}

export default Gallery