import React, { Component } from 'react';

import Title from '../../components/Title';
import FilterSelect from '../../components/FilterSelect';
import Pagination from '../../components/Pagination';
import CharacterItem from './CharacterItem';

import style from './Characters.module.css';

const filterName = {
	STATUS: 'Status',
	GENDER: 'Gender',
	SPECIES: 'Species',
};

const filterListStatus = ['Alive', 'Dead', 'Unknown'];
const filterListGender = ['Female', 'Male', 'Genderless', 'Unknown'];
const filterListSpecies = [
	'Human',
	'Alien',
	'Humanoid',
	'Robot',
	'Desease',
	'Poopybutthole',
	'Mythological Creature',
];

class Characters extends Component {
	state = {
		characters: [],
		params: {},
	};

	setCharacters = characterObj => {
		this.setState({
			characters: characterObj,
		});
	};

	onFilter = (filterKey, filterValue) => {
		if (filterValue)
			this.setState(state => ({
				params: {
					...state.params,
					[filterKey.toLowerCase()]: filterValue,
				},
			}));
	};

	render() {
		const { characters, params } = this.state;

		return (
			<main>
				<Title />
				<section className={style.section_wrap}>
					<h2 className={style.section_title}>Characters</h2>

					<FilterSelect
						filterName={filterName.SPECIES}
						filterList={filterListSpecies}
						onFilter={this.onFilter}
					/>
					<FilterSelect
						filterName="Status"
						filterList={filterListStatus}
						onFilter={this.onFilter}
					/>
					<FilterSelect
						filterName="Gender"
						filterList={filterListGender}
						onFilter={this.onFilter}
					/>

					<ul className={style.characters_wrap}>
						{characters ? (
							characters.map(character => (
								<li
									key={character.id}
									className={style.characters_card_li}
								>
									<CharacterItem character={character} />
								</li>
							))
						) : (
							<p className={style.error}>Characters not found</p>
						)}
					</ul>
					<Pagination
						setStatePage={this.setCharacters}
						pageName="character"
						params={params}
					/>
				</section>
			</main>
		);
	}
}

export default Characters;
