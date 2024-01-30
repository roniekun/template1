import React from 'react'

const Socials = () => {

const socialMediaLinks = [

    { name: 'Github', 
      fill: '#E4405F', 
      url: 'https://www.github.com/roniekun',
      userhandle: '' 
    },

    { name: 'Facebook',
      fill: '#1877F2', 
      url: 'https://www.facebook.com/ronieuxjpg', 
      userhandle: '' 
    },

    { name: 'Instagram', 
      fill: '#E4405F',
      url: 'https://www.instagram.com/ronieuxjpg', 
      userhandle: ''
     },

    { name: 'LinkedIn', 
      fill: '#E4405F', 
      url: 'https://www.linkedin.com/in/roniebenitez', 
      userhandle: '' },
  ];

  return (
            <main className="gap-3 flex flex-wrap justify-center m-2">
            {socialMediaLinks.map((link,index) => (
              <>
                <a
                  href={link.url}
                  key={link.name}
                  className="capitalize text-black hover:text-sky-900 hover:underline "
                  target="_blank"
                  rel="noopener noreferrer">
                  {link.name} 
                </a>          
                  {index !== socialMediaLinks.length - 1? 
                  <span key={index} className='text-black'>/</span> : null}
                </>
            ))} 
         </main>
  )
}

export default Socials