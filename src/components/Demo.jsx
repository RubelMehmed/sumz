import { useState } from 'react'
import { linkIcon } from '../assets'

import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {
  const [article, setArticle] = useState({url: '', summery: '',})

// const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data } = await getSummary({ articleUrl: article.url})
    if(data?.summary) {
      const newArticle = { ...article, summary:data.summary}
      setArticle(newArticle)

      console.log('newArticle', newArticle)
    }
  }

  return (
    <>
    <section>
      <div className='flex flex-col w-full gapo-2'>
        <form className='relative flex justify-center items-center'
        onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt='link_icon'
            className='absolute left-0 my-2 mlo-3 w-5'
          />
          <input 
            type='url'
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setArticle({...article, url:e.target.value})}
            required
            className='url_input peer'
          />

          <button 
          type='submit'
          className='submit_btn peer-focus:border_grey-700 peer-focus:text-grey-700'
          >

          </button>
        </form>
        {/* Browse URL Hoistory */}
      </div>
      {/* Display Results */}
    </section>
    </>
  )
}

export default Demo