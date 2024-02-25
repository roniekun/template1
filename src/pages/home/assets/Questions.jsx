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
                    <div className='group lg:py-10 md:py-7 py-5'>
                        <h1
                            key={index}
                            onClick={() =>  handleClick(index)} 
                            className='cursor-pointer text-base px-2'>
                            #0{index+1}    {data.question}
                        </h1>
                    </div>
                    <motion.div 
                    animate={{height: isActive[index]? 'auto' : '0'}}
                    // ref={(el) => (answers.current[index] = el)}
                    className='overflow-hidden  transition h-0 duration-300 flex rounded-md'>
                        <h1 className='px-2 text-base leading-snug lg:py-5 py-2' >{data.answer}</h1>
                    </motion.div>
                  { index !== questionsData.length-1 && <span className='h-[1px] w-full bg-stone-700'/>}
                </div>
            ))}
        </main>
    );
};

export default Questions;
