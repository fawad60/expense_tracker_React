import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};
// Create Context
export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "Delete_transaction",
      payload: id,
    });
  }
  function AddTransaction(transaction) {
    dispatch({
      type: "Add_transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
