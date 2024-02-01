import React from 'react';
import Facebook from './svg/facebook-2.svg?react';
import Instagram from './svg/instagram.svg?react';
import LinkedIn from './svg/linkedin-2.svg?react';
import Github from './svg/github.svg?react';

const Socials = () => {
  const socialMediaLinks = [
    {
      name: 'Github',
      acn: 'gh',
      fill: '#E4405F',
      url: 'https://www.github.com/roniekun',
      userhandle: '',
      icon: <Github />,
    },
    {
      name: 'Facebook',
      acn: 'fb',
      fill: '#1877F2',
      url: 'https://www.facebook.com/ronieuxjpg',
      userhandle: '',
      icon: <Facebook />,
    },
    {
      name: 'Instagram',
      acn: 'ig',
      fill: '#E4405F',
      url: 'https://www.instagram.com/ronieuxjpg',
      userhandle: '',
      icon: <Instagram />,
    },
    {
      name: 'LinkedIn',
      acn: 'li',
      fill: '#E4405F',
      url: 'https://www.linkedin.com/in/roniebenitez',
      userhandle: '',
      icon: <LinkedIn />,
    },
  ];

  return (
    <main className="gap-5 flex flex-wrap text-sm justify-center m-2 absolute right-[5vw]">
      {socialMediaLinks.map((link, index) => (
        <div className="flex justify-evenly gap-5" key={link.acn}>
          <a
            href={link.url}
            className={`w-5 hover:scale-105 hover:opacity-75 transition`}
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
