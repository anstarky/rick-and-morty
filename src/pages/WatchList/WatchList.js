import React, { Component } from 'react';
import shortid from 'shortid';

import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import WatchListOutput from './WatchListOutput';
import storage from '../../services/storage';

import style from './WatchList.module.css';

class WatchList extends Component {
	state = {
		list: [],
	};

	componentDidMount() {
		const list = storage.get('list');

		if (list) {
			this.setState({ list });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { list } = this.state;
		if (prevState.list !== list) {
			storage.save('list', list);
		}
	}

	saveList = (filterName, text) => {
		const list = {
			id: shortid.generate(),
			text,
			completed: false,
		};

		if (list.text !== '')
			this.setState(state => ({
				list: [...state.list, list],
			}));
	};

	deleteList = listId => {
		this.setState(state => ({
			list: state.list.filter(list => list.id !== listId),
		}));
	};

	updateListStatus = listId => {
		this.setState(state => ({
			list: state.list.map(listItem =>
				listItem.id === listId
					? { ...listItem, completed: !listItem.completed }
					: listItem,
			),
		}));
	};

	render() {
		const { list } = this.state;

		return (
			<main>
				<Title />
				<section className={style.section_wrap}>
					<h2 className={style.section_title}>My Watch List</h2>
					<div className={style.form_wrap}>
						<InputForm
							filterName="My Watch List"
							onSave={this.saveList}
						/>
					</div>
					{list.length > 0 && (
						<WatchListOutput
							list={list}
							onDeleteList={this.deleteList}
							onUpdateCompleted={this.updateListStatus}
						/>
					)}
				</section>
			</main>
		);
	}
}

export default WatchList;
