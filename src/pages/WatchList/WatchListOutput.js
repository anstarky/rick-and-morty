import React from 'react';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import style from './WatchList.module.css';

const WatchListOutput = ({ list, onDeleteList, onUpdateCompleted }) => (
	<ul className={style.output_wrap}>
		{list.map(
			listItem => (
				<li key={listItem.id} className={style.output_list}>
					<input
						type="checkbox"
						className={style.list_checkbox}
						checked={listItem.completed}
						onChange={() => onUpdateCompleted(listItem.id)}
					/>
					<span
						className={
							listItem.completed
								? style.list_text_checked
								: style.list_text
						}
					>
						{listItem.text}
					</span>

					<DeleteForeverIcon
						onClick={() => onDeleteList(listItem.id)}
						className={style.button_delete}
						color="secondary"
					/>
				</li>
			),
			// ),
		)}
	</ul>
);

WatchListOutput.defaultProps = {
	list: [],
};

WatchListOutput.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({})),
	onDeleteList: PropTypes.func.isRequired,
	onUpdateCompleted: PropTypes.func.isRequired,
};

export default WatchListOutput;
