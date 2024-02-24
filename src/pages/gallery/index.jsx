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

const idAsString = id?.toString() ?? ''
const isValidStringId =  idAsString.charAt(0) !== '0' 
const isValid =  Number(id) <= 4 || !id  


  return (
    <PageAnimator>
    <main className='min-h-screen bg-gray-100'>
        <div className='flex-col h-screen flex '>
          <div
            className='md:p-20 py-20 px-5 bg-zinc-300'>
            <h1 className='md:text-7xl text-5xl uppercase'>
               Work
      </h1>
      </div>
         { isValid && isValidStringId ?  
         <div className='h-full w-full flex flex-col justify-center items-center'>
          <h1 className='text-3xl'> Featured Posts {id}</h1>
          <p>Display grid of images*</p>
         </div>
          :
          <div className='min-h-[400px] flex justify-center items-center'>
          <Invalid/> 
          </div>
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