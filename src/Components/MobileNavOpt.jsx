function MobileNavOpt() 
{
    return (
    <>
    {/* Sidebar content */}
    <div className="mob-nav flex flex-col items-start p-4 bg-white text-black">
       <a href="">Individual</a>
       <a href="">Teams</a>
       <a href="">Enterprice</a>
       <a href="">Product</a>
       <a href="">Pricing</a>
       <a href="">Resources</a>

       <div className='btns w-full md:flex'>
           <a href="" className='w-full md:mx-2'>
              <div className="login border border-black font-semibold text-md rounded-md py-1 my-2 flex justify-center items-center">Log In</div>
            </a>
     
            <a href="" className='w-full'>
               <div className="signup flex justify-center items-center text-md bg-sky-500/100 py-1 my-2 rounded-md text-white">Get Started</div>
            </a>
        </div> 
    </div>
    </>) 
}

export default MobileNavOpt