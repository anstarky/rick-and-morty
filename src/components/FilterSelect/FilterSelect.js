import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core/';

import style from './FilterSelect.module.css';

class FilterSelect extends Component {
	static defaultProps = {
		onFilter: () => this.state.item,
	};

	static propTypes = {
		filterName: PropTypes.string.isRequired,
		filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
		onFilter: PropTypes.func,
	};

	state = { item: '' };

	handleChange = e => {
		this.setState({ item: e.target.value });
		this.props.onFilter(this.props.filterName, e.target.value);
	};

	render() {
		const { item } = this.state;

		const { filterName, filterList } = this.props;
		return (
			<FormControl className={style.form_control}>
				<InputLabel
					id="demo-simple-select-label"
					style={{ top: 10, left: 10 }}
				>
					{filterName}
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={item}
					onChange={this.handleChange}
				>
					<MenuItem key={0} value="none">
						<em>--------</em>
					</MenuItem>
					{filterList.map(filterItem => (
						<MenuItem key={filterItem} value={filterItem}>
							{filterItem}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	}
}

export default FilterSelect;
