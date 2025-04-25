import ArticleCard, { ArticleCardProps } from './ArticleCard'



const ArticlesSection = ({ articlesData }: { articlesData: ArticleCardProps[] }) => {
    return (
        <section
            className='flex  items-center md:items-start md:px-[5%] lg:px-[8%] text-center md:text-start flex-col gap-5 bg-[#F3F4F6] py-10 md:py-20'
            aria-labelledby="articles-heading"
        >
            <h1 id='articles-heading' className='text-3xl  font-normal text-custom-dark-blue'>Latest Articles</h1>
            <div className="articles-container flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-10 md:gap-5 p-5 md:p-0 w-full">
                {articlesData.map((item, index) => <ArticleCard key={index} {...item} />)}
            </div>
        </section>
    )
}

export default ArticlesSection