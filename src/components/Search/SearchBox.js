import React from 'react';
import SearchResults from './SearchResults';
import Message from '../Message/Message'
// import InfiniteScroll from 'react-infinite-scroller';

var resultsStyle = {
  height: 'auto',
  position: 'relative',
  ':hover': {
    background: 'white',
    width: '500px',
    height: '600px'
  }
}

// const messageStyle = {
//   zIndex: 10, 
//   position: 'relative',
//   background: 'white',
//   width: '500px'
// }

const SearchBox = (props) => {
  // let loader = <div className="loader" key={0}>Loading...</div>
  console.log("TEST", props.searched)
  return (
    <div id="searchbox">
      <div className="searchbar">
        <input 
          onChange={props.handleChange} 
          id="search" 
          className="searchinput" 
          type="text" 
        />
        <button onClick={props.handleSearch} >Search</button>
      </div>
      <div className="searchmenu">
        {/* {props.menu} */}
      </div>
      <div 
        id="searchresults" 
        style={resultsStyle}
      >
        {props.searched.map((msg, i) => {
          if (props.open) {
            return (
              <SearchResults msg={msg} key={i} />
              // <Message message={msg} style={messageStyle}/>
            )
          } else {
            return('')
          }
        })}
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={props.handleSearch}
          hasMore={props.hasMore}
          loader={loader}
          useWindow={false}
        >
          {props.searched}
        </InfiniteScroll> */}
      </div>
    </div>
  )
}

export default SearchBox;