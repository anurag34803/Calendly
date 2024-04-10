import React, { useState} from 'react'
import MobileNavOpt from './MobileNavOpt'

function NavSidebarBtns() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
      setIsOpen(false);
    };

    return (
        <>
        {/* 3-icon button */}
        <div className="lg:hidden flex items-center">
            <button type="button" className="text-black" onClick={toggleSidebar}>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>

        <div className={`fixed inset-0 bg-gray-800 lg:hidden bg-opacity-75 z-50 ${isOpen ? '' : 'hidden'}`}>
            <div className="flex justify-between p-4 bg-white">
                <div className="logo h-10 w-40">
                     <img src="/logo.png" alt="no image" />
                </div>

                {/* Close button */}
                <button type="button" className="text-black " onClick={closeSidebar}>
                        {/* Close icon */}
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                </button>
            </div>  

            
            <MobileNavOpt></MobileNavOpt>
       </div>

        </>
    )
}

export default NavSidebarBtns;