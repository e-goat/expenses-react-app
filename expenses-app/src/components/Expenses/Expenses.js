import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

let Expenses = (props) => {
  const expensesArray = [];

  for (let i = 0; i < props.items.length; i++) {
    expensesArray.push(
      <ExpenseItem
        title={props.items[i].title}
        amount={props.items[i].amount}
        date={props.items[i].date}
      />
    );
  }

  return <Card className="expenses">{expensesArray}</Card>;
};

export default Expenses;
