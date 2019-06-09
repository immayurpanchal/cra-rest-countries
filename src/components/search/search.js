import React from 'react';
import './search.scss';

const Search = props => {
	return (
		<div className="search-header">
			<input type="text" className="searchbox" onChange={props.inputText} placeholder="Enter Country Name"/>
			<button className="btn-primary" onClick={props.fetchResult}>Search</button>
		</div>
	);
};

export default Search;
