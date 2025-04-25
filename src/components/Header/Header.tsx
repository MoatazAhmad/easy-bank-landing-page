import { useState, useEffect, useRef } from 'react'
import Logo from "../../assets/images/logo.svg"
import Btn from '../Btn'
import NavToggle from './NavToggle'
import NavMenu from './NavMenu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <header className="flex justify-between bg-white p-5 md:items-center md:px-[5%] lg:px-[8%] z-10 relative">
      <img src={Logo} alt="Easybank logo" />
      <NavMenu isOpen={isOpen} />
      <NavToggle
        ref={toggleRef}
        isOpen={isOpen}
        onToggle={() => setIsOpen(o => !o)}
      />
      <Btn Text="Request Invite" classes="hidden md:block" />
    </header>
  )
}
