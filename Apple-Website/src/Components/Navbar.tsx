import { useEffect, useRef, useState } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { gsap } from 'gsap';

function Navbar() {
    // ! Styling need fix
    // ! State Managment need fix
    // ! Refactor it 0/5
    // ! Anmation + gsap 
    // ! Burger Menu Need fix

    const searchInputRef = useRef<HTMLInputElement>(null);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    const styleHeader = "static w-full py-7 px-5 flex items-center justify-between sm:px-10";
    const styleNav = " sticky flex w-full max-w-screen-lg mx-auto items-center ";
    const styleNavItems = "flex flex-1 justify-center gap-5 max-sm:hidden sm:flex";
    const styleSearchMenu = "flex items-center gap-3 max-sm:justify-end max-sm:flex-1 max-sm:pr-3 ";

    const handleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
        setIsToggle(!isToggle);
    };

    const openSearch = () => {
        setIsSearch(!isSearch);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsBurgerMenuOpen(false);
                setIsToggle(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isSearch && searchInputRef.current) {
            gsap.fromTo(
                searchInputRef.current,
                {
                  width: 0,
                  
                  opacity: 0,
                  scale: 0.8,
                },
                {
                  width: '15rem',
                  height: '2rem',
                  paddingLeft: 3,
                  opacity: 1,
                  scale: 1,
                  ease: 'power2.out',
                  transition:1,
                 delay: 0.2, // Slight delay before starting the animation
                  onComplete: () => {
                    // Optional: Add a callback function to execute once the animation completes
                    console.log('Animation completed');
                  },
                }
              );            searchInputRef.current.focus();
        } else if (searchInputRef.current) {
            gsap.to(searchInputRef.current, { width: 0, ease:"power2.inOut", transition:1});
        }
    }, [isSearch]);
        
    return (
        <header className={styleHeader}>
            <nav className={styleNav}>
                <div className="flex items-center">
                    <img className='cursor-pointer' src={appleImg} alt="apple logo" width={14} height={18} />
                </div>

                <div className={styleNavItems}>
                    {navLists.map((nav, index) => (
                        <div key={index} className="px-5 text-sm cursor-pointer text-gray-700 hover:text-white transition-all">
                            {nav}
                        </div>
                    ))}
                </div>

                <div className={styleSearchMenu}>
                    <img onClick={openSearch} className='cursor-pointer' src={searchImg} alt="search icon" width={14} height={18} />
                    {isSearch && (
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search"
                            className="text-gray-50 border-b border-gray-50 border-opacity-90  rounded-md focus:outline-none focus:border-blue-500 bg-transparent "
                        />
                    )}
                    <img className='cursor-pointer max-sm:hidden' src={bagImg} alt="bag icon" width={14} height={18} />

                    <div className="z-30 flex flex-col relative items-baseline justify-around w-6 h-6 cursor-pointer lg:hidden md:hidden" onClick={handleBurgerMenu}>
                        <div className={`absolute top-1/4 left-1/2 w-full h-[2px] bg-gray-50 rounded transition-all ${isToggle ? '!top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45' : ''}`}></div>
                        <div className={`absolute top-3/4 left-1/2 w-full h-[2px] bg-gray-50 rounded transition-all ${isToggle ? '!top-2/4 -translate-x-1/2 -translate-y-1/2 -rotate-45' : ''}`}></div>
                    </div>
                </div>
            </nav>

            {isBurgerMenuOpen && (
                <div className="sm:hidden  flex flex-col items-left bg-black w-full p-10 absolute left-0 right-0 top-0 h-screen z-20 transition-all">
                    {navLists.map((nav, index) => (
                        <div key={index} className="px-5 py-2 text-sm cursor-pointer text-white hover:text-gray-800 transition-all">
                            {nav}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Navbar;
