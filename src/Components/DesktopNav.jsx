function DesktopNav() {
    return (
        <>
        <div className="opt hidden lg:flex">
            <ul>
                <li><a href="">Individual</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Enterprice</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Resources</a></li>
            </ul>
        </div>

        <div className="oth-opt lg:flex hidden ">
            <div className="login mx-4 font-semibold text-lg">
                <a href="#">Login</a>
            </div>

            <div className="signup text-lg bg-sky-500/100 px-5 py-1 rounded-md text-white">
                <a href="">Signup</a>
            </div>
        </div>
        </>
    )
}

export default DesktopNav;