import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({urls}) => {
  const urlEls = urls.map(url => {
    return (
      <div className="url" key={url.id}>
        <h3 className='card-title'>{url.title}</h3>
        <a className='link' href={url.short_url} target="blank">{url.short_url}</a>
        <p className='long-url'>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
