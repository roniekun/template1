import React, { createContext, useState, useEffect, useContext} from "react";
const DataContext = createContext()

const DataProvider = ({ children  }) => {

    const [title, setTitle] = useState(document.title);
    const [isLoading, setLoading] = useState(true)
    const [isToggleMenu, setToggleMenu] = useState (false);
    const [isMobile, setMobile] = useState(window.innerWidth <= 600)
    const [isTablet, setTablet] = useState(window.innerWidth <= 1024)
    const pageTitle = 'Ronie Benitez'

        useEffect(() => {
            document.title = title
        }, [title])

        useEffect(() => {
                  const handleResize = () => {
                    setMobile(window.innerWidth <= 600)
                    setTablet(window.innerWidth <= 1024)
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
              pageTitle,
              title, setTitle,
              isLoading, setLoading, 
              isMobile, setMobile,
              isTablet, setTablet,
              setToggleMenu, isToggleMenu
              }}> 
              
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

// export const useStoredContext = () => { return useContext(DataContext)}