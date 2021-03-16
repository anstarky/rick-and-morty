import React from 'react';
import PropTypes from 'prop-types';

import style from './Characters.module.css';

const CharacterItemDetails = ({ character }) => (
	<div className={style.card_detail}>
		<div className={style.detail_img}>
			<img src={character.image} alt={character.name} />
		</div>
		<div className={style.card_desc}>
			<h3 className={style.card_title}>{character.name}</h3>
			<div className={style.card_about}>
				<p>
					<span className={style.card_tag}>Species: </span>
					<span className={style.card_text}>{character.species}</span>
				</p>
				<p>
					<span className={style.card_tag}>Status: </span>
					<span>
						{character.status[0].toUpperCase() +
							character.status.substring(1)}
					</span>
				</p>
				<p>
					<span className={style.card_tag}>Origin location: </span>
					<span>{character.origin.name}</span>
				</p>
				<p>
					<span className={style.card_tag}>Gender: </span>
					<span>{character.gender}</span>
				</p>
				<p>
					<span className={style.card_tag}>
						Last known location endpoint:{' '}
					</span>
					<span>{character.location.name}</span>
				</p>
			</div>
		</div>
	</div>
);

CharacterItemDetails.defaultProps = {
	character: {},
};

CharacterItemDetails.propTypes = {
	character: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		species: PropTypes.string,
		status: PropTypes.string,
		origin: PropTypes.shape({
			name: PropTypes.string,
		}),
		gender: PropTypes.string,
		location: PropTypes.shape({
			name: PropTypes.string,
		}),
	}),
};

export default CharacterItemDetails;
