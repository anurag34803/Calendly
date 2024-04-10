import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

function Navbar() {

    return ( <>
    <div className="navbar bg-white flex justify-between items-center w-full px-10 py-5  border-b border-inherit z-10 fixed">
        <div className="logo h-10 w-40">
            <img src="/logo.png" alt="no image" />
        </div>
         
        {/* This nav is for large screen */}
         <DesktopNav></DesktopNav>     

         {/* This nav is design for small Screen  */}
        <MobileNav></MobileNav>
    </div>
    
    </> )
}

export default Navbar