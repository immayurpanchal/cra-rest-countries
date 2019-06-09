import React, { Component } from 'react';
import Search from './components/search/search';
import Country from './components/country/country';
import './App.scss';

class App extends Component {
	state = {
		resultData: []
	};

	constructor() {
		super();
		this.queryData = '';
		this.countryName = '';
		this.countryCapital = '';
	}
	fetchResult = async () => {
		const country = this.queryData;
		// const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
		// const data = await response.json();
		fetch(`https://restcountries.eu/rest/v2/name/${country}`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.setState({ resultData: data });
			})
			.catch(e => {
				console.log(e);
			});
	};

	inputText = e => {
		this.queryData = e.target.value;
	};
	render() {
		return (
			<div className="App">
				<Search fetchResult={this.fetchResult} inputText={this.inputText} />
				<div className="country-list">
					{this.state.resultData.map(country => {
						return <Country name={country.name} capital={country.capital} flag={country.flag}/>;
					})}
				</div>
			</div>
		);
	}
}

export default App;
