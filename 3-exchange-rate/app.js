// Selectors
const input = document.querySelector('input');
const base = document.querySelector('#select-1');
const trade = document.querySelector('#select-2');
const submit = document.querySelector('button');
const rate = document.querySelector('#rate');
const result = document.querySelector('#nom');

// Currency List Object
const currency = [
	{rate: 'CAD'},
	{rate: 'HKD'},
	{rate: 'ISK'},
	{rate: 'PHP'},
	{rate: 'DKK'},
	{rate: 'HUF'},
	{rate: 'CZK'},
	{rate: 'AUD'},
	{rate: 'RON'},
	{rate: 'SEK'},
	{rate: 'IDR'},
	{rate: 'INR'},
	{rate: 'BRL'},
	{rate: 'RUB'},
	{rate: 'HRK'},
	{rate: 'JPY'},
	{rate: 'THB'},
	{rate: 'CHF'},
	{rate: 'SGD'},
	{rate: 'PLN'},
	{rate: 'BGN'},
	{rate: 'TRY'},
	{rate: 'CNY'},
	{rate: 'NOK'},
	{rate: 'NZD'},
	{rate: 'ZAR'},
	{rate: 'USD'},
	{rate: 'MXN'},
	{rate: 'ILS'},
	{rate: 'ISK'},
	{rate: 'GBP'},
	{rate: 'KRW'},
	{rate: 'MYR'},
	];
	
// init
currency.forEach(rate => {
	base.innerHTML += `
		<option>${rate.rate}</option>
	`;
	
	trade.innerHTML += `
			<option>${rate.rate}</option>
		`;
})