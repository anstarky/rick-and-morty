import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';

import style from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

class Modal extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		onClose: PropTypes.func.isRequired,
	};

	backdropRef = createRef();

	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress = e => {
		if (e.code !== 'Escape') {
			return;
		}

		this.props.onClose();
	};

	handleBackdropClick = e => {
		if (this.backdropRef.current && e.target !== this.backdropRef.current) {
			return;
		}

		this.props.onClose();
	};

	handleCloseIcon = () => {
		this.props.onClose();
	};

	render() {
		const { children } = this.props;

		return createPortal(
			<div
				className={style.backdrop}
				ref={this.backdropRef}
				onClick={this.handleBackdropClick}
				role="presentation"
			>
				<div className={style.modal}>
					<CloseIcon
						className={style.closeIcon}
						onClick={this.handleCloseIcon}
					/>
					{children}
				</div>
			</div>,
			MODAL_ROOT,
		);
	}
}

export default Modal;
