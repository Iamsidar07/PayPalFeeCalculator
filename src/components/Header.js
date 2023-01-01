import React from "react";
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";

export default function Header({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#A555EC] ">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <p
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
                           
                        >
                            <Link to={"/"}>💆BMI (Body Mass Index)</Link>
                        </p>
                       
                        
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                            <IoReorderThreeOutline />
                            
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            
                            <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <Link to={"/about"}>About</Link>
                                </li>
                            <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <Link to={"/privacyandpolicy"}>Privacy and policy</Link>
                                </li>
                           
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}