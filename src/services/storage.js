const save = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
		// console.log(err);
	}
};

const get = key => {
	try {
		const list = localStorage.getItem(key);
		return list ? JSON.parse(list) : null;
	} catch (e) {
		// console.log('err');
	}

	return null;
};
export default {
	save,
	get,
};
