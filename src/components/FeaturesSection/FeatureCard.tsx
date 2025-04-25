export interface FeatureCardProps {
  img: string,
  h1Content: string,
  pContent: string
}
const FeatureCard = ({ img, h1Content, pContent }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-3 text-center items-center md:items-start ">
      <div className="img-container pb-5">
        <img src={img} alt={`ilastruction image for ${h1Content} feature`} loading="lazy" />
      </div>
      <h1 className="text-custom-dark-blue">{h1Content}</h1>
      <p className='text-sm text-center md:text-start  text-custom-grayish-blue w-[300px] md:w-[230px]'>{pContent}</p>
    </div>
  )
}

export default FeatureCard