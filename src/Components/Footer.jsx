import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import FooterCards from "./FooterCards";

function Footer() {
    const data = [
      {
        title: 'About',
        subtitle: ["About Calendly", "Contact Sales", "Newsroom", "Careers", "Security"],
        links: []
      },

      {
        title: 'Solutions',
        subtitle: ["Customer Sucess", "Sales", "Recuriting", "Information Technology", "Marketing"],
        links: []
      },

      {
        title: 'Popular Features',
        subtitle: ["Embed Calendly", "Availability", "Sending Notifications", "Using Calendly Mobile"],
        links: []
      },

      {
        title: 'Support',
        subtitle: ["Help Center", "Video Tutorials"],
        links: []
      },

      {
        title: 'Add-Ons',
        subtitle: ["Download for Chrome", "Download for Firefox"],
        links: []
      },

      {
        title: 'Developers',
        subtitle: ["Developers Tools"],
        links: []
      }
    ];

    return (
        <>
         <div className="footer grid xl:grid-cols-3 lg:grid-cols-3  p-8">
            <div className="left">
               <h1 className="text-4xl font-bold">Easy</h1>
               <h1 className="text-4xl font-bold text-[#046bff]">ahead</h1>
               <p className="my-4">We take the work out of connecting with <br /> others to you can accompolish more.</p>

               <div className="buttons flex my-12"> 
                 <a href="" className="app-store-button">
                   <div className=" flex items-center rounded-md px-3 py-1 bg-black text-white">
                       <span className="text-3xl"><FaApple /></span>
                       <div style={{ lineHeight: '1', margin: "1px 5px"}}>
                         <span className="small-text">Download on the</span> <br />
                         <span className="btns-text">App Store</span>
                       </div>
                    </div>
                </a>
                
                <a href="" className="play-store-button mx-2">
                   <div className=" flex items-center rounded-md px-3 py-1 bg-black text-white">
                       <span className="text-2xl"><FaGooglePlay /></span>
                       <div style={{ lineHeight: '1', margin: "1px 5px"}}>
                         <span className="small-text">GET IT ON</span> <br />
                         <span className="btns-text">Play Store</span>
                       </div>
                    </div>
                </a>

               </div>

               <div className="social-buttons flex my-10 text-2xl">
                  <a href=""><FaTwitter /></a>
                  <a href=""><FaFacebookF /></a>
                  <a href=""><FaInstagram /></a>
                  <a href=""><FaLinkedinIn /></a>
                  <a href=""><AiOutlineYoutube /></a>
               </div>
            </div>
             
             <div className="right col-span-2">
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                <FooterCards data={data[0]}></FooterCards>
                <FooterCards data={data[1]}></FooterCards>
                <FooterCards data={data[2]}></FooterCards>
                <FooterCards data={data[3]}></FooterCards>
                <FooterCards data={data[4]}></FooterCards>
                <FooterCards data={data[5]}></FooterCards>   
               </div>
             </div>
            
         </div>
        </>
    )
}

export default Footer;