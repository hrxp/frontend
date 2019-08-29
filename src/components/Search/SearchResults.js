import React from 'react'

const SearchResults = (props) => {
  const { displayName, profilePhoto } = props.msg.createdBy;
  const { ts, text } = props.msg;
  return (
    <div className='searchresults' 
      style={{ 
        zIndex: 10, 
        position: 'relative',
        background: 'white',
        width: '500px'
      }}>
        <img src={profilePhoto} 
          className="message__photo"
          alt="pfp"
        />
        <div className="message__info">
          <div className="message__info__user">{displayName} </div>
          <div className="message__info__time">{ts}</div>
        </div>
        <div className="search__text">{text}</div>
      
    </div>
  )
}

export default SearchResults;