import React from 'react'

interface NavItemProps {
  label: string
}

export default React.memo(function NavItem({ label }: NavItemProps) {
  return (
    <li role="none"
     className='cursor-pointer relative after:absolute after:bottom-[-20px] after:left-0 after:h-[5px] after:w-0 after:bg-[linear-gradient(90deg,_rgba(49,_211,_92,_1)_0%,_rgba(43,_183,_219,_1)_100%)] after:transition-[width] after:duration-200 hover:after:w-full '
    >
      <a href="#" role="menuitem" >
        {label}
      </a>
    </li>
  )
})