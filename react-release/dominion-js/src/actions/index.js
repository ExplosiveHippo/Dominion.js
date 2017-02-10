import * as types from '/actionTypes';

export function buyCard(card) {
  return {
    type: types.BUY_CARD,
    card
  };
}

