import Btn from './Btn'
import heroImgSm from "../assets/images/bg-intro-mobile.svg"
import heroImgLg from "../assets/images/bg-intro-desktop.svg"
import mockupsImg from "../assets/images/image-mockups.png"
const HeroSection = () => {
    return (
        <section aria-labelledby="hero-heading" className='bg-[#FAFAFA] flex flex-col-reverse md:flex-row md:justify-center md:items-center pb-10'>
            <div className="hero-text flex items-center flex-col gap-10 md:ml-[5%] lg:ml-[8%] text-center md:text-left md:items-start">
                <h1 id="hero-heading" className='text-4xl  font-normal text-custom-dark-blue'>Next generation digital banking </h1>
                <p className='text-sm  text-custom-grayish-blue  w-[300px]'>Take your financial life online. Your Easybank
                    account will be a one-stop-shop for spending,
                    saving, budgeting, investing, and much more.
                </p>
                <Btn Text='Request Invite' />
            </div>
            <div className="images-container relative overflow-hidden">
                <picture className='w-full'>
                    <source
                        media="(min-width: 800px)"
                        srcSet={heroImgLg}
                    />
                    <source
                        media="(max-width: 799px)"
                        srcSet={heroImgSm}
                    />
                    <img
                        src={heroImgLg}
                        className='min-w-full md:relative md:-top-[100px] md:-right-[100px] '
                        alt="Art-directed image"
                        decoding='async'
                    />
                </picture>
                <img src={mockupsImg} className='absolute top-[-32%] md:top-[-20%] md:right-[-100px]' alt="Mockup showing Easybank app screens on mobile device and desktop display" />

            </div>
        </section>
    )
}

export default HeroSection