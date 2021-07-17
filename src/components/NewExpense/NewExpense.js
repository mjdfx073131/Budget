import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  const isEditHandler = () => {
    setIsEditing(true);
  };
    const stopEditHandler = () => {
      setIsEditing(false);
    };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
