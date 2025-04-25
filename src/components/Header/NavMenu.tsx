import {  useEffect, useRef, useState } from 'react'
import NavItem from './NavItem'

interface NavMenuProps {
  isOpen: boolean
}

const items = ['Home', 'About', 'Contact', 'Blog', 'Careers']

export default function NavMenu({ isOpen }: NavMenuProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(isOpen)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuVisible(true)
      } else {
        setIsMenuVisible(isOpen)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  useEffect(() => {
    if (!isMenuVisible && navRef.current) {
      const activeElement = document.activeElement as HTMLElement
      if (navRef.current.contains(activeElement)) {
        activeElement.blur()
      }
    }
  })

  return (
    <nav
      ref={navRef}
      id="primary-navigation"
      role="menu"
      aria-hidden={!isMenuVisible}
      className={`${isMenuVisible ? 'block' : 'hidden'} absolute md:block md:static 
        w-full md:w-auto h-screen md:h-auto p-5 md:p-0 top-[60px] 
        bg-[#00000096] md:bg-transparent ml-[-20px] md:ml-0`}
    >
      <ul className="absolute md:relative w-[calc(100%-40px)] md:w-auto 
                     text-center text-lg md:text-base bg-white flex 
                     flex-col md:flex-row gap-2 md:gap-5 lg:gap-7 
                     rounded-sm py-4 text-custom-dark-blue md:text-custom-grayish-blue">
        {items.map(label => (
          <NavItem key={label} label={label} />
        ))}
      </ul>
    </nav>
  )
}
