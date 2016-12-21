function toPounds(val) {
	let fixed = val.toFixed(2)
	return '£' + String(fixed)
}

export default toPounds