import { useState } from "react";
import { logo, menu, close, cover } from "../assets";
import { navLinks } from "../constants";
import styles from "./style";


const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className=" container max-w-screen-6xl rounded-xl mx-auto px-2 sm:px-6 lg:px-8  mt-10 overflow-hidden relative z-0">
            <div className={`bg-gray-400 flex  justify-between rounded-2xl sm:items-stretch sm:justify-start h-screen  align-middle `} style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}
            >
                <h1 className="uppercase text-2xl text-blue-600 mx-10 my-4 px-8 font-poppins font-semibold">
                    nevan<span className="uppercase text-white text-2xl font-poppins font-semibold">game</span>
                </h1>
                {/* <img src={logo} alt="gtalogo" className="h-20 w-auto shrink-0 items-center justify-start" /> */}
                {/* desktop view */}
                <div className="relative flex h-16 items-center mx-4">
                    <ul
                        className={`${styles.ul} text-white md:p-0 mt-4 md:mt-0 border-0`}>
                        {
                            navLinks.map((nav, index) => (
                                <li key={nav.id} className={`${styles.list} text-gray-100  my-4 ${active === nav.title} ? "${styles.li_active} space-x-4  mx-4  font-semibold" : " ${styles.li_notactive} hover:bg-blue-500  " 
                                }  ${index === navLinks.length - 1 ? "mr-4" : "mr-10"}`}
                                    onClick={() => setActive(nav.title)}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* toggle the menu icon and close icon */}

        </nav>

    )
}


export default Navbar;