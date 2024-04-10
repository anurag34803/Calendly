import { FaArrowRight } from "react-icons/fa";

function ArticleCard({bgcol}) {

    return(
        <>
        <div style= { (bgcol == undefined) ? {backgroundColor: "white"}  :  {backgroundColor: bgcol, color : "white"} } 
            className="card h-96 w-80 border-neutral-100 my-4 rounded-xl p-4 shadow-2xl border-inherit">
            
            <div className="rounded-full border-2 py-1 text-sm w-28 text-center " 
            style= {(bgcol == undefined) ? {borderColor: "#046bff", color:"#046bff"}  :  {borderColor : "white"} }>WHAT'S NEW</div>
            
            <h1 className="text-lg mt-4 font-semibold"> Introducing Routing Forms : Screen and quality people before they book with you</h1>
            <div className="readTime mb-4 text-sm font-semibold"
            style= {(bgcol == undefined) ? {Color: "black"}  :  {Color : "white"} }>READ TIME : 6 minutes</div>

            <p className="font-semibold">Ask site visitor questions to automatically present scheduling options based on their answers.</p>
            <div className='flex my-6'>
                       <span className="font-semibold">Read the article</span>
                       <span className="bg-white mx-3 rounded-full text-black w-8 h-8 flex justify-center items-center" 
                       style= { (bgcol == undefined) ? {backgroundColor: "black" , color: "white"}  :  {backgroundColor: "white" , color: "black"}}>
                       <a href=""><FaArrowRight /></a></span>
            </div>
        </div>
        </>
    )
}

export default ArticleCard;