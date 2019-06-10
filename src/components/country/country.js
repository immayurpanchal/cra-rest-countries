import React from 'react';
import './country.scss';

const Country = props => {
	return (
		<div className="card">
			<div className="card_flag">
				<img
					className="flag_img"
					src={props.flag}
					width="200px"
					height="150px"
					alt={props.flag}
				/>
			</div>
			<div>
				<div className="card-data">
					<span className="card_title">Name : </span>
					<span className="card_info">{props.name}</span>
				</div>
				<div className="card-data">
					<span className="card_title">Capital : </span>
					<span className="card_info">{props.capital}</span>
				</div>
			</div>
		</div>
	);
};

export default Country;
