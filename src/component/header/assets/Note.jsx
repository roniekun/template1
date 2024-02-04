import React from 'react'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Note = () => {
    const [ active, setActive ] = useState(true)
    const container = useRef(null);
    const slider = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setActive(false)
        }, 15000);
      
         if(!active){
        gsap.to(container.current,{
            height: 0
        })
            }
    }, [active])

    useEffect( () => {

    let xPercent = 0;

    // animation frame
            const animate1 = () => {
                if (xPercent > 0) {
                    xPercent = -100;
                }
                gsap.set(text1.current, { xPercent: xPercent });
                 gsap.set(text2.current, { xPercent: xPercent });
                requestAnimationFrame(animate1);
                xPercent += 0.07;
            };

        if(active){
            gsap.set(text1.current, {left: text2.current.getBoundingClientRect().width})
            requestAnimationFrame(animate1);
        }  
    }, [ active ])


  return (
    <main ref={container} className='w-auto h-10 bg-yellow-500 relative overflow-hidden'>
        <div ref={slider} className='w-full flex h-full place-items-center' >
            <div className='flex h-auto text-nowrap text-xl w-full uppercase'>
                <h1 ref={text1} className='relative flex gap-x-24  px-12'>
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span> 
                   <span> Website is working in progress.  </span> 
                   </h1>
                <h1 ref={text2} 
                className='absolute flex  gap-x-24 px-12'>
                   <span> Website is working in progress.  </span> 
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span>
                   </h1>
            </div>
        </div>
    </main>
  )
}

export default Note