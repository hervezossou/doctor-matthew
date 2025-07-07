import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";
import { useState } from "react";

export default function Header () {
    const  [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-transparent backdrop-blur-3xl md:px-8 lg:px-16 xl:px-[180px] xl:py-4">
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-40">
                <div className="hidden h-[49px] max-w-4xl lg:flex lg:items-center lg:justify-center lg:gap-20">
                    <a href="/" className="flex items-center justify-center pb-6">
                        <img src="/logo.svg" alt="brand logo" />
                    </a>
                    <nav className="flex items-center justify-between py-4">
                        <div className="hidden lg:flex lg:items-center lg:justify-between">
                            <NavLink href="/" className="hover:text-primary-blue">Home</NavLink>
                            <NavLink href="#about" className="hover:text-primary-blue">About</NavLink>
                            <NavLink href="#services" className="hover:text-primary-blue">Services</NavLink>
                            <NavLink href="#contact" className="hover:text-primary-blue">Contact</NavLink>
                        </div>
                    </nav>
                </div>
                <Button 
                    icon="/icons/message-icon.png" 
                    label="Book Now" 
                    variant="primary"
                />
            </div>
            <div className="sticky top-0 z-50 flex w-full items-center justify-between border border-b-2 bg-alice-blue px-10 py-2 lg:hidden">
                <a href="/" className="flex items-center justify-center pb-6">
                    <img src="/logo.svg" alt="brand logo" />
                </a>
                <div 
                    className="flex items-center justify-center rounded-xl bg-alice-blue p-2 drop-shadow transition-all duration-300 hover:size-auto hover:cursor-pointer hover:bg-blue-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 
                        <img 
                            src="/icons/close-menu.svg" 
                            alt="close menu icon"
                        /> : 
                        <img 
                            src="/icons/open-menu.svg" 
                            alt="open menu icon" 
                        />
                    }
                </div>
            </div>
            {isOpen && (
                // eslint-disable-next-line tailwindcss/enforces-shorthand
                <div className="absolute left-0 top-28 z-50 w-full bg-alice-blue px-10 py-10 drop-shadow-md lg:hidden">
                    <nav className="flex flex-col items-start justify-between gap-4">
                        <a 
                            href="/" 
                            className="h-auto w-full rounded-md bg-gray-200 px-8 py-2 text-base text-black hover:bg-blue-100 hover:text-pure-blue"
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className="h-auto w-full rounded-md bg-gray-200 px-8 py-2 text-base text-black hover:bg-blue-100 hover:text-pure-blue"
                        >
                            About
                        </a>
                        <a 
                            href="#services" 
                            className="h-auto w-full rounded-md bg-gray-200 px-8 py-2 text-base text-black hover:bg-blue-100 hover:text-pure-blue"
                        >
                            Services
                        </a>
                        <a 
                            href="#contact" 
                            className="h-auto w-full rounded-md bg-gray-200 px-8 py-2 text-base text-black hover:bg-blue-100 hover:text-pure-blue"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
} 