import React, { useRef, useState, useEffect } from 'react';
import { questionsData } from '../utils/questionsData';
import { motion, AnimatePresence } from 'framer-motion';

const Questions = () => {

    const [isActive, setActive] = useState(questionsData.map(() => false));
    // const answers = useRef([]);

    const handleClick = (index) => {
        setActive((prevArray)=>{
            const updatedArray = [...prevArray]
            updatedArray[index] = !updatedArray[index]
            return updatedArray
        })
    };

    return (
        <main className='h-auto w-full flex flex-col'>
            {questionsData.map((data, index) => (
                <div key={index} className='flex flex-col '>
                    <div className='group lg:py-8 md:py-7 py-5 space-y-1'>
                    <span className='text-sm border rounded-lg border-gray-600 px-1 bg-zinc-700 m-2  text-gray-50'>
                    #0{index+1}</span>
                        <h1
                            key={index}
                            onClick={() =>  handleClick(index)} 
                            className='cursor-pointer text-lg font-base px-2'>
                             {data.question}
                        </h1>
                    </div>
                    <motion.div 
                    animate={{height: isActive[index]? 'auto' : '0'}}
                    transition={{ease: [0.87, 0, 0.13, 1], duration: .5}}
                    // ref={(el) => (answers.current[index] = el)}
                    className='overflow-hidden  transition h-0 duration-300 flex rounded-md'>
                        <h1 className='mx-2 text-zinc-800 text-lg leading-snug lg:my-5 my-2' >{data.answer}</h1>
                    </motion.div>
                  { index !== questionsData.length-1 && <span className='h-[1px] w-full bg-stone-700'/>}
                </div>
            ))}
        </main>
    );
};

export default Questions;
