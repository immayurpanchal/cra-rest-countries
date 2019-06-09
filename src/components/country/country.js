import React from 'react';
import './country.scss';

const Country = props => {
	return (
		<div className="card">
			<div >
				<img
					className="card-flag"
					src={props.flag}
					width="200px"
					height="150px"
					alt={props.flag}
				/>
			</div>
			<div>
				<h1 className="card-title">Name : </h1> <b>{props.name}</b>
				<h4 className="card-description">Capital : </h4><b>{props.capital}</b>
			</div>
		</div>
	);
};

export default Country;
