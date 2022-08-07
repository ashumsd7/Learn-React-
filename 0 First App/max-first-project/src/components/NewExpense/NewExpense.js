import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDateHandler=(enteredExpenseData)=>{
        console.log("CALL HUA KYA")
     const expenseData= {
        ...enteredExpenseData,
        id: Math.random().toString()

        
    }
    console.log("expenseData", expenseData)
 props.onAddExpense(expenseData)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
