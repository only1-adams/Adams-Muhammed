///SAWTOOTH
function solution(arr) {
	let count = 0;
	let up = 1,
		down = 1;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			up = down + 1;
			down = 1;
		} else if (arr[i] < arr[i - 1]) {
			down = up + 1;
			up = 1;
		} else {
			up = 1;
			down = 1;
		}
		count += Math.max(up, down) - 1;
	}

	return count;
}
