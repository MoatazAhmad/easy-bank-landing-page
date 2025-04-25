export interface ArticleCardProps {
  img: string,
  author: string
  h1Content: string,
  pContent: string
}

const ArticleCard = ({ img, author, h1Content, pContent }: ArticleCardProps) => {
  return (
    <div className="flex flex-col gap-3 items-start w-full ">
      <div className="img-container pb-5 rounded-lg overflow-hidden w-full h-1/2">
        <img src={img} className='h-full w-full object-cover' alt="" loading="lazy"/>
      </div>
      <div className="article-info flex flex-col items-start gap-2">
        <span className='text-[12px] text-custom-grayish-blue '>{author}</span>
        <h1 className="text-custom-dark-blue text-xl font-bold cursor-pointer hover:text-custom-lime-green duration-200">{h1Content}</h1>
        <p className='text-sm text-start  text-custom-grayish-blue w-[300px] md:w-[230px]'>{pContent}</p>
      </div>
    </div>
  )
}

export default ArticleCard


