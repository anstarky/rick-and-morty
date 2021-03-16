import React, { Component } from 'react';

import PropTypes from 'prop-types';

import CharacterItemDetailed from './CharacterItemDetails';
import Modal from '../../components/Modal';
import style from './Characters.module.css';

class CharacterItem extends Component {
	static defaultProps = {
		character: {},
	};

	static propTypes = {
		character: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			image: PropTypes.string,
			species: PropTypes.string,
			status: PropTypes.string,
			origin: PropTypes.shape({
				name: PropTypes.string,
			}),
		}),
	};

	state = {
		isModalOpen: false,
	};

	openModal = () => this.setState({ isModalOpen: true });

	closeModal = () => this.setState({ isModalOpen: false });

	render() {
		const { isModalOpen } = this.state;
		const { character } = this.props;

		return (
			<>
				<div
					className={style.characters_card}
					onClick={this.openModal}
					role="presentation"
				>
					<div className={style.card_img}>
						<img src={character.image} alt={character.name} />
					</div>
					<div className={style.card_desc}>
						<h3 className={style.card_title}>{character.name}</h3>
						<div className={style.card_about}>
							<p>
								<span className={style.card_tag}>
									Species:{' '}
								</span>
								<span className={style.card_text}>
									{character.species}
								</span>
							</p>
							<p>
								<span className={style.card_tag}>Status: </span>
								<span>
									{character.status[0].toUpperCase() +
										character.status.substring(1)}
								</span>
							</p>
							<p>
								<span className={style.card_tag}>
									Origin location:{' '}
								</span>
								<span>{character.origin.name}</span>
							</p>
						</div>
					</div>
				</div>
				{isModalOpen && (
					<Modal onClose={this.closeModal}>
						<CharacterItemDetailed character={character} />
					</Modal>
				)}
			</>
		);
	}
}

export default CharacterItem;
