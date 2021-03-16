import React, { Component } from 'react';

import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import Pagination from '../../components/Pagination';
import EpisodeItem from './EpisodeItem';

import style from './Episodes.module.css';

const filterName = {
	NAME: 'Name',
};

class Episodes extends Component {
	state = {
		episodes: [],
		params: {},
	};

	setEpisodes = episodeObj => {
		this.setState({
			episodes: episodeObj,
		});
	};

	onFilter = (filterKey, filterValue) => {
		this.setState(state => ({
			params: {
				...state.params,
				[filterKey.toLowerCase()]: filterValue,
			},
		}));
	};

	render() {
		const { episodes, params } = this.state;

		return (
			<main>
				<Title />
				<section className={style.section_wrap}>
					<h2 className={style.section_title}>Episodes</h2>

					<div className={style.input_wrap}>
						<span className={style.input_desc}>
							Filter by name:
						</span>
						<InputForm
							filterName={filterName.NAME}
							onSave={this.onFilter}
						/>
					</div>

					<ul className={style.episodes_wrap}>
						{episodes ? (
							episodes.map(episode => (
								<li
									key={episode.id}
									className={style.episodes_card_li}
								>
									<EpisodeItem episode={episode} />
								</li>
							))
						) : (
							<p className={style.error}>Episodes not found</p>
						)}
					</ul>
					<Pagination
						setStatePage={this.setEpisodes}
						pageName="episode"
						params={params}
					/>
				</section>
			</main>
		);
	}
}

export default Episodes;
