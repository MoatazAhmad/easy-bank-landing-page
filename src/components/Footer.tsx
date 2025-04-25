import Btn from './Btn'
import Logo from "../assets/images/logo-white.svg"
import youtubeIcon from "../assets/images/icon-youtube.svg"
import facebookIcon from "../assets/images/icon-facebook.svg"
import twitterIcon from "../assets/images/icon-twitter.svg"
import pinterestIcon from "../assets/images/icon-pinterest.svg"
import instagramIcon from "../assets/images/icon-instagram.svg"

const Footer = () => {
  return (
    <>
      <footer className='bg-custom-dark-blue text-white pt-8 pb-18 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-around  '>
        <div className='flex flex-col gap-6 items-center md:items-start md:gap-9'>
          <div className="img-container">
            <img src={Logo} alt="easybank logo" />
          </div>
          <ul className='flex justify-center items-center gap-5'>
            <li>
              <a href="#">
                <img src={facebookIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtubeIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitterIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterestIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-4 md:mt-0 flex flex-col md:flex-row gap-2 md:gap-15 text-center md:text-start'>
          <ul
            className='flex flex-col gap-2 '
          >
            <li className='cursor-pointer hover:text-custom-lime-green duration-200'>
              <a href="#">
                About us
              </a>
            </li>
            <li className='cursor-pointer hover:text-custom-lime-green duration-200'>
              <a href="#">
                Contact
              </a>
            </li>
            <li className='cursor-pointer hover:text-custom-lime-green duration-200'>
              <a href="#">
                Blog
              </a>
            </li>
          </ul>
          <ul
            className='flex flex-col gap-2 '
          >
            <li className='cursor-pointer hover:text-custom-lime-green duration-200'>
              <a href="#">
                Careers
              </a>
            </li>
            <li className='cursor-pointer hover:text-custom-lime-green duration-200'>
              <a href="#">
                Support
              </a>
            </li>
            <li className='cursor-pointer hover:text-custom-lime-green duration-200'>
              <a href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-8 mt-8 md:mt-0 md:items-end '>
          <Btn Text='Request Invite' classes='md:max-w-52' />
          <span className='text-custom-grayish-blue'>© EasyBank. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default Footer