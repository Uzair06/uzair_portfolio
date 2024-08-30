import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from "../constants"
import { FaBars } from 'react-icons/fa6'

export const Navbar = () => {
    const [isMobileMenuOpen,setisMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e,href) => {
        e.preventDefault();//Prevents the default behavior of the link, which is usually to jump directly to the anchor target.
        const targetElement = document.querySelector(href);//Uses the href value to select the target element on the page.
        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top:offsetPosition,
                behaviour: "smooth",
            })
        }
//         if(targetElement): Checks if the target element exists.
// const offset = -85;: Defines an offset value to adjust the final scroll position, likely to account for fixed headers.
// const elementPosition = targetElement.getBoundingClientRect().top;: Gets the position of the target element relative to the viewport.
// const offsetPosition = elementPosition + window.scrollY + offset;: Calculates the final scroll position by combining the element's position, the current scroll position, and the offset.
// window.scrollTo({ top: offsetPosition, behaviour: "smooth" }): Smoothly scrolls to the calculated position.
        setisMobileMenuOpen(false);
    }

  return (
    <div>
        <nav className='fixed left-0 right-0 top-4 z-50'>
           {/* Desktop Menu*/}
           <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex'>
           <div className='flex justify-between gap-6'>
            {/* <div>
                <a href='#'>
                    <img src={logo} width={90} alt='logo' />
                </a>
            </div> */}
            <div>
                <ul className='flex items-center gap-4'>
                    {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index}>
                            <a className='text-sm hover:text-yellow-400' href='item.href'
                            onClick={(e) => handleLinkClick(e,  item.href)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
           </div>
           </div>
           {/*Mobile Menu*/}
           <div className='rounded-lg backdrop:blur-md lg:hidden'>
            <div className='flex items-center justify-between'>
                {/* <div>
                    <a href='#'>
                        <img src={logo} width={90} alt='logo' className='m-2' />
                    </a>
                </div> */}
                <div className='flex items-center'>
                    <button className='focus:outline-none lg:hidden'
                    onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <FaTimes className='m-2 h-6 w-5' />
                        ):(
                            <FaBars className='m-2 h-6 w-5'/>
                        )}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                    {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index}>
                            <a className='block w-full text-xl font-semibold' href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                {item.label}
                            </a>
                        </li>
                    ) )}
                </ul>
            )}
           </div>
        </nav>
    </div>
  )
}
 export default Navbar;