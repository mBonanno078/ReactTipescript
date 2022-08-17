import React, { useState } from 'react'
import './PostWordpress.scss';
import useFetchData from '../../hooks/useFetchData';

const PostWordpress = () => {
  const [loadMore, setLoadmore] = useState<number>(10);
  const url: string = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${loadMore}&context=embed`;
  const {data, lodiang} = useFetchData(url);

  const loadMorePost = (oldValue : number) => {
    setLoadmore(oldValue + 10);
  }
  
  return (
   <section className="container-section-post">
    <h1 className="title-section">
      latest news
    </h1>
    <div className="content-posts">
      {Object.values(data).map((el: any) => {
        const {id, excerpt, link, parsely, title} = el;
        const {image, creator, datePublished} = parsely.meta;

          return(
            <article className="post-news" key={id}>
              <div className="content-article">
                <a href={link} className="link-post">
                  <div className="content-image">
                    <img src={image.url} 
                        alt={title.rendered} 
                        className="image-article"
                    />
                  </div>
                  <div className="content-meta">
                    <span className="author">
                      {creator}&nbsp;
                      <i className='date'>
                      - {datePublished.split('T')[0]}
                      </i>
                    </span>
                  </div>
                  <div className="content-title">
                    <h2 className="title first-letter">
                      {title.rendered.replace(/[^a-zA-Z ]/g, "")}
                    </h2>
                  </div>
                  <p className="description first-letter">
                    {excerpt.rendered.replace( /(<([^>]+)>)/ig, '').replace(/[^a-zA-Z ]/g, "")}
                  </p>
                </a>
              </div>
            </article>
          );
        })
      }
    </div>
    <div className="conten-button-load-more">
      <button className="btn" onClick={() => loadMorePost(loadMore)}>
        {lodiang ? 'loading...' :  'load more'}
      </button>
    </div>
   </section>
  )
}

export default PostWordpress