import React from 'react'

const Search = (props: any) => {
  return (
    <section className="searchbox-wrap">
        <input className="searchbox" type="search" placeholder="Search for a move..." aria-label="Search"/>
    </section>
  );
}

export default Search;