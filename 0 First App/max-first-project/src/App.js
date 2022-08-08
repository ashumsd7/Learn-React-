import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const DUMMY_DATA = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  function addExpensesHandler(expense) {
    console.log("IN APP>JS", expense);
    // setExpenses([expense,...expenses])
    setExpenses((prevState) => {
      console.log("prevState", prevState);
      console.log("new", [expense, ...prevState]);
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler} />

      <ul>
        {expenses.length == 0 ? (
          <p>No Expensed</p>
        ) : (
          expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
