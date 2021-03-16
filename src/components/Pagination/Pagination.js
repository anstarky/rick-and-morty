import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';

import api from '../../services/api';
import style from './Pagination.module.css';

let nextPage = 2;
let prevPage = null;

class Pagination extends Component {
	static defaultProps = {
		params: {},
	};

	static propTypes = {
		pageName: PropTypes.string.isRequired,
		setStatePage: PropTypes.func.isRequired,
		params: PropTypes.objectOf(PropTypes.string),
	};

	state = {
		currentPage: 1,
		isLoading: false,
		correctRequest: true,
	};

	componentDidMount() {
		const { currentPage } = this.state;
		this.fetchesAPI(currentPage);
	}

	componentDidUpdate(prevProps) {
		const { params } = this.props;
		if (prevProps.params !== params) {
			this.fetchesAPI(1);
		}
	}

	fetchesAPI = pageNumber => {
		this.setState({ isLoading: true });
		const { params } = this.props;

		api(this.props.pageName, pageNumber, params)
			.then(data => {
				const { info, results } = data;
				this.props.setStatePage(results);
				if (info !== undefined) {
					this.setState({
						currentPage: pageNumber,

						correctRequest: true,
					});
					nextPage = pageNumber < info.pages ? pageNumber + 1 : null;
					prevPage = pageNumber > 1 ? pageNumber - 1 : null;
				} else {
					this.setState({
						correctRequest: false,
					});
				}
			})
			.catch()
			.finally(() => {
				this.setState({ isLoading: false });
			});
	};

	render() {
		const { currentPage, isLoading, correctRequest } = this.state;

		return (
			<div>
				{isLoading && <Loader />}
				{correctRequest && (
					<div className={style.pagination}>
						{prevPage && (
							<button
								type="button"
								onClick={() => this.fetchesAPI(prevPage)}
							>
								{prevPage}
							</button>
						)}
						<button type="button" className={style.current_page}>
							{currentPage}
						</button>
						{nextPage && (
							<button
								type="button"
								onClick={() => this.fetchesAPI(nextPage)}
							>
								{nextPage}
							</button>
						)}
					</div>
				)}
			</div>
		);
	}
}

export default Pagination;
