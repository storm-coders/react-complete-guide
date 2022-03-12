import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Paper", amount: 294.67, date: new Date(2021, 2, 28), id: 1 },
  {
    title: "Car insurance",
    amount: 14.67,
    date: new Date(2019, 4, 28),
    id: 2,
  },
  { title: "Pencil", amount: 100, date: new Date(2022, 1, 27), id: 3 },
  { title: "Computer", amount: 649.12, date: new Date(2022, 3, 29), id: 4 },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
