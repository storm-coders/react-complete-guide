import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import { useState } from "react";

// const filterExpenses = (expenses, dateFilter) => {
//   return expenses.filter(e => e.date.getFullYear() === +dateFilter);
// }

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2021");
  //const [expenses, setExpenses] = useState(filterExpenses(props.expenses, '2021'));
  const yearFilterChangeHandler = (yearToFilter) => {
    setFilterYear(yearToFilter);
    //setExpenses(filterExpenses(props.expenses, yearToFilter));
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );

  let expensesContent = <p>No expenses found</p>;
  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearFilterChange={yearFilterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
