import React from 'react';
import {linksData } from '../utils/linksData';

const Socials = ({footerStyles}) => {

  return (
    <main 
    style={{...footerStyles}}
    className="gap-5 flex flex-wrap justify-center absolute right-[5vw] p-2 px-5 rounded-md border border-gray-900">
      {linksData.map((link, index) => (
        <div className="flex justify-evenly gap-5" 
        key={link.acn}>
          <a
            href={link.url}
            className={`w-4 hover:scale-105 hover:opacity-85 transition fill-gray-900 bg-blend-difference`}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        </div>
      ))}
    </main>
  );
};

export default Socials;
