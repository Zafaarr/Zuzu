const ADD = "ADD";
const CLEAR = "CLEAR";
const DELETE = "DELETE";
const INCREASE = "INCREASE";
const DECRASE = "DECRASE";
const ITEMPRICE = "ITEMPRICE";

const intialState = [];

export const ZuzuRedux = (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      const checkingSameId = state.findIndex(
        (el) => el.id === action.newOrder.id
      );
      if (checkingSameId !== -1) {
        const updatedCount = {
          ...state[checkingSameId],
          count: state[checkingSameId].count + action.newOrder.count,
        };
        return [
          ...state.slice(0, checkingSameId),
          updatedCount,
          ...state.slice(checkingSameId + 1),
        ];
      } else {
        return [action.newOrder, ...state];
      }
    case CLEAR:
      return [];
    case DELETE:
      return state.filter((el) => el.idi !== action.idi);
    case INCREASE:
      return state.map((el) =>
        el.idi === action.idi ? { ...el, count: el.count + 1 } : el
      );
    case DECRASE:
      return state.map((el) =>
        el.idi === action.idi
          ? { ...el, count: el.count > 1 ? el.count - 1 : 1 }
          : el
      );
    case ITEMPRICE:
      return state.filter((el) =>
        el.id == action.id ? { ...el, totalPrice: el.count * el.price } : ""
      );
    default:
      return state;
  }
};

export const addOrder = (newOrder) => {
  return {
    type: ADD,
    newOrder,
  };
};

export const itemPriceAction = (id) => {
  return {
    type: ITEMPRICE,
    id,
  };
};

export const clearAction = () => {
  return {
    type: CLEAR,
  };
};

export const deleteAction = (idi) => {
  return {
    type: DELETE,
    idi,
  };
};

export const increaseAction = (idi) => {
  return {
    type: INCREASE,
    idi,
  };
};

export const decreaseAction = (idi) => {
  return {
    type: DECRASE,
    idi,
  };
};
