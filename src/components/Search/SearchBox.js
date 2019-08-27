import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const SearchBox = (props) => {
  let loader = <div className="loader" key={0}>Loading...</div>

  return (
    <div className="searchbox">
      <div className="searchbar">
        <input className="searchinput" type="text" />
        <button onClick={props.handleSearch}/>
      </div>
      <div className="searchmenu">
        {props.menu}
      </div>
      <div className="searchresults">
        <InfiniteScroll
          pageStart={0}
          loadMore={props.handleSearch}
          hasMore={props.hasMore}
          loader={loader}
          useWindow={false}
        >
          {props.searched}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default SearchBox;