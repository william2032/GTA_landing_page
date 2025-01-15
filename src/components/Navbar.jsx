import { useState } from "react";
import { logo, menu, close, cover } from "../assets";
import { navLinks } from "../constants";
import Hero from "./Hero";

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="   max-w-screen-xl max-h-80  mx-auto mt-10   relative overflow-hidden">
            <div className={`container text-white  bg-contain  h-screen`} style={{
                backgroundImage: `url(${cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}
            >
                <div className=" h-20 items-center  bg-transparent flex flex-row justify-between mx-auto text-pretty font-semibold">

                    <div className="flex flex-1 items-center justify-start ">
                        <img src={logo} alt="gtalogo" className=" sm:h-14  h-20 w-auto   mx-4 mt-6 rounded" />

                        <h1 className="uppercase text-2xl  font-poppins md:text-4xl  justify-between my-auto  ">
                            nevan<span className="uppercase text-2xl  md:text-4xl font-poppins  text-blue-400">game</span>
                        </h1>
                    </div>


                    {/* desktop view */}
                    <ul
                        className={`hidden text-white   md:flex flex-row justify-between mx-2 space-x-2 `}>
                        {
                            navLinks.map((nav, index) => (
                                <li key={nav.id} className={` text-dimWhite  py-4 px-4  font-semibold ${active === nav.title} ? "  mx-4 font-semibold  " : "  hover:text-gray-700  " 
                                }  ${index === navLinks.length - 1 ? "mr-4" : "mr-2"}`}
                                    onClick={() => setActive(nav.title)}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))
                        }
                    </ul>

                    {/* toggle the menu icon and close icon */}
                    <button className=" md:hidden  rounded-lg  sticky  items-center mt-10 text-sm   z-10">
                        <img src={toggle ? close : menu} alt="menuicon" className="h-4 w-6 object-contain"
                            onClick={() => setToggle(!toggle)} />
                    </button>
                    {/* mobile view */}
                    <div className={` ${!toggle ? "hidden" : "flex"} flex-col absolute top-6   left-1/2 mt-6 bg-gray-400  w-full overflow-hidden`}>
                        <ul
                            className={`md:hidden text-white `}>
                            {
                                navLinks.map((nav, index) => (
                                    <li key={nav.id} className={` text-dimWhite  space-y-2 py-4   font-semibold ${active === nav.title} ? "  mx-4 font-semibold  " : "  hover:text-gray-700  " 
                                }  ${index === navLinks.length - 1 ? "mt-0" : "mt-"}`}
                                        onClick={() => setActive(nav.title)}>
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
                {/* hero section */}
                <div className=" container absolute  bg-transparent overflow-hidden min-h-screen  max-w-3xl top-1/2  px-5 mx-5">
                    <Hero />
                </div>
            </div>
        </nav>

    )
}


export default Navbar;