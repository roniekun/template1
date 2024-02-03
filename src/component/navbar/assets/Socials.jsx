import React from 'react';
import {linksData } from '../utils/linksData';

const Socials = () => {

  return (
  <main 
    className="gap-x-5 gap-y-3 flex flex-wrap  relative mx-[10vw]">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly gap-5" 
        key={link.acn}>
          <a
            href={link.url}
            className={` hover:opacity-90 over:opacity-85 transition text-gray-300 bg-blend-difference`}
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
};

export default Socials;
