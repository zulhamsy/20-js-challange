// Selectors
const input = document.querySelector('input');
const base = document.querySelector('#select-1');
const base_flag = document.querySelector('#flag-1');
const trade = document.querySelector('#select-2');
const trade_flag = document.querySelector('#flag-2');
const submit = document.querySelector('button');
const rate = document.querySelector('#rate');
const result = document.querySelector('#nom');
const swap = document.querySelector('.swap');

// Currency List Object
const currency = [
	{rate: 'CAD', code: 'CA'},
	{rate: 'HKD', code: 'HK'},
	{rate: 'ISK', code: 'IS'},
	{rate: 'PHP', code: 'PH'},
	{rate: 'DKK', code: 'DK'},
	{rate: 'HUF', code: 'HU'},
	{rate: 'CZK', code: 'CZ'},
	{rate: 'AUD', code: 'AU'},
	{rate: 'RON', code: 'RO'},
	{rate: 'SEK', code: 'SE'},
	{rate: 'IDR', code: 'ID'},
	{rate: 'INR', code: 'IN'},
	{rate: 'BRL', code: 'BR'},
	{rate: 'RUB', code: 'RU'},
	{rate: 'HRK', code: 'HR'},
	{rate: 'JPY', code: 'JP'},
	{rate: 'THB', code: 'TH'},
	{rate: 'CHF', code: 'CH'},
	{rate: 'SGD', code: 'SG'},
	{rate: 'PLN', code: 'PL'},
	{rate: 'BGN', code: 'BG'},
	{rate: 'TRY', code: 'TR'},
	{rate: 'CNY', code: 'CN'},
	{rate: 'NOK', code: 'NO'},
	{rate: 'NZD', code: 'NZ'},
	{rate: 'ZAR', code: 'ZA'},
	{rate: 'USD', code: 'US'},
	{rate: 'MXN', code: 'MX'},
	{rate: 'ILS', code: 'IL'},
	{rate: 'GBP', code: 'GB'},
	{rate: 'KRW', code: 'KP'},
	{rate: 'MYR', code: 'MY'},
	];

// function helper
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function showResult(json,trade) {
	console.log(json);
	
	rate.innerHTML = trade;
	nom.innerHTML = formatNumber((input.value * json.rates[trade]).toFixed(2));
}

// function handler
function changeFlag(e) {
	const url = e.target.value;
	const img = e.target.parentNode.children[0];
	img.src = `https://www.countryflags.io/${url}/flat/32.png`;
}

function exchangeCurrency(e) {
	e.preventDefault();
	const base = document.querySelector('#select-1').selectedOptions[0].text;
	const trade = document.querySelector('#select-2').selectedOptions[0].text;
	fetch(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${trade}`)
		.then(data => data.json())
		.then(data => showResult(data, trade));
}

function swapCurrency(e) {
	[base.value, trade.value] = [trade.value, base.value];
	[base_flag.src, trade_flag.src] = [trade_flag.src, base_flag.src];
}

// Event listener
base.addEventListener('change', changeFlag);
trade.addEventListener('change', changeFlag);
submit.addEventListener('click', exchangeCurrency);
swap.addEventListener('click', swapCurrency)

// init
currency.forEach(rate => {
	base.innerHTML += `
		<option value='${rate.code}'>${rate.rate}</option>
	`;
	
	trade.innerHTML += `
		<option value='${rate.code}'>${rate.rate}</option>
		`;
})