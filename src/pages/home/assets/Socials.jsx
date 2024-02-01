import React from 'react'

const Socials = () => {

const socialMediaLinks = [

    { name: 'Github', 
      acn: 'gh',
      fill: '#E4405F', 
      url: 'https://www.github.com/roniekun',
      userhandle: '' 
    },

    { name: 'Facebook',
      acn: 'fb',
      fill: '#1877F2', 
      url: 'https://www.facebook.com/ronieuxjpg', 
      userhandle: '' 
    },

    { name: 'Instagram', 
      acn: 'ig',
      fill: '#E4405F',
      url: 'https://www.instagram.com/ronieuxjpg', 
      userhandle: ''
     },

    { name: 'LinkedIn', 
      acn: 'li',
      fill: '#E4405F', 
      url: 'https://www.linkedin.com/in/roniebenitez', 
      userhandle: '' },
  ];

  return (
      <main className="gap-3 flex flex-wrap w-full justify-center m-2">
        {socialMediaLinks.map((index) => (
          <div className='flex justify-evenly gap-5' key={index.acn}>
            <a
              href={index.url}
              className="uppercase text-black hover:text-sky-900 hover:underline"
              target="_blank"
              rel="noopener noreferrer">
              {index.acn} 
            </a>          
            {index !== socialMediaLinks.length - 1 ? 
              <span  key={index.acn} className='text-black'>/</span> : null}
          </div>
        ))} 
      </main>

  )
}

export default Socials