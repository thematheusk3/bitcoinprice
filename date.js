function zero(n) {
	if (n < 10)
		return `0${n}`;
	else
		return `${n}`;
}
function getDate() {
	let d = new Date();
	let day = zero(d.getDate());
	let month = zero(d.getMonth() + 1);
	let year = d.getFullYear();
	let hour = zero(d.getHours());
	let minute = zero(d.getMinutes());
	let seconds = zero(d.getSeconds());
	return `[${day}/${month}/${year} ${hour}:${minute}:${seconds}]`;
}

module.exports = getDate;