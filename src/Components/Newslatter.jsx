function Newsletter() {
    return(
    <>
    <div className="bg-[#0b3558] flex flex-wrap w-full  justify-center lg:justify-between align-center p-10">
        <div className="left  text-white">
            <p>STAY TUNED</p>
            <h1 className="text-4xl my-4 font-bold">Subscribe to <br /> the newsletter</h1>
            <p>Submit your email, and once a month we'll send you our <br /> best time-saving articles, videos and othger resources.</p>
        </div>

        <div className="right bg-white rounded-md p-8 mt-8 lg:mt-0" >
            <form action="">
                <div className="names flex">
                  <div className="inputs">
                     <label htmlFor="fstname">First Name</label><br />
                     <input id="fstname" type="text" placeholder="First Name" className="border border-slate-200 p-2"/>
                  </div>  
                
                  <div className="mx-2 inputs">
                    <label htmlFor="lstname">Last Name</label><br />
                    <input id="lstname" type="text" placeholder="Last Name" className="border border-slate-200 p-2"/>
                  </div>
                
                </div>

                <div className="mt-4">
                <label htmlFor="email">Email</label><br />
                <input id="email" type="text" placeholder="Enter your email address" className="border border-slate-200 p-2 w-full"/>
                </div>
                
                <button className="w-full text-white bg-[#046bff] rounded-full py-2 my-5">Submit</button>
            </form>
        </div>
    </div>
    </>
    )
}

export default Newsletter