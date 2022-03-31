import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearFilterChange={yearFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
