import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";
import ExpensesFilter from "../expenses-filter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2021');
    const yearFilterChangeHandler = (yearToFilter) => {
        console.log(`Should search by year: ${yearToFilter}`);
        setFilterYear(yearToFilter);
    };
  return (
    <div>     
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onYearFilterChange={yearFilterChangeHandler}></ExpensesFilter>
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
