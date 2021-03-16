import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class RadioButtonsGroup extends Component {
	static defaultProps = {
		onRadio: () => '',
	};

	static propTypes = {
		onRadio: PropTypes.func,
	};

	state = {
		value: '',
	};

	handleChange = e => {
		this.setState({
			value: e.currentTarget.value,
		});
		this.props.onRadio(e.currentTarget.value);
	};

	render() {
		const { value } = this.state;
		return (
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="locations"
					name="locations"
					value={value}
					onChange={this.handleChange}
					style={{ flexDirection: 'row' }}
				>
					<FormControlLabel
						style={{ color: '#fff' }}
						value=""
						control={<Radio style={{ color: '#fc842c' }} />}
						label="All"
					/>
					<FormControlLabel
						style={{ color: '#fff' }}
						value="name"
						control={<Radio style={{ color: '#fc842c' }} />}
						label="Name"
					/>
					<FormControlLabel
						style={{ color: '#fff' }}
						value="type"
						control={<Radio style={{ color: '#fc842c' }} />}
						label="Type"
					/>
					<FormControlLabel
						style={{ color: '#fff' }}
						value="dimension"
						control={<Radio style={{ color: '#fc842c' }} />}
						label="Dimension"
					/>
				</RadioGroup>
			</FormControl>
		);
	}
}

export default RadioButtonsGroup;
