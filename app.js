const rp = require('request-promise');
const cheerio = require('cheerio');

const getDate = require('./date');
const writeLog = require('./log');

const uri = "https://coinmarketcap.com/currencies/bitcoin/";

function main() {
	const options = {
		uri: uri, transform: function (body) {
			return cheerio.load(body)
		}
	}
	rp(options).then(($) => {
		let price = $('.priceValue___11gHJ').text();
		let display = `${getDate()}: ${price} Bitcoin Price`;
		writeLog(display);
		console.log(display);
	})
}
setInterval(main, 60000);
main();