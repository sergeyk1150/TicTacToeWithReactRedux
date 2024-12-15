export const getInfoAboutGame = (isDraw, isGameEnded, currentPlayer) => {
	if (!isDraw) {
		if (isGameEnded) {
			return `Победа: ${currentPlayer}`;
		} else {
			return `Ходит: ${currentPlayer}`;
		}
	} else {
		return `Ничья`;
	}
};

export const getIsWinner = (WIN_PATTERNS, field, currentPlayer) => {
	let bool = false;
	for (let pattern of WIN_PATTERNS) {
		const isWinner = pattern.every((index) => {
			return field[index] === currentPlayer;
		});
		if (isWinner) {
			bool = true;
		}
	}
	return bool;
};

export const checkField = (array) => {
	return array.every((el) => el !== '');
};
