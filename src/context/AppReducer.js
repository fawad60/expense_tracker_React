import React from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "Delete_transaction":
      console.log();
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Add_transaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    default:
      return state;
  }
};

export default AppReducer;
