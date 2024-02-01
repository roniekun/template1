import React, { createContext, useState, useEffect, useContext} from "react";
const DataContext = createContext()

const DataProvider = ({ children  }) => {

    const [title, setTitle] = useState(document.title);
    const [isLoading, setLoading] = useState(true)
    const [isToggleMenu, setToggleMenu] = useState (false)
    const [isScrolled, setScrolled] = useState (false)
    const [currentScroll, setCurrentScroll] = useState(0)
    const [isMobile, setMobile] = useState(window.innerWidth >= 640)
    const [isTablet, setTablet] = useState(window.innerWidth >= 768)
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024)

    const user = {
      title: 'Ronie Benitez',
      name: 'Ronie Benitez',
      email: 'roniebenitez01@gmail.com',
      subject: 'Project Request'
    }
    //dynamic document title
        useEffect(() => {
            document.title = title
        }, [title])

      //scrolling listener
        useEffect(() => {
          const handleScroll = () => {
              setScrolled(window.scrollY > currentScroll)
              setCurrentScroll(window.scrollY)     
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
           window.removeEventListener('scroll', handleScroll)
          }
        }, [window.scrollY])
        

      // responsive screen size
        useEffect(() => {
                  const handleResize = () => {
                    setMobile(window.innerWidth >= 640)
                    setTablet(window.innerWidth >= 768)
                    setDesktop(window.innerWidth >= 10244)
                }

                handleResize();

                window.addEventListener('resize', handleResize);

          return () => {
                window.removeEventListener('resize', handleResize)
          }
        }, [])
        
  return (
    <DataContext.Provider 
      value={{
              user,
              title, setTitle,
              isLoading, setLoading, 
              isScrolled,
              isMobile, setMobile,
              isTablet, setTablet,
              isDesktop, setDesktop,
              setToggleMenu, isToggleMenu
              }}> 
              
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

// export const useStoredContext = () => { return useContext(DataContext)}