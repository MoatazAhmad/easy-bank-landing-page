import FeatureCard, { FeatureCardProps } from './FeatureCard'

const FeaturesSection = ({ featuresData }: { featuresData: FeatureCardProps[] }) => {
    return (
        <section 
        className='flex  items-center md:items-start md:px-[5%] lg:px-[8%] text-center md:text-start flex-col gap-5 bg-[#F3F4F6] py-10 md:py-20' 
        aria-labelledby="features-heading">
            <h1 id="features-heading" className='text-3xl  font-normal text-custom-dark-blue'>Why choose Easybank?</h1>
            <p className='text-sm text-custom-grayish-blue w-[300px] md:w-auto'>
                We leverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.
            </p>
            <div className="features-container flex flex-row flex-wrap justify-center lg:justify-start gap-10 md:gap-5 pt-5">
                {featuresData.map((item, index) => <FeatureCard key={index} {...item} />)}
            </div>
        </section>
    )
}

export default FeaturesSection