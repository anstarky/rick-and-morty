import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, Button } from '@material-ui/core';

import style from './InputForm.module.css';

class InputForm extends Component {
	static defaultProps = {
		onSave: () => '',
	};

	static propTypes = {
		onSave: PropTypes.func,
		filterName: PropTypes.string.isRequired,
	};

	state = {
		text: '',
	};

	handleChange = e => {
		this.setState({
			text: e.currentTarget.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.onSave(this.props.filterName, this.state.text);
		this.setState({ text: '' });
	};

	render() {
		const { text } = this.state;
		return (
			<form
				className={style.form}
				noValidate
				autoComplete="off"
				onSubmit={this.handleSubmit}
			>
				<Input
					type="text"
					className={style.input}
					placeholder="Input text"
					inputProps={{ 'aria-label': 'description' }}
					value={text}
					onChange={this.handleChange}
					autoFocus
				/>
				<Button
					variant="contained"
					color="primary"
					size="large"
					className={style.button_save}
					type="submit"
				>
					Apply
				</Button>
			</form>
		);
	}
}

export default InputForm;
