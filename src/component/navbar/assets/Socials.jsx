import {forwardRef ,useRef, useEffect, useImperativeHandle, useContext} from 'react';
import {linksData } from '../utils/linksData';
import gsap from 'gsap';
import { DataContext } from '../../../context/DataContext';

const Socials = forwardRef((props, ref) => {
    const { isToggleMenu } = useContext(DataContext)
    const socialRefs = useRef([]);

    // Expose the refs to the parent (Navbar) component
    useImperativeHandle(ref, () => ({
        socialRefs: socialRefs.current,
    }), [socialRefs]);

    useEffect(() => {
        gsap.fromTo(socialRefs.current, { opacity: 0,  }, 
        {opacity: 1, delay: .5, stagger: 0.1, duration: 0.3});
    }, [socialRefs, isToggleMenu]);

  return (
  <main 
    className="gap-x-5 gap-y-3 flex flex-wrap relative mx-[10vw]">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly group" 
        key={link.acn}>
          <a
           ref={(el) => (socialRefs.current[index] = el)}
            href={link.url}
            className={` hover:opacity-90 over:opacity-85 transition group-hover:-translate-y-1   text-md text-gray-50 bg-blend-difference opacity-0 uppercasexl px-1`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </div>
      ))}
    </main>
  );
});

export default Socials;
