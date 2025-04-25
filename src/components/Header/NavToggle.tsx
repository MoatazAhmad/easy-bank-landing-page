import { forwardRef } from 'react'
import CloseIcon from "../../assets/images/icon-close.svg"
import HamburgerIcon from "../../assets/images/icon-hamburger.svg"
interface NavToggleProps {
  isOpen: boolean
  onToggle: () => void
}

const NavToggle = forwardRef<HTMLButtonElement, NavToggleProps>(
  ({ isOpen, onToggle }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="w-5 h-5 cursor-pointer md:hidden"
      >
        <img
          src={isOpen ? CloseIcon : HamburgerIcon}
          alt=""
          className="w-full h-full"
          decoding="async"
        />
      </button>
    )
  }
)

export default NavToggle
