/* eslint-disable */

const fetchAPI = (query, pageNumber = 1, params = {}) => {
	const baseURL = `https://rickandmortyapi.com/api/${query}/?page=${pageNumber}`;

	let finalURL = baseURL;

	const entries = Object.entries(params);
	for (const entry of entries) {
		const key = entry[0];
		const value = entry[1];
		if (value === 'none') {
			finalURL.replace('&${key}=${value}', '');
		} else finalURL += `&${key}=${value}`;

		if (key === '') {
			finalURL = baseURL;
		}
	}
	return fetch(finalURL)
		.then(response => response.json())
		.then(data => data);
};

export default fetchAPI;
