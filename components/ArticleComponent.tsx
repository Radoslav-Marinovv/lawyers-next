import React from 'react'
type Props = {
  articleId?: string;
  heading?: string[];
  paragraph?: string[];
  list?: string[];
  topPicture?: string;
  bottomPicture?: string;
}
const ArticleComponent = ({ articleId, heading, list, paragraph, topPicture, bottomPicture }: Props) => {
  return (
    <div className='flex flex-col h-full w-full text-justify'>
      <article>
        {topPicture && <div className={`w-full ${topPicture} background-parallax blur-none`}></div>}
        <div
          id={articleId}
          className='p-4 max-w-4xl self-center m-auto'
        >
          {heading?.map((h: string) => (
            <h2 className='text-center'>
              {h}
            </h2>
          ))}
          <div className='text-lg font-medium p-2'>
            {paragraph?.map((p: string) => (
              <p className='indent-10 p-2'>
                {p}
              </p>
            ))}
            {list?.map((li: string) => (
              <div className='font-bold px-8 py-2'>
                <ul className='leading-normal list-disc'>
                  <li>
                    {li}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        {bottomPicture && <div className={`w-full ${bottomPicture} background-parallax blur-none`}></div>}
      </article>
    </div>
  )
}

export default ArticleComponent