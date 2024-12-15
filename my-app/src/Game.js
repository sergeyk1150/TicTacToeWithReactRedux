import React from 'react';
import { GameLayout } from './GameLayout';
import { useDispatch } from 'react-redux';
import { reset } from './actions/';
export const Game = () => {
	const dispatch = useDispatch();
	const onReset = () => {
		dispatch(reset);
	};
	return <GameLayout handlerReset={onReset} />;
};
