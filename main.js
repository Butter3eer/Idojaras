const settings = {
	async: true,
	crossDomain: true,
	url: 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c7230971cmshb656511d1a5e536p1ae900jsnc1d3e25a70b2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});