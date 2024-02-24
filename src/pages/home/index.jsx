import { motion } from 'framer-motion'
import { useRef, useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'
import Cards from './assets/Cards'
import Button from './assets/Button'

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

        <section className='relative min-h-[800px] flex flex-col bg-stone-200 p-[3vw]'>
        <div className='border-zinc-700 w-full mt-16 my-5 flex flex-col gap-2'>
             <h1 className='lg:text-3xl md:text-2xl  text-2xl uppercase font-light'>
             YourStudio specializes in brand strategy &
              visual identity.</h1>
            <p className='md:w-1/2 p-1 text-md leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum sint,
             asperiores quasi? Delectus tenetur voluptates numquam earum quos?</p>
            {/* <div className='md:self-center'>
          <Button />
            </div> */}
        </div >
        <div className='flex flex-col gap-5 '>
        <h1 className='font-light uppercase text-xl'>Projects:</h1>
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