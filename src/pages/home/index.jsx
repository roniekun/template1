import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'
import Cards from './assets/Cards'

const Home = () => {
  const { user, setTitle } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Freelance'
    setTitle(`${location.title} - ${user.title} `)
  }, [location.pathname])


  const menu = useRef(null)

  return (
    <PageAnimator>
      <motion.main 
        className='relative flex flex-col'>

        <section className='relative min-h-[800px] flex flex-col  bg-stone-200 p-[5vw] lg:gap-y-2'>
        <div className='border-zinc-700 w-ful  lg:mb-24 mb-16 mt-16 md:mb-16 my-5'>
             <h1 className='lg:text-3xl md:text-3xl  text-2xl text-balance'>
             Present Studio specializes in brand strategy,
              visual identity, and websites for founder-led businesses.</h1>
        </div >
        <div className='flex flex-col lg:gap-10 gap-5'>
        <h1 className='lg:text-2xl  text-xl'>Projects:</h1>
            <Cards /> 
        </div>
        </section>
  
      
      {/* footer */}
      <section className=''>
      <div></div>
        <div className='lg:col-span-2 sm:w-full'>
              <Footer />
        </div>
      </section>
    </motion.main>
    </PageAnimator>
  )
}

export default Home