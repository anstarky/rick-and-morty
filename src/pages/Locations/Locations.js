import React, { Component } from 'react';

import Title from '../../components/Title';
import RadioButtonsGroup from '../../components/RadioButtonsGroup';
import InputForm from '../../components/InputForm';
import Pagination from '../../components/Pagination';
import LocationItem from './LocationItem';

import style from './Locations.module.css';

let filterName = '';

class Locations extends Component {
	state = {
		locations: [],
		params: {},
	};

	setLocations = locationObj => {
		this.setState({
			locations: locationObj,
		});
	};

	handleRadio = value => {
		filterName = value;
		if (value === '') {
			this.onFilter();
		}
	};

	onFilter = (filterKey, filterValue) => {
		if (filterValue === '') {
			this.setState({
				params: {},
			});
			return;
		}
		this.setState({
			params: {
				[filterName.toLowerCase()]: filterValue,
			},
		});
	};

	render() {
		const { locations, params } = this.state;

		return (
			<main>
				<Title />
				<section className={style.section_wrap}>
					<h2 className={style.section_title}>Locations</h2>

					<div className={style.input_wrap}>
						<div className={style.radio_wrap}>
							<RadioButtonsGroup onRadio={this.handleRadio} />
						</div>
						<InputForm
							filterName={filterName}
							onSave={this.onFilter}
						/>
					</div>

					<ul className={style.locations_wrap}>
						{locations ? (
							locations.map(location => (
								<li
									key={location.id}
									className={style.locations_card_li}
								>
									<LocationItem location={location} />
								</li>
							))
						) : (
							<p className={style.error}>Locations not found</p>
						)}
					</ul>
					<Pagination
						setStatePage={this.setLocations}
						pageName="location"
						params={params}
					/>
				</section>
			</main>
		);
	}
}

export default Locations;
