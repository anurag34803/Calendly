import { FaArrowRight } from "react-icons/fa";

function Banner()
{
    return (
        <>
         <div className='banner  px-10 py-5 pt-24'>
            <h2 className="text-center text-4xl font-bold m-8">The Calendly Blog</h2>
            
            <div className="banner-opt flex md:justify-center w-full m-3 overflow-x-auto justify-start">
                <a href="">ALL</a>
                <a href="">WHATS'NEW</a>
                <a href="">SALES</a>
                <a href="">RECRUITING</a>
                <a href="">PRODUCTIVITY</a>
                <a href="">CREATING CALENDLY</a>
            </div>

            <div className="banner flex item-center justify-center flex-wrap lg:flex-nowrap md:m-5">
                <div className="img h-80 w-full lg:w-6/12 min-width md:mr-12 ">
                <img src="/TimeEconomy.png"  className= "h-full w-full" alt="" />
                </div>
                 
                <div className="right flex flex-col justify-center mt-8">
                   <h6 className='bg-gray'>WHATS NEW</h6>
                   <h1 className="font-bold text-2xl sm:text-3xl my-4">Welcome to the Time Economy</h1>
                   <p>Our most precious resources is time - and the next decade will be
                      defined by how we manage it.
                   </p>

                   <div className='flex my-6'>
                       <span>Read the article</span>
                       <span className="bg-black mx-3 rounded-full text-white w-8 h-8 flex justify-center items-center" ><a href=""><FaArrowRight /></a></span>
                   </div>
                </div>
                
            </div>
         </div>
        </>
    )
}

export default Banner;